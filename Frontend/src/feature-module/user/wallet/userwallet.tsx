/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */	
import { useEffect  } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
// import AddPayment from "../../../core/data/modals/addpayment";
// import AddCard from "../../../core/data/modals/addcard";
import Aos from "aos";
import DeleteUserWallet from "../../../core/data/modals/deleteuserwallet";
import { useSelector } from "react-redux";
import { Table } from "antd";
import DashboardMenu from "../common/dashboard-menu";
import { all_routes } from "../../../router/all_routes";

const UserWallet = () => {
  const routes = all_routes
  const data = useSelector((state: any) => state.rootReducer.userwallet_data);
  const columns = [
    {
      title: "Ref Id",
      dataIndex: "refid",
    },
    {
      title: "Transaction For",
      dataIndex: "transactionfor",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Total",
      dataIndex: "total",
      render: (text:any) => {
        const isPositive = text.startsWith("+");

        return (
          <span className={isPositive ? "text-success-light" : "text-danger"}>
            {text}
          </span>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text:any) => (
        <div>
          {text === "Completed" && (
            <span className="badge badge-light-success">{text}</span>
          )}
          {text === "Pending" && (
            <span className="badge badge-light-warning">{text}</span>
          )}
          {text === "Failed" && (
            <span className="badge badge-light-danger">{text}</span>
          )}
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className="text-end">
          <div className="dropdown dropdown-action">
            <Link
              to="#"
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                data-feather="fas fa-ellipsis-vertical"
                className="fas fa-ellipsis-vertical"
              ></i>
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to="#">
                <i className="feather icon-edit-3"></i> Edit
              </Link>
              <Link
                className="dropdown-item"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_modal"
              >
                <i className="feather icon-trash-2"></i> Delete
              </Link>
            </div>
          </div>
        </div>
      ),
    },

    // <td class="text-end">
    //   <div class="dropdown dropdown-action">
    //     <Link
    //       to="#"
    //       class="dropdown-toggle"
    //       data-bs-toggle="dropdown"
    //       aria-expanded="false"
    //     >
    //       <i class="fas fa-ellipsis-vertical"></i>
    //     </Link>
    //     <div class="dropdown-menu dropdown-menu-end">
    //       <Link class="dropdown-item" to="#">
    //         <i class="feather icon-edit-3"></i> Edit
    //       </Link>
    //       <Link
    //         class="dropdown-item"
    //         to="#"
    //         data-bs-toggle="modal"
    //         data-bs-target="#delete_modal"
    //       >
    //         <i class="feather icon-trash-2"></i> Delete
    //       </Link>
    //     </div>
    //   </div>
    // </td>,
  ];

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <div>
      {/* Breadscrumb Section */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">User Wallet </h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.homeOne}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    User Wallet
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadscrumb Section */}
      {/* Dashboard Menu */}
     <DashboardMenu />
      {/* /Dashboard Menu */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          {/* Content Header */}
          <div className="content-header">
            <h4>Wallet</h4>
          </div>
          {/* /Content Header */}
          {/* Wallet Info */}
          <div className="row">
            <div className="col-lg-5 col-md-12 d-flex">
              <div className="card wallet-card flex-fill">
                <div className="card-body">
                  <div className="balance-info">
                    <div className="balance-grid">
                      <div className="balance-content">
                        <h6>Available Balance</h6>
                        <h4>$4544</h4>
                      </div>
                      <div className="refersh-icon">
                        <Link to="#">
                          <i className="fas fa-arrows-rotate" />
                        </Link>
                      </div>
                    </div>
                    <div className="balance-list">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex">
                          <div className="balance-inner credit-info">
                            <h6>$1,23,464</h6>
                            <p>Total Credit</p>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                          <div className="balance-inner debit-info">
                            <h6>$7,357</h6>
                            <p>Total Debit</p>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                          <div className="balance-inner transaction-info">
                            <h6>$6,56,415</h6>
                            <p>Total Transaction</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group wallet-form-group">
                    <label>Add Wallet Credits ($)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder='1000'
                    />
                  </div>
                  <div className="wallet-btn">
                    <Link
                      to="#"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#add_payment"
                    >
                      Add Payment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 d-flex">
              <div className="card your-card flex-fill">
                <div className="card-body">
                  <div className="wallet-header">
                    <h4>Your Cards</h4>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#add_card"
                    >
                      <i className="feather icon-plus-circle" />
                    </Link>
                  </div>
                  <div className="wallet-table">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <label className="custom_radio">
                                <input
                                  type="radio"
                                  name="payment"
                                  defaultValue="wallet"
                                  defaultChecked={true}
                                />
                                <span className="checkmark" />
                                <ImageWithBasePath
                                  src="assets/img/icons/wallet-01.svg"
                                  alt="Icon"
                                />
                              </label>
                            </td>
                            <td>
                              <h6>3210 **** **** **12</h6>
                              <p>Card Number</p>
                            </td>
                            <td>
                              <h6>$3000</h6>
                              <p>Balance</p>
                            </td>
                            <td>
                              <h6>Active</h6>
                              <p>Status</p>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <Link
                                  to="#"
                                  className="dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-vertical" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link className="dropdown-item" to="#">
                                    <i className="feather icon-edit-3" /> Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="feather icon-trash-2" /> Delete
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label className="custom_radio">
                                <input
                                  type="radio"
                                  name="payment"
                                  defaultValue="wallet"
                                />
                                <span className="checkmark" />
                                <ImageWithBasePath
                                  src="assets/img/icons/wallet-02.svg"
                                  alt="Icon"
                                />
                              </label>
                            </td>
                            <td>
                              <h6>7847 **** **** **78</h6>
                              <p>Card Number</p>
                            </td>
                            <td>
                              <h6>$2300</h6>
                              <p>Balance</p>
                            </td>
                            <td>
                              <h6>Active</h6>
                              <p>Status</p>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <Link
                                  to="#"
                                  className="dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-vertical" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link className="dropdown-item" to="#">
                                    <i className="feather icon-edit-3" /> Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="feather icon-trash-2" /> Delete
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label className="custom_radio">
                                <input
                                  type="radio"
                                  name="payment"
                                  defaultValue="wallet"
                                />
                                <span className="checkmark" />
                                <ImageWithBasePath
                                  src="assets/img/icons/wallet-03.svg"
                                  alt="Icon"
                                />
                              </label>
                            </td>
                            <td>
                              <h6>4710 **** **** **64</h6>
                              <p>Card Number</p>
                            </td>
                            <td>
                              <h6>$1800</h6>
                              <p>Balance</p>
                            </td>
                            <td>
                              <h6>Active</h6>
                              <p>Status</p>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <Link
                                  to="#"
                                  className="dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-vertical" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link className="dropdown-item" to="#">
                                    <i className="feather icon-edit-3" /> Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="feather icon-trash-2" /> Delete
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Wallet Info */}
          {/* Wallet Table */}
          <div className="row">
            <div className="col-lg-12 d-flex">
              <div className="card book-card flex-fill mb-0">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <h4>Wallet Usage History</h4>
                    </div>
                    <div className="col-md-7 text-md-end">
                      {/* <div className="search-input">
                        <input
                          type="text"
                          placeholder="Search"
                          className="form-control form-control-sm formsearch"
                        />
                        <Link to="#" className="btn btn-searchset">
                          <i data-feather="search" className="feather icon-search" />
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive dashboard-table">
                   
                    <Table
                      //className="table datanew dataTable no-footer"
                      columns={columns}
                      dataSource={data}

                    />
                  </div>
                  <div className="table-footer">
                    <div className="row">
                      <div className="col-md-6">
                        <div id="tablelength" />
                      </div>
                      <div className="col-md-6 text-md-end">
                        <div id="tablepage" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Wallet Table */}
        </div>
      </div>
      {/* /Page Content */}
      {/* <LinkddPayment />
      <LinkddCard /> */}
      <DeleteUserWallet />
    </div>
  );
};

export default UserWallet;
