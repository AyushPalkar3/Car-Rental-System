import React, { useState, useEffect } from "react";
import { all_routes } from "../../../../router/all_routes";
import { Link } from "react-router-dom";
import CommonDatatable from "../../common/dataTable";
import CustomSelect from "../../common/select/commonSelect";
import { Applicable, couponsType } from "../../common/json/selectOption";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { getCoupons, addCoupon, updateCoupon, deleteCoupon } from "../../service/api/coupon";
import { toast } from "react-toastify";

/** DB stores "1" = percentage, "2" = fixed; legacy rows may use words. */
const normalizeCouponTypeForForm = (t: unknown) => {
  const s = String(t ?? "").toLowerCase();
  if (s === "1" || s === "percentage") return "1";
  if (s === "2" || s === "fixed") return "2";
  return "1";
};

const couponTypeLabel = (t: unknown) => {
  const s = String(t ?? "").toLowerCase();
  if (s === "1" || s === "percentage") return "Percentage";
  if (s === "2" || s === "fixed") return "Fixed";
  return String(t ?? "");
};

const isPercentageCouponType = (t: unknown) => {
  const s = String(t ?? "").toLowerCase();
  return s === "1" || s === "percentage";
};

const CouponsList = () => {
  const [coupons, setCoupons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [editingCoupon, setEditingCoupon] = useState<any>(null);
  const [deletingCouponId, setDeletingCouponId] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    type: "1",
    value: "",
    startDate: null as any,
    endDate: null as any,
    applicableTo: "All",
    limit: "0",
    description: ""
  });

  const fetchCoupons = async () => {
    try {
      setLoading(true);
      const data = await getCoupons();
      setCoupons(data);
    } catch (error: any) {
      toast.error("Failed to fetch coupons: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value.value || value }));
  };

  const handleDateChange = (name: string, date: any) => {
    setFormData(prev => ({ ...prev, [name]: date }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      code: "",
      type: "1",
      value: "",
      startDate: null,
      endDate: null,
      applicableTo: "All",
      limit: "0",
      description: ""
    });
    setEditingCoupon(null);
  };

  const validateForm = () => {
    const { name, code, type, value, startDate, endDate, applicableTo, limit, description } = formData;
    if (!name) return "Coupon Name is required";
    if (!code) return "Coupon Code is required";
    if (!type) return "Type is required";
    if (!value) return "Discount Value is required";
    if (!startDate) return "Start Date is required";
    if (!endDate) return "End Date is required";
    if (!applicableTo) return "Applicable To is required";
    if (limit === "" || limit === null) return "Limit is required (use 0 for unlimited)";
    if (!description) return "Description is required";
    
    if (new Date(startDate) > new Date(endDate)) {
      return "Start Date cannot be after End Date";
    }
    
    return null;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    try {
      if (editingCoupon) {
        await updateCoupon(editingCoupon.id, formData);
        toast.success("Coupon updated successfully");
      } else {
        await addCoupon(formData);
        toast.success("Coupon added successfully");
      }
      resetForm();
      fetchCoupons();
      // Use Bootstrap's modal instance to hide it if validation passes
      const modalElement = document.getElementById("coupon_form_modal");
      if (modalElement) {
        const bootstrap = (window as any).bootstrap;
        if (bootstrap) {
          const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
          modal.hide();
        }
      }
    } catch (error: any) {
      toast.error(error.error || error.message || "Something went wrong");
    }
  };

  const handleEdit = (coupon: any) => {
    setEditingCoupon(coupon);
    setFormData({
      name: coupon.name,
      code: coupon.code,
      type: normalizeCouponTypeForForm(coupon.type),
      value: coupon.value.toString(),
      startDate: dayjs(coupon.startDate),
      endDate: dayjs(coupon.endDate),
      applicableTo: coupon.applicableTo || "All",
      limit: coupon.limit?.toString() || "0",
      description: coupon.description || ""
    });
  };

  const handleDelete = async () => {
    if (!deletingCouponId) return;
    try {
      await deleteCoupon(deletingCouponId);
      toast.success("Coupon deleted successfully");
      fetchCoupons();
      setDeletingCouponId(null);
    } catch (error: any) {
      toast.error("Error: " + error.message);
    }
  };

  const columns = [
    {
      title: "COUPON NAME",
      dataIndex: "name",
      render: (text: string) => (
        <p className="text-gray-9 fw-semibold">{text}</p>
      ),
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },
    {
      title: "CODE",
      dataIndex: "code",
      render: (text: string) => (
        <span className="badge badge-soft-violet border">{text}</span>
      ),
      sorter: (a: any, b: any) => a.code.localeCompare(b.code),
    },
    {
      title: "DESCRIPTION",
      dataIndex: "description",
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "DISCOUNT TYPE",
      dataIndex: "type",
      render: (_: string, record: any) => (
        <p className="text-capitalize">{couponTypeLabel(record.type)}</p>
      ),
    },
    {
      title: "DISCOUNT",
      dataIndex: "value",
      render: (val: number, record: any) => (
        <p>{val}{isPercentageCouponType(record.type) ? "%" : ""}</p>
      ),
    },
    {
      title: "LIMIT",
      dataIndex: "limit",
      render: (text: any) => <p>{text || 'Unlimited'}</p>,
    },
    {
        title: "USED COUNT",
        dataIndex: "usedCount",
        render: (text: any) => <p>{text}</p>,
        sorter: (a: any, b: any) => a.usedCount - b.usedCount,
    },
    {
      title: "VALID",
      dataIndex: "endDate",
      render: (text: string) => <p>{dayjs(text).format("DD MMM YYYY")}</p>,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (text: string) => (
        <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
          <i
            className={`ti ti-point-filled me-1 ${text === "Active" ? "text-success" : "text-danger"}`}
          />
          {text}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      width: 72,
      render: (_: unknown, record: any) => (
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
                data-bs-target="#coupon_form_modal"
                onClick={() => handleEdit(record)}
              >
                <i className="ti ti-edit me-1" />
                Edit
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item rounded-1"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_coupons"
                onClick={() => setDeletingCouponId(record.id)}
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
            <h2 className="mb-1">Coupons</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Coupons
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2 me-2">
              <Link
                to="#"
                className="btn btn-primary d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#coupon_form_modal"
                onClick={resetForm}
              >
                <i className="ti ti-plus me-2" />
                Add Coupon
              </Link>
            </div>
          </div>
        </div>

        <div className="tab-content">
          <div className="tab-pane show active" id="all-coupons" role="tabpanel">
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
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
            <CommonDatatable
              dataSource={coupons}
              columns={columns}
              searchValue={searchValue}
              showRowSelection={false}
            />
          </div>
        </div>
      </div>

      {/* Add/Edit Coupon Modal */}
      <div className="modal fade" id="coupon_form_modal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">{editingCoupon ? "Edit Coupon" : "Add Coupon"}</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Coupon Name <span className="text-danger">*</span></label>
                    <input type="text" name="name" className="form-control" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Coupon Code <span className="text-danger">*</span></label>
                    <input type="text" name="code" className="form-control" value={formData.code} onChange={handleInputChange} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Type <span className="text-danger">*</span></label>
                    <CustomSelect
                      options={couponsType}
                      className="select d-flex"
                      value={couponsType.find(c => c.value === formData.type)}
                      onChange={(val: any) => handleSelectChange("type", val)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Discount Value <span className="text-danger">*</span></label>
                    <input type="number" name="value" className="form-control" value={formData.value} onChange={handleInputChange} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Start Date <span className="text-danger">*</span></label>
                    <DatePicker
                      className="form-control w-100"
                      value={formData.startDate}
                      onChange={(date) => handleDateChange("startDate", date)}
                      format="DD/MM/YYYY"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">End Date <span className="text-danger">*</span></label>
                    <DatePicker
                      className="form-control w-100"
                      value={formData.endDate}
                      onChange={(date) => handleDateChange("endDate", date)}
                      format="DD/MM/YYYY"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Applicable To</label>
                    <CustomSelect
                      options={Applicable}
                      className="select d-flex"
                      value={Applicable.find(a => a.value === formData.applicableTo)}
                      onChange={(val: any) => handleSelectChange("applicableTo", val)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Limit</label>
                    <input type="number" name="limit" className="form-control" value={formData.limit} onChange={handleInputChange} />
                    <small className="text-muted">Enter 0 for unlimited</small>
                  </div>
                  <div className="col-12 mb-3">
                    <label className="form-label">Description</label>
                    <textarea name="description" className="form-control" rows={3} value={formData.description} onChange={handleInputChange} />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary">
                  {editingCoupon ? "Save Changes" : "Create New"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <div className="modal fade" id="delete_coupons">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Coupon</h4>
              <p className="mb-3">Are you sure you want to delete this coupon?</p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</button>
                <button className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponsList;
