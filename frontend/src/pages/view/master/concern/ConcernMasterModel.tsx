import React, { useState, useEffect } from "react";

interface ConcernMasterModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: any;
}

const ConcernMasterModel: React.FC<ConcernMasterModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState({
    Concern_Name: "",
    LegalName: "",
    Address: "",
    MobileNo: "",
    PhoneNo: "",
    EmailId: "",
    GSTNo: "",
    PanNo: "",
    State: "",
    StateCode: 0,
    BankName: "",
    AccountNo: "",
    Branch: "",
    IFSCCode: "",
    Delete_flg: 0,
    IsRunning: 1,
  });

  const [errors, setErrors] = useState({
    Concern_Name: "",
    MobileNo: "",
    PhoneNo: "",
    EmailId: "",
    PanNo: "",
    IFSCCode: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const validate = () => {
    let valid = true;
    let newErrors: any = {};

    // Validate Concern Name
    if (!formData.Concern_Name.trim()) {
      newErrors.Concern_Name = "Concern Name is required";
      valid = false;
    } else if (formData.Concern_Name.trim().length < 3) {
      newErrors.Concern_Name = "Concern Name must be at least 3 characters long";
      valid = false;
    }

    // Validate Mobile No
    if (!formData.MobileNo.trim()) {
      newErrors.MobileNo = "Mobile No is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.MobileNo)) {
      newErrors.MobileNo = "Invalid Mobile No (must be 10 digits)";
      valid = false;
    }

    // Validate Phone No
    if (formData.PhoneNo.trim() && !/^\d{10}$/.test(formData.PhoneNo)) {
      newErrors.PhoneNo = "Invalid Phone No (must be 10 digits)";
      valid = false;
    }

    // Validate Email ID
    if (!formData.EmailId.trim()) {
      newErrors.EmailId = "Email ID is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.EmailId)) {
      newErrors.EmailId = "Invalid Email format";
      valid = false;
    }

    // Validate PAN No
    if (formData.PanNo.trim() && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.PanNo)) {
      newErrors.PanNo = "Invalid PAN No (e.g., ABCDE1234F)";
      valid = false;
    }

    // Validate IFSC Code
    if (formData.IFSCCode.trim() && !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(formData.IFSCCode)) {
      newErrors.IFSCCode = "Invalid IFSC Code (e.g., ABCD0123456)";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for the field
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(formData);
      onClose();
    }
  };

  return (
    <div className={`modal fade ${open ? "show d-block" : ""}`} tabIndex={-1} style={{ background: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{initialData ? "Update Concern Master" : "Create Concern Master"}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {/* Concern Name Field */}
            <div className="mb-3">
              <label htmlFor="Concern_Name" className="form-label">
                Concern Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.Concern_Name ? "is-invalid" : ""}`}
                id="Concern_Name"
                name="Concern_Name"
                value={formData.Concern_Name}
                onChange={handleChange}
              />
              {errors.Concern_Name && (
                <div className="invalid-feedback">{errors.Concern_Name}</div>
              )}
            </div>

            {/* Legal Name Field */}
            <div className="mb-3">
              <label htmlFor="LegalName" className="form-label">
                Legal Name
              </label>
              <input
                type="text"
                className="form-control"
                id="LegalName"
                name="LegalName"
                value={formData.LegalName}
                onChange={handleChange}
              />
            </div>

            {/* Address Field */}
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <textarea
                className="form-control"
                id="Address"
                name="Address"
                value={formData.Address}
                onChange={handleChange}
              />
            </div>

            {/* Mobile No Field */}
            <div className="mb-3">
              <label htmlFor="MobileNo" className="form-label">
                Mobile No <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.MobileNo ? "is-invalid" : ""}`}
                id="MobileNo"
                name="MobileNo"
                value={formData.MobileNo}
                onChange={handleChange}
                maxLength={10}
              />
              {errors.MobileNo && (
                <div className="invalid-feedback">{errors.MobileNo}</div>
              )}
            </div>

            {/* Phone No Field */}
            <div className="mb-3">
              <label htmlFor="PhoneNo" className="form-label">
                Phone No
              </label>
              <input
                type="text"
                className={`form-control ${errors.PhoneNo ? "is-invalid" : ""}`}
                id="PhoneNo"
                name="PhoneNo"
                value={formData.PhoneNo}
                onChange={handleChange}
                maxLength={10}
              />
              {errors.PhoneNo && (
                <div className="invalid-feedback">{errors.PhoneNo}</div>
              )}
            </div>

            {/* Email ID Field */}
            <div className="mb-3">
              <label htmlFor="EmailId" className="form-label">
                Email ID <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.EmailId ? "is-invalid" : ""}`}
                id="EmailId"
                name="EmailId"
                value={formData.EmailId}
                onChange={handleChange}
              />
              {errors.EmailId && (
                <div className="invalid-feedback">{errors.EmailId}</div>
              )}
            </div>

            {/* GST No Field */}
            <div className="mb-3">
              <label htmlFor="GSTNo" className="form-label">
                GST No
              </label>
              <input
                type="text"
                className="form-control"
                id="GSTNo"
                name="GSTNo"
                value={formData.GSTNo}
                onChange={handleChange}
              />
            </div>

            {/* PAN No Field */}
            <div className="mb-3">
              <label htmlFor="PanNo" className="form-label">
                PAN No
              </label>
              <input
                type="text"
                className={`form-control ${errors.PanNo ? "is-invalid" : ""}`}
                id="PanNo"
                name="PanNo"
                value={formData.PanNo}
                onChange={handleChange}
              />
              {errors.PanNo && (
                <div className="invalid-feedback">{errors.PanNo}</div>
              )}
            </div>

            {/* State Field */}
            <div className="mb-3">
              <label htmlFor="State" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="State"
                name="State"
                value={formData.State}
                onChange={handleChange}
              />
            </div>

            {/* State Code Field */}
            <div className="mb-3">
              <label htmlFor="StateCode" className="form-label">
                State Code
              </label>
              <input
                type="number"
                className="form-control"
                id="StateCode"
                name="StateCode"
                value={formData.StateCode}
                onChange={handleChange}
              />
            </div>

            {/* Bank Name Field */}
            <div className="mb-3">
              <label htmlFor="BankName" className="form-label">
                Bank Name
              </label>
              <input
                type="text"
                className="form-control"
                id="BankName"
                name="BankName"
                value={formData.BankName}
                onChange={handleChange}
              />
            </div>

            {/* Account No Field */}
            <div className="mb-3">
              <label htmlFor="AccountNo" className="form-label">
                Account No
              </label>
              <input
                type="text"
                className="form-control"
                id="AccountNo"
                name="AccountNo"
                value={formData.AccountNo}
                onChange={handleChange}
              />
            </div>

            {/* Branch Field */}
            <div className="mb-3">
              <label htmlFor="Branch" className="form-label">
                Branch
              </label>
              <input
                type="text"
                className="form-control"
                id="Branch"
                name="Branch"
                value={formData.Branch}
                onChange={handleChange}
              />
            </div>

            {/* IFSC Code Field */}
            <div className="mb-3">
              <label htmlFor="IFSCCode" className="form-label">
                IFSC Code
              </label>
              <input
                type="text"
                className={`form-control ${errors.IFSCCode ? "is-invalid" : ""}`}
                id="IFSCCode"
                name="IFSCCode"
                value={formData.IFSCCode}
                onChange={handleChange}
              />
              {errors.IFSCCode && (
                <div className="invalid-feedback">{errors.IFSCCode}</div>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              {initialData ? "Update" : "Create"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcernMasterModel;