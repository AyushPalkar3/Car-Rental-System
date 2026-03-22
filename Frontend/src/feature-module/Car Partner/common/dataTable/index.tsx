import React, { useEffect, useState } from "react";
import { Table } from "antd";

export interface DatatableProps {
  columns: any[];
  dataSource: any[];
  searchValue?: string; // Accept search value as a prop
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
    <div className="custom-table antd-custom-table">
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
