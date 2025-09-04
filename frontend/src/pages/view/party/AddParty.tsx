import { Fragment } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import { postParty } from "../../../api/party";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
});

const AddParty: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Ptyname: "",
      Add1: "",
      Add2: "",
      Add3: "",
      District: "",
      State: "",
      Phone1: "",
      Mobile: "",
      Fax: "",
      E_mail: "",
      Panno: "",
      Delete_flg: 0,
      IsRunning: 1,
      TallyAccName: "",
      MarketPerson: "",
      MarketContact: "",
      IsExport: 0,
      IsCashParty: 0,
      State_id: 0,
      GSTNO: "",
      IsRegular: 0,
      BankName: "",
      AccountNo: "",
      IFSC: "",
      PartyCode: "",
      AccountName: "",
      Branch: "",
      CreditDays: 0,
      Pincode: "",
      Distance: 0,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const payload = {
          ...values,
          Pincode: values.Pincode.toString(),
        };

        const response = await postParty(payload);
        if (response) {
          toast.success("Party added successfully", {
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
          toast.error("Failed to add party", {
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
      <Form onSubmit={formik.handleSubmit}>
        <Row className="bg-white p-2 mt-2">
          <Col xl={12}>
            <Row>
              {fieldConfigs.map((field, index) => (
                <Col md={4} className="mb-3" key={index}>
                  <Form.Label>{field.label}</Form.Label>
                  {field.required && <span style={{ color: "red" }}> *</span>}
                  <Form.Control
                    type={field.type}
                    placeholder={field.placeholder}
                    aria-label={field.ariaLabel}
                    name={field.name}
                    value={
                      formik.values[field.name as keyof typeof formik.values]
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={
                      formik.touched[
                        field.name as keyof typeof formik.touched
                      ] &&
                      Boolean(
                        formik.errors[field.name as keyof typeof formik.errors]
                      )
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors[field.name as keyof typeof formik.errors]}
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
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </SpkButton>
        </Col>
      </Form>
    </Fragment>
  );
};

export default AddParty;