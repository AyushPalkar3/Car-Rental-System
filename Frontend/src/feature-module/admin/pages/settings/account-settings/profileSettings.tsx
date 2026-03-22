import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { getAdmin, updateAdmin } from '../../../service/api/admin';
import { toast } from 'react-toastify';


const ProfileSettings = () => {
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchAdminData();
    }, []);

    const fetchAdminData = async () => {
        try {
            const response = await getAdmin();
            if (response.success) {
                setName(response.admin.name || "");
                setPhoneNum(response.admin.phoneNum || "");
            }
        } catch (error: any) {
            toast.error("Error fetching profile data");
        }
    };

    const handleSave = async () => {
        if (!name) {
            toast.error("Name is required");
            return;
        }

        setLoading(true);
        try {
            const response = await updateAdmin({ name });
            if (response.success) {
                toast.success(response.message || "Profile updated successfully");
                // Optional: trigger a global state update if name is used in header
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Error updating profile");
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="card profile-setting-section">
  <div className="card-header">
    <h5 className="fw-bold">Account Settings</h5>
  </div>
  <form >
    <div className="card-body pb-1">
      <h6 className="fw-bold mb-3">Basic Information</h6>
      <div className="border-bottom mb-3">
        <div className="row">
          <div className="col-md-12">
            {/* <div className="mb-3">
              <label className="form-label">Profile Photo</label>
              <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                <div className="d-flex align-items-center justify-content-center avatar avatar-xxl me-3 flex-shrink-0 text-dark frames">
                  <ImageWithBasePath
                    src="assets/admin/img/customer/customer-01.jpg"
                    className="img-fluid"
                    alt="brands"
                  />
                  <Link
                    to="#"
                    className="upload-img-trash btn btn-sm rounded-circle"
                  >
                    <i className="ti ti-trash fs-12" />
                  </Link>
                </div>
                <div className="profile-upload">
                  <div className="profile-uploader d-flex align-items-center">
                    <div className="drag-upload-btn btn btn-md btn-dark">
                      <i className="ti ti-photo-up fs-14" />
                      Change
                      <input
                        type="file"
                        className="form-control image-sign"
                        multiple
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="fs-14">Recommended size is 500px x 500px</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Full Name<span className="text-danger ms-1">*</span>
              </label>
              <input 
                type="text" 
                className="form-control" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Phone Number<span className="text-danger ms-1">*</span>
              </label>
              <input 
                type="text" 
                className="form-control" 
                value={phoneNum}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card-footer">
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-light me-3"
          onClick={() => {
            fetchAdminData();
          }}
        >
          Cancel
        </button>
        <button 
            type="button" 
            className="btn btn-primary"
            onClick={handleSave}
            disabled={loading}
        >
            {loading ? (
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            ) : null}
          Save Changes
        </button>
      </div>
    </div>
  </form>
</div>

  )
}


export default ProfileSettings