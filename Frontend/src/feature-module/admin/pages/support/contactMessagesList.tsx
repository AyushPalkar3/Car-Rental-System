import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import CommonDatatable from "../../common/dataTable";
import { all_routes } from "../../../../router/all_routes";
import axiosClient from "../../../../api/user/apiClient";
import { toast } from "react-toastify";

const ContactMessagesList = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [sortLabel, setSortLabel] = useState<string>("Latest");

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await axiosClient.get("/contact");
      const mappedData = response.data.map((msg: any) => ({
        ...msg,
        key: msg.id,
        FROM: msg.name,
        IMAGE: "avatar-20.jpg", // Default avatar or use one if available
        PHONE: msg.phone,
        EMAIL: msg.email,
        CREATEDDATE: new Date(msg.createdAt).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }),
        RAWDATE: new Date(msg.createdAt),
        MESSAGE: msg.message
      }));
      setData(mappedData);
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast.error("Failed to fetch contact messages.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSort = (type: string, label: string) => {
    setSortLabel(label);
    const sortedData = [...data];
    if (type === "latest") {
      sortedData.sort((a, b) => b.RAWDATE.getTime() - a.RAWDATE.getTime());
    } else if (type === "asc") {
      sortedData.sort((a, b) => a.FROM.localeCompare(b.FROM));
    } else if (type === "desc") {
      sortedData.sort((a, b) => b.FROM.localeCompare(a.FROM));
    } else if (type === "month") {
      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);
      setData(data.filter(msg => msg.RAWDATE >= lastMonth));
      return;
    } else if (type === "week") {
      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);
      setData(data.filter(msg => msg.RAWDATE >= lastWeek));
      return;
    }
    setData(sortedData);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await axiosClient.delete(`/contact/${deleteId}`);
      toast.success("Message deleted successfully");
      setData(data.filter(msg => msg.id !== deleteId));
      setDeleteId(null);
    } catch (error) {
      console.error("Error deleting message:", error);
      toast.error("Failed to delete message");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update search state
  };

  const columns = [
    {
      title: "FROM",
      dataIndex: "FROM",
      render: (text: string) => (
        <div className="d-flex align-items-center">
          <h6>
            <Link to="#" className="fs-14 fw-semibold">
              {text}
            </Link>
          </h6>
        </div>
      ),
      sorter: (a: any, b: any) => a.FROM.localeCompare(b.FROM),
    },
    {
      title: "PHONE",
      dataIndex: "PHONE",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.PHONE.localeCompare(b.PHONE),
    },
    {
      title: "EMAIL",
      dataIndex: "EMAIL",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.EMAIL.localeCompare(b.EMAIL),
    },
    {
      title: "CREATED DATE",
      dataIndex: "CREATEDDATE",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.RAWDATE.getTime() - b.RAWDATE.getTime(),
    },
    {
      title: "MESSAGE",
      dataIndex: "MESSAGE",
      render: (text: string) => (
        <Link
          to="#"
          className="avatar avatar-md bg-white border rounded-circle"
          data-bs-toggle="modal"
          data-bs-target="#view_message"
          onClick={() => setCurrentMessage(text)}
        >
          <i className="ti ti-file-invoice text-gray-9" />
        </Link>
      ),
      sorter: (a: any, b: any) => a.MESSAGE.localeCompare(b.MESSAGE),
    },
    {
      title: "",
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
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_contact"
                onClick={() => setDeleteId(record.id)}
              >
                <i className="ti ti-trash me-1" />
                Delete
              </Link>
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
            <h4 className="mb-1">Contact Messages</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact Messages
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
                <i className="ti ti-filter me-1" /> Sort By : {sortLabel}
              </Link>
              <ul className="dropdown-menu  dropdown-menu-end p-2">
                <li>
                  <Link to="#" className="dropdown-item rounded-1" onClick={() => handleSort("latest", "Latest")}>
                    Latest
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1" onClick={() => handleSort("asc", "Ascending")}>
                    Ascending
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1" onClick={() => handleSort("desc", "Descending")}>
                    Descending
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1" onClick={() => handleSort("month", "Last Month")}>
                    Last Month
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1" onClick={() => handleSort("week", "Last 7 Days")}>
                    Last 7 Days
                  </Link>
                </li>
              </ul>
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
                  value={searchValue} // Controlled input
                  onChange={handleSearchChange} // Update search value
                />
              </div>
            </div>
            {/* <div className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle coloumn btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-layout-board me-1" /> Columns
              </Link>
              <div className="dropdown-menu dropdown-menu-lg p-2">
                <ul>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span className="d-inline-flex align-items-center">
                        <i className="ti ti-grip-vertical me-1" />
                        FROM
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        PHONE
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        EMAIL
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        CREATED DATE
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        MESSAGE
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        {/* /Table Header */}
        {/* Custom Data Table */}
        {loading ? (
          <div className="d-flex justify-content-center align-items-center p-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <CommonDatatable
            dataSource={data}
            columns={columns}
            searchValue={searchValue}
            showRowSelection={false}
          />
        )}
        {/* Custom Data Table */}
      </div>

      {/* Delete  */}
      <div className="modal fade" id="delete_contact">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Message</h4>
              <p className="mb-3">Are you sure you want to delete message?</p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleDelete}
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete */}

      {/* View Message */}
      <div className="modal fade" id="view_message">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Message Details</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-0">
                <label className="form-label fw-semibold">Message Content:</label>
                <p className="text-gray-9 border p-3 rounded bg-light-500">
                  {currentMessage || "No message content."}
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /View Message */}
    </>
  );
};

export default ContactMessagesList;
