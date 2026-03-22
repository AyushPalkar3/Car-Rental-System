import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import PredefinedDateRanges from "../../common/range-picker/datePicker";
import CommonDatatable from "../../common/dataTable";
import CustomerModal from "../../common/modal/customerModal";
import { userAPI } from "../../service/api/user";
import { toast } from "react-toastify";
import dayjs from "dayjs";

const CustomersList = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("Latest");
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await userAPI.getAll();
      setData(response.data);
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleToggleBlock = async (id: string) => {
    try {
      const response = await userAPI.toggleStatus(id);
      toast.success(response.data.message);
      fetchUsers(); // Refresh data
    } catch (error: any) {
      toast.error(error.message || "Failed to update user status");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleDateChange = (dates: [dayjs.Dayjs, dayjs.Dayjs] | null) => {
    setDateRange(dates);
  };

  const filteredAndSortedData = useMemo(() => {
    let result = [...data];

    // Filter by registration date only when a range is selected (not “Show all”)
    if (dateRange?.[0] && dateRange?.[1]) {
      const [from, to] = dateRange;
      result = result.filter((user) => {
        const createdAt = dayjs(user.createdAt);
        return (
          (createdAt.isSame(from, "day") || createdAt.isAfter(from, "day")) &&
          (createdAt.isSame(to, "day") || createdAt.isBefore(to, "day"))
        );
      });
    }

    // Sort
    if (sortOption === "Latest") {
      result.sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    } else if (sortOption === "Ascending") {
      result.sort((a, b) => (a.firstName || "").localeCompare(b.firstName || ""));
    } else if (sortOption === "Descending") {
      result.sort((a, b) => (b.firstName || "").localeCompare(a.firstName || ""));
    }

    return result;
  }, [data, dateRange, sortOption]);

  const columns = [
    {
      title: "CUSTOMER",
      dataIndex: "firstName",
      render: (text: string, record: any) => (
        <div>
          <h6 className="fs-14 fw-semibold">
            <Link to={`${all_routes.customerDetails}/${record.id}`}>
              {record.firstName} {record.lastName}
            </Link>
          </h6>
          <p>{record.phoneNum}</p>
        </div>
      ),
      sorter: (a: any, b: any) => (a.firstName || "").localeCompare(b.firstName || ""),
    },

    {
      title: "EMAIL",
      dataIndex: "email",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => (a.email || "").localeCompare(b.email || ""),
    },
    {
      title: "DL NUMBER",
      dataIndex: "dlNumber",
      render: (text: string) => (
        <div className="d-flex align-items-center">
          <span className="table-icon me-2">
            <i className="ti ti-file-text" />
          </span>
          <p className="text-info">{text || "N/A"}</p>
        </div>
      ),
      sorter: (a: any, b: any) => (a.dlNumber || "").localeCompare(b.dlNumber || ""),
    },
    {
      title: "RENTS",
      dataIndex: "_count",
      render: (count: any) => (
        <div className="d-flex align-items-center">
          <span className="table-icon me-2">
            <i className="ti ti-car" />
          </span>
          <p className="text-violet">{count?.bookings || 0}</p>
        </div>
      ),
      sorter: (a: any, b: any) => (a._count?.bookings || 0) - (b._count?.bookings || 0),
    },
    {
      title: "STATUS",
      dataIndex: "isBlocked",
      render: (isBlocked: boolean) => (
        <span className={`badge ${isBlocked ? "bg-danger" : "bg-success"}`}>
          {isBlocked ? "Blocked" : "Active"}
        </span>
      ),
      sorter: (a: any, b: any) => Number(a.isBlocked) - Number(b.isBlocked),
    },
    {
      title: "Action",
      dataIndex: "",
      render: (record: any) => (
        <div className="dropdown">
          <button
            className="btn btn-icon btn-sm"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="ti ti-dots-vertical" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end p-2">
            <li>
              <Link
                className="dropdown-item rounded-1"
                to={`${all_routes.customerDetails}/${record.id}`}
              >
                <i className="ti ti-eye me-1" />
                View Details
              </Link>
            </li>
            <li>
              <button
                className="dropdown-item rounded-1"
                onClick={() => handleToggleBlock(record.id)}
              >
                <i className={`ti ${record.isBlocked ? "ti-lock-open" : "ti-lock"} me-1`} />
                {record.isBlocked ? "Unblock" : "Block"}
              </button>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">Customers</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Customers
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* /Breadcrumb */}

        {/* Table Header */}
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
          <div className="d-flex align-items-center flex-wrap row-gap-3">
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-filter me-1" /> Sort By : {sortOption}
              </Link>
              <ul className="dropdown-menu  dropdown-menu-end p-2">
                <li>
                  <button
                    className="dropdown-item rounded-1"
                    onClick={() => setSortOption("Latest")}
                  >
                    Latest
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item rounded-1"
                    onClick={() => setSortOption("Ascending")}
                  >
                    Ascending
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item rounded-1"
                    onClick={() => setSortOption("Descending")}
                  >
                    Descending
                  </button>
                </li>
              </ul>
            </div>
            <div className="me-2">
              <div className="input-icon-start position-relative topdatepicker">
                <span className="input-icon-addon">
                  <i className="ti ti-calendar" />
                </span>
                <PredefinedDateRanges
                  defaultShowAll
                  onDateChange={handleDateChange}
                />
              </div>
            </div>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div className="top-search me-2">
              <div className="top-search-group">
                <span className="input-icon">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Table Header */}

        {/* Custom Data Table */}
        <CommonDatatable
          dataSource={filteredAndSortedData}
          columns={columns}
          searchValue={searchValue}
          showRowSelection={false}
        />
        {/* Custom Data Table */}
      </div>
      <CustomerModal />
    </>
  );
};

export default CustomersList;
