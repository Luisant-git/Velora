import { Fragment, useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import { getParties } from "../../../api/party";
import { toast } from "react-toastify";
import DataTable from "../../../components/celltable/CellTable";
import { Autocomplete, Grid, TextField } from "@mui/material";
import ModalPrint from "./Print";
import { useNavigate, useParams } from "react-router-dom";
import { getQuotation, updateQuotation } from "../../../api/quotation";

const UpdateQuotation: React.FC = () => {
  const [rows, setRows] = useState<any>([
    {
      id: 1,
      count: "",
      clothdes: "",
      Dia_Id: null,
      combo: "",
      GSM: null,
      LL: "",
      GG: null,
      Rate: null,
      SampleRate: null,
      CRate: null,
      CSampleRate: null,
      Uom_Id: null,
      Remarks: "",
      Color_id: null,
    },
  ]);
  const [parties, setPartiesData] = useState([]);
  const [isOpenPrint, setIsOpenPrint] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [formValues, setFormValues] = useState({
    Vchnum: "",
    ExpdelDate: "",
    Trntype: "",
    Remarks: "",
    Isclosed: 0,
    createduser: "",
    ModifiedUser: "",
    DeletedUser: "",
    DeletedDate: "",
    Delete_Flg: 0,
    SortOrder: 0,
    Isapproved: 0,
    YearId: "",
    PaymentTerms: "",
    Party_Id: 0,
    CreditDays: 0,
    PaymentTerms_Id: "",
    Instruction_Id: "",
    notes: "",
    narration: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const getQuotationData = () => {
    getQuotation(id)
      .then((response: { status: number; data: any }) => {
        if (response && response.status === 200) {
          if (response.data) {
            setFormValues(response.data); // Set the form values
            // Safely update rows state
            const clothDetails = response.data.ClothDetails || []; // Default to an empty array if undefined
            const formattedRows = clothDetails.map(
              (
                detail: {
                  Color_id: number;
                  DetailId: any;
                  count: any;
                  clothdes: any;
                  Dia_Id: any;
                  combo: any;
                  GSM: any;
                  LL: any;
                  GG: any;
                  Rate: any;
                  SampleRate: any;
                  CRate: any;
                  CSampleRate: any;
                  Uom_Id: any;
                  Remarks: any;
                },
                index: number
              ) => ({
                id: index + 1 || 1,
                DetailId: detail?.DetailId,
                count: detail.count || "",
                clothdes: detail.clothdes || "",
                Dia_Id: detail.Dia_Id || 0,
                combo: detail.combo || "",
                GSM: detail.GSM || 0,
                LL: detail.LL || "",
                GG: detail.GG || 0,
                Rate: detail.Rate || 0,
                SampleRate: detail.SampleRate || 0,
                CRate: detail.CRate || 0,
                CSampleRate: detail.CSampleRate || 0,
                Uom_Id: detail.Uom_Id || 0,
                Color_id: detail.Color_id || 0,
                Remarks: detail.Remarks || "",
              })
            );

            setRows(formattedRows); // Update rows with the formatted data
          }
        }
      })
      .catch((error: any) => {
        console.error("Error fetching parties data:", error);
      });
  };

  useEffect(() => {
    getQuotationData();
  }, []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = (formValues: any, rows: any) => {
    const errors: string[] = [];

    // Validate formValues
    if (!formValues.Vchnum) errors.push("Quotation Number is required");
    if (!formValues.ExpdelDate)
      if (!formValues.Party_Id)
        // errors.push("Expected Delivery Date is required");
        // if (!formValues.Trntype) errors.push("Transaction Type is required");
        errors.push("Party is required");
    if (!formValues.PaymentTerms) errors.push("Payment Terms are required");
    if (!formValues.narration) errors.push("Narration is required");
    if (!formValues.notes) errors.push("Notes are required");
    if (!formValues.Instruction_Id) errors.push("Instructions are required");

    // Validate rows
    rows.forEach((row: any, index: number) => {
      // if (!row.Dia_Id) errors.push(`Row ${index + 1}: Dia_Id is required`);
      if (!row.ClothDesc_Id)
        if (!row.Uom_Id)
          // errors.push(`Row ${index + 1}: Cloth Description is required`);
          errors.push(`Row ${index + 1}: UOM is required`);
      if (!row.count) errors.push(`Row ${index + 1}: Count is required`);
      if (!row.GSM) errors.push(`Row ${index + 1}: GSM is required`);
      if (!row.LL) errors.push(`Row ${index + 1}: LL is required`);
      if (!row.GG) errors.push(`Row ${index + 1}: GG is required`);
      if (!row.Rate) errors.push(`Row ${index + 1}: Rate is required`);
      if (!row.SampleRate)
        errors.push(`Row ${index + 1}: Sample Rate is required`);
      if (!row.CRate) errors.push(`Row ${index + 1}: CRate is required`);
      if (!row.CSampleRate)
        errors.push(`Row ${index + 1}: CSample Rate is required`);
    });

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form
    const errors = validateForm(formValues, rows);

    if (errors.length > 0) {
      errors.forEach((error) => {
        toast.error(error, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
      return; // Stop further execution if there are errors
    }

    // Proceed with the API call if no errors
    const payload = {
      ...formValues,
      Vchnum: formValues.Vchnum,
      PrgDate: new Date().toISOString(),
      VchTime: new Date().toISOString(),
      ExpdelDate: formValues.ExpdelDate,
      Party_Id: Number(formValues.Party_Id) || null,
      Trntype: formValues.Trntype,
      Remarks: formValues.Remarks,
      Isclosed: formValues.Isclosed,
      createduser: formValues.createduser,
      ModifiedUser: formValues.ModifiedUser,
      DeletedUser: formValues.DeletedUser,
      DeletedDate: formValues.DeletedDate,
      Delete_Flg: formValues.Delete_Flg,
      SortOrder: formValues.SortOrder,
      Isapproved: formValues.Isapproved,
      YearId: formValues.YearId,
      PaymentTerms: formValues.PaymentTerms,
      CreditDays: formValues.CreditDays,
      Instruction_Id: formValues.Instruction_Id,
      PaymentTerms_Id: formValues.PaymentTerms_Id,
      narration: formValues.narration,
      notes: formValues.notes,
      clothdetails: rows.map((row: any) => ({
        Dia_Id: parseInt(row.Dia_Id, 10) || 0,
        ClothDesc_Id: parseInt(row.ClothDesc_Id, 10) || 0,
        Uom_Id: parseInt(row.Uom_Id, 10) || 0,
        combo: row.combo || "",
        clothdes: row.clothdes || "",
        count: row.count || 0,
        GSM: parseInt(row.GSM, 10) || 0,
        LL: row.LL || "",
        GG: parseInt(row.GG, 10) || 0,
        Delete_Flg: parseInt(row.Delete_Flg, 10) || 0,
        Remarks: row.Remarks || "",
        Trntype: row.Trntype || "",
        Color_id: parseInt(row.Color_id, 10) || 0,
        Rate: parseInt(row.Rate, 10) || 0,
        CRate: parseInt(row.CRate, 10) || 0,
        SampleRate: parseInt(row.SampleRate, 10) || 0,
        CSampleRate: parseInt(row.CSampleRate, 10) || 0,
      })),
    };

    try {
      const response = await updateQuotation(id, payload);
      console.log(response, "sumites,", payload);

      if (response) {
        setResponse(response.data);
        navigate("/quotation");
        toast.success("Quotation added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setFormValues({
          Vchnum: "",
          ExpdelDate: "",
          Trntype: "",
          Remarks: "",
          Isclosed: 0,
          createduser: "",
          ModifiedUser: "",
          DeletedUser: "",
          DeletedDate: "",
          Delete_Flg: 0,
          SortOrder: 0,
          Isapproved: 0,
          YearId: "",
          PaymentTerms: "",
          Party_Id: 0,
          CreditDays: 0,
          PaymentTerms_Id: "",
          Instruction_Id: "",
          notes: "",
          narration: "",
        });
      } else {
        toast.error("Failed to add quotation", {
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
      toast.error("An error occurred. Please try again later.", {
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
  };

  const getpartiesData = () => {
    getParties()
      .then((response) => {
        if (response && response.status === 200) {
          setPartiesData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching parties data:", error);
      });
  };

  useEffect(() => {
    getpartiesData();
  }, []);

  const onClosePrint = () => setIsOpenPrint(false);

  

  return (
    <>
      <Fragment>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2} className="bg-white p-2 mt-2">
            <Grid item xs={12} md={4}>
              <TextField
                size="small"
                label="Quotation Number"
                variant="outlined"
                name="Vchnum"
                fullWidth
                value={formValues.Vchnum}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Autocomplete
                size="small"
                options={parties}
                getOptionLabel={(option: any) => option.Ptyname}
                onChange={(_event, value) => {
                  setFormValues({
                    ...formValues,
                    Party_Id: value ? value.ptycode : "",
                  });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Party"
                    variant="outlined"
                  />
                )}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                variant="outlined"
                fullWidth
                name="ModifiedUser"
                size="small"
                type="date"
                value={formValues.ModifiedUser}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <DataTable rows={rows} setRows={setRows} />
          <Grid container spacing={2} className="bg-white p-2 mt-2">
            <Grid item xs={12} md={3}>
              <TextField
                size="small"
                label="Enter Payment Terms"
                variant="outlined"
                name="PaymentTerms"
                fullWidth
                value={formValues.PaymentTerms}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                size="small"
                label="Enter Narration"
                variant="outlined"
                name="narration"
                fullWidth
                value={formValues.narration}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                size="small"
                label="Enter Notes"
                name="notes"
                variant="outlined"
                fullWidth
                value={formValues.notes}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                size="small"
                name="Instruction_Id"
                label="Enter Instructions"
                variant="outlined"
                fullWidth
                value={formValues.Instruction_Id}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Col md={12} className="mt-3 text-center">
            <SpkButton
              Navigate="/quotation"
              Buttontype="button"
              Buttonvariant="danger"
            >
              Cancel
            </SpkButton>
            <SpkButton Buttonvariant="primary" Buttontype="submit">
              Save
            </SpkButton>
            {/* <SpkButton
              Buttontype="button"
              Buttonvariant="secondary"
              onClick={handleOpenPrint}
            >
              Save & Print
            </SpkButton> */}
          </Col>
        </Form>
      </Fragment>

      <ModalPrint
        isOpen={isOpenPrint}
        onClose={onClosePrint}
        responseData={response}
      />
    </>
  );
};

export default UpdateQuotation;
