import React, { useState, useEffect } from "react";

interface FinancialYearModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: any;
}

const FinancialYearModel: React.FC<FinancialYearModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState({
    YearId: "",
    Date_From: "",
    Date_To: "",
    IsRunning: 0,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        YearId: "",
        Date_From: "",
        Date_To: "",
        IsRunning: 0,
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <div
      className={`modal fade ${open ? "show d-block" : ""}`}
      tabIndex={-1}
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {initialData ? "Update Financial Year" : "Create Financial Year"}
            </h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="YearId" className="form-label">
                Year ID
              </label>
              <input
                type="text"
                className="form-control"
                id="YearId"
                name="YearId"
                value={formData.YearId || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Date_From" className="form-label">
                Date From
              </label>
              <input
                type="date"
                className="form-control"
                id="Date_From"
                name="Date_From"
                value={formData.Date_From || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Date_To" className="form-label">
                Date To
              </label>
              <input
                type="date"
                className="form-control"
                id="Date_To"
                name="Date_To"
                value={formData.Date_To || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="IsRunning" className="form-label">
                Is Running
              </label>
              <select
                className="form-control"
                id="IsRunning"
                name="IsRunning"
                value={formData.IsRunning || 0}
                onChange={handleChange}
              >
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              {initialData ? "Update" : "Create"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialYearModel;