import axiosClient from "./apiClient";

type UpdateMePayload = Record<string, any>;

function buildUserProfileFormData(data: UpdateMePayload): FormData {
  const fd = new FormData();
  const {
    dlFile,
    aadhaarFile,
    addressProofFile,
    firstName,
    lastName,
    email,
    dlNumber,
    dlPdf,
    aadhaarPdf,
    addressProofPdf,
    address,
  } = data;

  if (firstName != null) fd.append("firstName", String(firstName));
  if (lastName != null) fd.append("lastName", String(lastName));
  if (email != null) fd.append("email", String(email));
  if (Object.prototype.hasOwnProperty.call(data, "dlNumber")) {
    fd.append("dlNumber", dlNumber != null ? String(dlNumber) : "");
  }
  if (address && typeof address === "object") {
    fd.append("addressLine", address.addressLine ?? "");
    fd.append("country", address.country ?? "");
    fd.append("state", address.state ?? "");
    fd.append("city", address.city ?? "");
    fd.append("pincode", address.pincode ?? "");
  }
  if (dlFile instanceof File) fd.append("dlPdf", dlFile);
  else if (dlPdf && String(dlPdf).trim()) fd.append("dlPdf", String(dlPdf).trim());
  if (aadhaarFile instanceof File) fd.append("aadhaarPdf", aadhaarFile);
  else if (aadhaarPdf && String(aadhaarPdf).trim())
    fd.append("aadhaarPdf", String(aadhaarPdf).trim());
  if (addressProofFile instanceof File) fd.append("addressProofPdf", addressProofFile);
  else if (addressProofPdf && String(addressProofPdf).trim())
    fd.append("addressProofPdf", String(addressProofPdf).trim());
  return fd;
}

export const userAPI = {
  getMe: () => axiosClient.get("/users"),
  updateMe: (data: UpdateMePayload) => {
    const usesMultipart =
      data.dlFile instanceof File ||
      data.aadhaarFile instanceof File ||
      data.addressProofFile instanceof File;

    if (!usesMultipart) {
      const { dlFile: _d, aadhaarFile: _a, addressProofFile: _ap, ...jsonBody } = data;
      return axiosClient.patch("/users", jsonBody);
    }

    return axiosClient.patch("/users", buildUserProfileFormData(data));
  },
};
