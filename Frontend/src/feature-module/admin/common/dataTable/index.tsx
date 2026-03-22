import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Table } from "antd";

export interface DatatableProps {
  columns: any[];
  dataSource: any[];
  searchValue?: string;
  showRowSelection?: boolean;
}

const CommonDatatable: React.FC<DatatableProps> = ({
  columns,
  dataSource,
  searchValue = "",
  showRowSelection = true,
}) => {
  const [filteredDataSource, setFilteredDataSource] = useState(dataSource);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const tableRootRef = useRef<HTMLDivElement>(null);

  // Bootstrap dropdowns inside scrollable Ant tables clip without fixed Popper strategy.
  useLayoutEffect(() => {
    const root = tableRootRef.current;
    const bootstrap = (window as unknown as { bootstrap?: { Dropdown: { getInstance: (el: HTMLElement) => { dispose: () => void } | null; new (el: HTMLElement, opts?: object): unknown } } }).bootstrap;
    if (!root || !bootstrap?.Dropdown) return;

    const toggles = Array.from(root.querySelectorAll<HTMLElement>('[data-bs-toggle="dropdown"]'));
    toggles.forEach((toggle) => {
      bootstrap.Dropdown.getInstance(toggle)?.dispose();
      new bootstrap.Dropdown(toggle, {
        boundary: "viewport",
        popperConfig: { strategy: "fixed" },
      });
    });

    return () => {
      toggles.forEach((toggle) => {
        bootstrap.Dropdown.getInstance(toggle)?.dispose();
      });
    };
  }, [filteredDataSource, showRowSelection]);

  // Filter data when searchValue changes
  useEffect(() => {
    if (searchValue) {
      const filteredData = dataSource.filter((record) =>
        Object.values(record).some((field) =>
          String(field).toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      setFilteredDataSource(filteredData);
    } else {
      setFilteredDataSource(dataSource);
    }
  }, [searchValue, dataSource]);

  const onSelectChange = (newSelectedRowKeys: any[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div ref={tableRootRef} className="custom-table antd-custom-table">
      <Table
        className="table datanew dataTable no-footer"
        columns={columns}
        rowHoverable={false}
        rowSelection={showRowSelection ? rowSelection : undefined}
        dataSource={filteredDataSource}
        pagination={false}
      />
    </div>
  );
};

export default CommonDatatable;
