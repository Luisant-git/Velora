import { Fragment, useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import { getParty, updateParty } from "../../../api/party";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

interface FieldConfig {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  ariaLabel: string;
  required?: boolean;
}

const fieldConfigs: FieldConfig[] = [
  {
    name: "Ptyname",
    label: "Party Name",
    type: "text",
    placeholder: "Party Name",
    ariaLabel: "Party Name",
    required: true,
  },
  {
    name: "Add1",
    label: "Address Line 1",
    type: "text",
    placeholder: "Address Line 1",
    ariaLabel: "Address Line 1",
  },
  {
    name: "Add2",
    label: "Address Line 2",
    type: "text",
    placeholder: "Address Line 2",
    ariaLabel: "Address Line 2",
  },
  {
    name: "Add3",
    label: "Address Line 3",
    type: "text",
    placeholder: "Address Line 3",
    ariaLabel: "Address Line 3",
  },
  {
    name: "District",
    label: "District",
    type: "text",
    placeholder: "District",
    ariaLabel: "District",
  },
  {
    name: "State",
    label: "State",
    type: "text",
    placeholder: "State",
    ariaLabel: "State",
  },
  {
    name: "Phone1",
    label: "Phone",
    type: "text",
    placeholder: "Phone",
    ariaLabel: "Phone",
  },
  {
    name: "Mobile",
    label: "Mobile",
    type: "text",
    placeholder: "Mobile",
    ariaLabel: "Mobile",
  },
  {
    name: "E_mail",
    label: "Email",
    type: "email",
    placeholder: "Email",
    ariaLabel: "Email",
  },
  {
    name: "Panno",
    label: "PAN",
    type: "text",
    placeholder: "PAN",
    ariaLabel: "PAN",
  },
  {
    name: "TallyAccName",
    label: "Tally Account Name",
    type: "text",
    placeholder: "Tally Account Name",
    ariaLabel: "Tally Account Name",
  },
  {
    name: "MarketPerson",
    label: "Market Person",
    type: "text",
    placeholder: "Market Person",
    ariaLabel: "Market Person",
  },
  {
    name: "MarketContact",
    label: "Market Contact",
    type: "text",
    placeholder: "Market Contact",
    ariaLabel: "Market Contact",
  },
  {
    name: "GSTNO",
    label: "GST",
    type: "text",
    placeholder: "GST",
    ariaLabel: "GST",
  },
  {
    name: "BankName",
    label: "Bank Name",
    type: "text",
    placeholder: "Bank Name",
    ariaLabel: "Bank Name",
  },
  {
    name: "AccountNo",
    label: "Account Number",
    type: "text",
    placeholder: "Account Number",
    ariaLabel: "Account Number",
  },
  {
    name: "IFSC",
    label: "IFSC Code",
    type: "text",
    placeholder: "IFSC Code",
    ariaLabel: "IFSC Code",
  },
  {
    name: "AccountName",
    label: "Account Name",
    type: "text",
    placeholder: "Account Name",
    ariaLabel: "Account Name",
  },
  {
    name: "Branch",
    label: "Bank Branch",
    type: "text",
    placeholder: "Bank Branch",
    ariaLabel: "Bank Branch",
  },
  {
    name: "CreditDays",
    label: "Credit Days",
    type: "number",
    placeholder: "Credit Days",
    ariaLabel: "Credit Days",
  },
  {
    name: "Pincode",
    label: "Pincode",
    type: "number",
    placeholder: "Pincode",
    ariaLabel: "Pincode",
  },
  {
    name: "IsRunning",
    label: "Active",
    type: "checkbox",
    placeholder: "Is Running",
    ariaLabel: "Is Running",
  },
];

const validationSchema = Yup.object().shape({
  Ptyname: Yup.string().required("Party Name is required"),
  Add1: Yup.string().nullable(),
  Add2: Yup.string().nullable(),
  Add3: Yup.string().nullable(),
  District: Yup.string().nullable(),
  State: Yup.string().nullable(),
  Phone1: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .nullable(),
  Mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .nullable(),
  E_mail: Yup.string().email("Invalid email address").nullable(),
  Panno: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN number")
    .nullable(),
  TallyAccName: Yup.string().nullable(),
  MarketPerson: Yup.string().nullable(),
  MarketContact: Yup.string().nullable(),
  GSTNO: Yup.string()
    .matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "Invalid GST number")
    .nullable(),
  BankName: Yup.string().nullable(),
  AccountNo: Yup.string().nullable(),
  IFSC: Yup.string()
    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code")
    .nullable(),
  AccountName: Yup.string().nullable(),
  Branch: Yup.string().nullable(),
  CreditDays: Yup.number().nullable(),
  Pincode: Yup.string()
    .matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
    .nullable(),
  IsRunning: Yup.boolean().nullable(),
});

const UpdateParty: React.FC = () => {
  const [dataParty, setParty] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const getpartyData = () => {
    setLoading(true);
    getParty(id)
      .then((response) => {
        if (response && response.status === 200) {
          setParty(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching parties data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getpartyData();
  }, [id]);

  const formik = useFormik({
    initialValues: {
      Ptyname: dataParty?.Ptyname || "",
      Add1: dataParty?.Add1 || "",
      Add2: dataParty?.Add2 || "",
      Add3: dataParty?.Add3 || "",
      District: dataParty?.District || "",
      State: dataParty?.State || "",
      Phone1: dataParty?.Phone1 || "",
      Mobile: dataParty?.Mobile || "",
      Fax: dataParty?.Fax || "",
      E_mail: dataParty?.E_mail || "",
      Panno: dataParty?.Panno || "",
      Delete_flg: dataParty?.Delete_flg || 0,
      IsRunning: dataParty?.IsRunning === 1,
      TallyAccName: dataParty?.TallyAccName || "",
      MarketPerson: dataParty?.MarketPerson || "",
      MarketContact: dataParty?.MarketContact || "",
      IsExport: dataParty?.IsExport || 0,
      IsCashParty: dataParty?.IsCashParty || 0,
      State_id: dataParty?.State_id || 0,
      GSTNO: dataParty?.GSTNO || "",
      IsRegular: dataParty?.IsRegular || 0,
      BankName: dataParty?.BankName || "",
      AccountNo: dataParty?.AccountNo || "",
      IFSC: dataParty?.IFSC || "",
      PartyCode: dataParty?.PartyCode || "",
      AccountName: dataParty?.AccountName || "",
      Branch: dataParty?.Branch || "",
      CreditDays: dataParty?.CreditDays || 0,
      Pincode: dataParty?.Pincode || "",
      Distance: dataParty?.Distance || 0,
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const updatedValues = {
          ...values,
          Pincode: values.Pincode.toString(),
          IsRunning: values.IsRunning ? 1 : 0,
        };

        const response = await updateParty(id, updatedValues);
        if (response) {
          toast.success("Party updated successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          resetForm();
          navigate("/party");
        } else {
          toast.error("Failed to update party", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        // toast.error("An error occurred. Please try again later.", {
        //   position: "top-right",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
      }
    },
  });

  return (
    <Fragment>
      {loading ? (
        <div className="d-flex justify-content-center mt-3">
          <CircularProgress />
        </div>
      ) : (
        <Form onSubmit={formik.handleSubmit}>
          <Row className="bg-white p-2 mt-2">
            <Col xl={12}>
              <Row>
                {fieldConfigs.map((field, index) => (
                  <Col md={4} className="mb-3" key={index}>
                    <Form.Label>{field.label}</Form.Label>
                    {field.required && <span style={{ color: "red" }}> *</span>}
                    {field.type === "checkbox" ? (
                      <Form.Check
                        type="checkbox"
                        id={field.name}
                        name={field.name}
                        checked={formik.values[field.name as keyof typeof formik.values]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched[field.name as keyof typeof formik.touched] &&
                          Boolean(formik.errors[field.name as keyof typeof formik.errors])
                        }
                      />
                    ) : (
                      <Form.Control
                        type={field.type}
                        placeholder={field.placeholder}
                        aria-label={field.ariaLabel}
                        name={field.name}
                        value={formik.values[field.name as keyof typeof formik.values]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched[field.name as keyof typeof formik.touched] &&
                          Boolean(formik.errors[field.name as keyof typeof formik.errors])
                        }
                      />
                    )}
                    <Form.Control.Feedback type="invalid">
                      {formik.errors[field.name as keyof typeof formik.errors] as string}
                    </Form.Control.Feedback>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <Col md={12} className="mt-3">
            <SpkButton
              Buttontype="submit"
              Buttonvariant="primary"
              Disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Updating..." : "Update"}
            </SpkButton>
          </Col>
        </Form>
      )}
    </Fragment>
  );
};

export default UpdateParty;