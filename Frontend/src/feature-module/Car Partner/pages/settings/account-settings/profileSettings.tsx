import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  carPartnerAccountAPI,
  type ApiErrorBody,
} from "../../../service/api/carPartnerAccount.api";

const formatProfileError = (err: unknown): string => {
  if (typeof err === "string") return err;
  const body = err as ApiErrorBody;
  if (body?.errors?.length) {
    const first = body.errors[0];
    if (typeof first === "string") return first;
    return first.message;
  }
  return body?.message || "Something went wrong";
};

/** Display stored login phone (10-digit Indian) read-only */
const formatPhoneDisplay = (phoneNum: string | undefined): string => {
  if (!phoneNum) return "—";
  const d = phoneNum.replace(/\D/g, "");
  const ten =
    d.length === 12 && d.startsWith("91") ? d.slice(2) : d.length === 10 ? d : d;
  if (ten.length === 10) return `+91 ${ten.slice(0, 5)} ${ten.slice(5)}`;
  return phoneNum;
};

const ProfileSettings = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneDisplay, setPhoneDisplay] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const loadProfile = useCallback(async () => {
    setLoading(true);
    setFieldErrors({});
    try {
      const { data } = await carPartnerAccountAPI.getProfile();
      setFirstName(data.firstName || "");
      setLastName(data.lastName || "");
      setEmail(data.email || "");
      setAddressLine(data.addressLine || "");
      setPhoneDisplay(formatPhoneDisplay(data.phoneNum));
    } catch (err) {
      toast.error(formatProfileError(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadProfile();
  }, [loadProfile]);

  const validateClient = (): boolean => {
    const next: Record<string, string> = {};
    if (!firstName.trim()) next.firstName = "First name is required";
    if (!lastName.trim()) next.lastName = "Last name is required";
    if (!email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please enter a valid email address";
    }
    if (addressLine.length > 500) {
      next.addressLine = "Address must be at most 500 characters";
    }
    setFieldErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateClient()) return;

    setSaving(true);
    setFieldErrors({});
    try {
      await carPartnerAccountAPI.updateProfile({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        addressLine: addressLine.trim(),
      });
      toast.success("Profile updated successfully");
      await loadProfile();
    } catch (err) {
      const body = err as ApiErrorBody;
      if (body?.errors?.length && typeof body.errors[0] === "object") {
        const map: Record<string, string> = {};
        for (const item of body.errors as { field?: string; message: string }[]) {
          if (item.field) map[item.field] = item.message;
        }
        setFieldErrors(map);
      }
      toast.error(formatProfileError(err));
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    void loadProfile();
  };

  return (
    <div className="card profile-setting-section">
      <div className="card-header">
        <h5 className="fw-bold">Account Settings</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card-body pb-1">
          <h6 className="fw-bold mb-3">Basic Information</h6>
          {loading ? (
            <p className="text-muted">Loading profile…</p>
          ) : (
            <div className="border-bottom mb-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      First Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control${fieldErrors.firstName ? " is-invalid" : ""}`}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {fieldErrors.firstName && (
                      <div className="invalid-feedback d-block">{fieldErrors.firstName}</div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Last Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control${fieldErrors.lastName ? " is-invalid" : ""}`}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {fieldErrors.lastName && (
                      <div className="invalid-feedback d-block">{fieldErrors.lastName}</div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Email Address<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control${fieldErrors.email ? " is-invalid" : ""}`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                    />
                    {fieldErrors.email && (
                      <div className="invalid-feedback d-block">{fieldErrors.email}</div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control bg-light"
                      value={phoneDisplay}
                      readOnly
                      aria-readonly="true"
                    />
                    <p className="fs-12 text-muted mb-0 mt-1">
                      Phone is tied to your login and cannot be changed here.
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Address Line</label>
                    <input
                      type="text"
                      className={`form-control${fieldErrors.addressLine ? " is-invalid" : ""}`}
                      value={addressLine}
                      onChange={(e) => setAddressLine(e.target.value)}
                    />
                    {fieldErrors.addressLine && (
                      <div className="invalid-feedback d-block">{fieldErrors.addressLine}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-light me-3"
              onClick={handleCancel}
              disabled={loading || saving}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={loading || saving}>
              {saving ? "Saving…" : "Save Changes"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
