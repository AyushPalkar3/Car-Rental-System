
import { Link } from "react-router-dom";

const DeleteModal = () => {
  return (
    <>
      {/* Delete Modal */}
      <div
        className="modal new-modal fade"
        id="delete_account"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="delete-action">
                <div className="delete-header">
                  <h4>Delete Account</h4>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn">
                  <div className="row">
                    <div className="col-6">
                     <Link
                        to="#"
                        data-bs-dismiss="modal"
                        className="btn btn-secondary w-100"
                      >
                        Delete
                      </Link>
                    </div>
                    <div className="col-6">
                     <Link
                        to="#"
                        data-bs-dismiss="modal"
                        className="btn btn-primary w-100"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Modal */}
    </>
  );
};

export default DeleteModal;
