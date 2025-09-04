import React, { useState, useEffect } from "react";

interface ItemModelProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: any;
  loading?: boolean;
}

const initialFormData = {
  shortNameCategory: "",
  shortNameItemName: "",
  shortNameColor: "",
  shortNameSize: "",
  active: true,
  itemCode: "",
  category: "",
  itemName: "",
  color: "",
  size: "",
  hsnCode: "",
  gstPercent: "",
};

const ItemModel: React.FC<ItemModelProps> = ({
  open,
  onClose,
  onSubmit,
  initialData,
  loading = false,
}) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        shortNameCategory: initialData.Cate_AliasName || "",
        shortNameItemName: initialData.Item_AliasName || "",
        shortNameColor: initialData.Color_AliasName || "",
        shortNameSize: initialData.Size_AliasName || "",
        active: initialData.active || false,
      });
    } else {
      setFormData(initialFormData);
    }
  }, [initialData, open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    const newFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    if (name.startsWith("shortName")) {
      const combinedShortNames = [
        newFormData.shortNameCategory,
        newFormData.shortNameItemName,
        newFormData.shortNameColor,
        newFormData.shortNameSize,
      ].join("");

      newFormData.itemCode = combinedShortNames;
    }

    setFormData(newFormData);
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.category) newErrors.category = "Category is required";
    if (formData.category && !formData.shortNameCategory)
      newErrors.shortNameCategory = "Category Short Name is required";
    if (!formData.itemName) newErrors.itemName = "Item Name is required";
    else if (formData.itemName.length > 50)
      newErrors.itemName = "Item Name must be 50 characters or less";
    if (formData.itemName && !formData.shortNameItemName)
      newErrors.shortNameItemName = "Item Name Short Name is required";
    if (formData.color && !formData.shortNameColor)
      newErrors.shortNameColor = "Color Short Name is required";
    if (formData.size && !formData.shortNameSize)
      newErrors.shortNameSize = "Size Short Name is required";
    if (!formData.hsnCode) newErrors.hsnCode = "HSN Code is required";
    else if (formData.hsnCode.length > 8)
      newErrors.hsnCode = "HSN Code must be between 1 and 8 characters";
    if (!formData.gstPercent) newErrors.gstPercent = "GST Percent is required";
    else if (isNaN(parseFloat(formData.gstPercent)))
      newErrors.gstPercent = "GST Percent must be a number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const {
      shortNameCategory,
      shortNameItemName,
      shortNameColor,
      shortNameSize,
      ...payload
    } = formData;

    onSubmit({
      ...payload,
      Cate_AliasName: shortNameCategory,
      Item_AliasName: shortNameItemName,
      Color_AliasName: shortNameColor,
      Size_AliasName: shortNameSize,
      gstPercent: parseFloat(payload.gstPercent),
      IsRunning: 0,
      Delete_flg: 0,
      createdBy: 0,
    });
  };

  return (
    <div
      className={`modal fade ${open ? "show d-block" : ""}`}
      tabIndex={-1}
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {initialData ? "Update Item" : "Create Item"}
            </h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
              disabled={loading}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="itemCode" className="form-label">
                  Item Code <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="itemCode"
                  name="itemCode"
                  value={formData.itemCode || ""}
                  disabled
                />
              </div>

              <div className="row">
                <div className="mb-3 col-9">
                  <label htmlFor="category" className="form-label">
                    Category <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.category ? "is-invalid" : ""}`}
                    id="category"
                    name="category"
                    value={formData.category || ""}
                    onChange={handleChange}
                    maxLength={10}
                  />
                  {errors.category && (
                    <div className="invalid-feedback">{errors.category}</div>
                  )}
                </div>
                <div className="mb-3 col-3">
                  <label htmlFor="shortNameCategory" className="form-label">
                    Short Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.shortNameCategory ? "is-invalid" : ""}`}
                    id="shortNameCategory"
                    maxLength={10}
                    name="shortNameCategory"
                    value={formData.shortNameCategory || ""}
                    onChange={handleChange}
                  />
                  {errors.shortNameCategory && (
                    <div className="invalid-feedback">{errors.shortNameCategory}</div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="mb-3 col-9">
                  <label htmlFor="itemName" className="form-label">
                    Item Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.itemName ? "is-invalid" : ""}`}
                    id="itemName"
                    name="itemName"
                    value={formData.itemName || ""}
                    onChange={handleChange}
                    maxLength={50}
                  />
                  {errors.itemName && (
                    <div className="invalid-feedback">{errors.itemName}</div>
                  )}
                </div>
                <div className="mb-3 col-3">
                  <label htmlFor="shortNameItemName" className="form-label">
                    Short Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.shortNameItemName ? "is-invalid" : ""}`}
                    id="shortNameItemName"
                    maxLength={10}
                    name="shortNameItemName"
                    value={formData.shortNameItemName || ""}
                    onChange={handleChange}
                  />
                  {errors.shortNameItemName && (
                    <div className="invalid-feedback">{errors.shortNameItemName}</div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="mb-3 col-9">
                  <label htmlFor="color" className="form-label">
                    Color
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="color"
                    name="color"
                    value={formData.color || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-3">
                  <label htmlFor="shortNameColor" className="form-label">
                    Short Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.shortNameColor ? "is-invalid" : ""}`}
                    id="shortNameColor"
                    maxLength={10}
                    name="shortNameColor"
                    value={formData.shortNameColor || ""}
                    onChange={handleChange}
                  />
                  {errors.shortNameColor && (
                    <div className="invalid-feedback">{errors.shortNameColor}</div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="mb-3 col-9">
                  <label htmlFor="size" className="form-label">
                    Size
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="size"
                    name="size"
                    value={formData.size || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-3">
                  <label htmlFor="shortNameSize" className="form-label">
                    Short Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.shortNameSize ? "is-invalid" : ""}`}
                    id="shortNameSize"
                    maxLength={10}
                    name="shortNameSize"
                    value={formData.shortNameSize || ""}
                    onChange={handleChange}
                  />
                  {errors.shortNameSize && (
                    <div className="invalid-feedback">{errors.shortNameSize}</div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="mb-3 col-12">
                  <label htmlFor="hsnCode" className="form-label">
                    HSN Code <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.hsnCode ? "is-invalid" : ""}`}
                    id="hsnCode"
                    name="hsnCode"
                    value={formData.hsnCode || ""}
                    onChange={handleChange}
                    maxLength={8}
                  />
                  {errors.hsnCode && (
                    <div className="invalid-feedback">{errors.hsnCode}</div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="mb-3 col-12">
                  <label htmlFor="gstPercent" className="form-label">
                    GST Percent <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    className={`form-control ${errors.gstPercent ? "is-invalid" : ""}`}
                    id="gstPercent"
                    name="gstPercent"
                    value={formData.gstPercent || ""}
                    onChange={handleChange}
                  />
                  {errors.gstPercent && (
                    <div className="invalid-feedback">{errors.gstPercent}</div>
                  )}
                </div>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="active"
                  name="active"
                  checked={formData.active}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="active">
                  Active
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
                disabled={loading}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                    {initialData ? "Updating..." : "Creating..."}
                  </>
                ) : (
                  initialData ? "Update" : "Create"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemModel;