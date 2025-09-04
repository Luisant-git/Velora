import React, { useState, useEffect, useRef } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  CircularProgress,
  Autocomplete,
  LinearProgress,
  Box,
} from "@mui/material";
import * as Yup from "yup";
import EditCell from "./EditCell";
import { toast } from "react-toastify";
import {
  getBillNo,
  getTodayDate,
  printSaleEntry,
} from "../../../../utils/common";
import {
  getPurchaseEntry,
  postPurchaseEntry,
  updatePurchaseEntry,
} from "../../../../api/purchaseEntry";
import { getParties } from "../../../../api/party";
import { useNavigate, useParams } from "react-router-dom";

const initialSaleEntry = {
  BillDate: getTodayDate(),
  BillNo: getBillNo(),
  RefDate: getTodayDate(),
  Party_Id: 0,
  Remarks: "",
  TotalQty: 0,
  TotalAmount: 0,
  GSTAmount: 0,
  OtherType: "",
  OtherAmount: 0,
  NetAmount: 0,
  RefNo: Math.floor(Math.random() * 1000000).toString(),
};

const validationSchema = Yup.object().shape({
  Party_Id: Yup.number()
    .min(1, "Supplier is required")
    .required("Supplier is required"),
});

const AddPurchaseEntry = ({ isnew = false }) => {
  const [saleEntry, setSaleEntry] = useState(initialSaleEntry);
  const [loading, setLoading] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [rows, setRows] = useState<any>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [parties, setParties] = useState<any>([]);
  const [errors, setErrors] = useState<{ Party_Id?: string }>({});
  const [selectedParty, setSelectedParty] = useState<any>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getpartiesData();
  }, []);

  useEffect(() => {
    if (!isnew && id && parties.length > 0) {
      getPurchseData();
    }
  }, [isnew, id, parties]);

  const getPurchseData = () => {
    setLoading(true);
    getPurchaseEntry(id)
      .then((response) => {
        if (response) {
          setSaleEntry(response?.data?.data);
          const mappedRows =
            response?.data?.data?.PurchaseItems.map(
              (item: {
                id: any;
                ItemMaster: any;
                Item_Id: any;
                bar_qr_code_No: any;
                HSNCode: any;
                GSTPercent: any;
                Qty: any;
                MRP: any;
                Rate: any;
                DiscType: any;
                DiscPercent: any;
                DiscAmount: any;
                Amount: any;
                GSTAmount: any;
                NetAmount: any;
              }) => ({
                id: item.id,
                itemid: item.Item_Id,
                itemCode: item.ItemMaster?.itemCode,
                itemName: item.ItemMaster?.itemName,
                category: item.ItemMaster?.category,
                color: item.ItemMaster?.color,
                size: item.ItemMaster?.size,
                hsnCode: item?.HSNCode,
                gstPercent: item?.GSTPercent,
                qty: item?.Qty,
                mrp: item?.MRP,
                saleRate: item?.Rate,
                discType: item?.DiscType,
                diskPersentage: item?.DiscPercent,
                discAmount: item?.DiscAmount,
                taxableAmount: item?.Amount,
                gstAmount: item?.GSTAmount,
                netAmount: item?.NetAmount,
                bar_qr_code_No: item?.bar_qr_code_No,
              })
            ) || [];

          setRows(mappedRows);
          const selectedParty = parties.find(
            (party: any) => party.ptycode === response?.data.data.Party_Id
          );
          setSelectedParty(selectedParty);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching purchase data:", error);
        toast.error("Error fetching purchase data", { autoClose: 3000 });
        setLoading(false);
      });
  };

  const getpartiesData = () => {
    getParties().then((response) => {
      if (response) {
        setParties(response?.data);
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSaleEntry((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (print: boolean = false) => {
    try {
      await validationSchema.validate(saleEntry, { abortEarly: false });
      setErrors({});
    } catch (validationErrors) {
      const formattedErrors: { Party_Id?: string } = {};
      (validationErrors as Yup.ValidationError).inner.forEach((error: any) => {
        formattedErrors[error.path as keyof typeof formattedErrors] =
          error.message;
      });
      setErrors(formattedErrors);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        ...saleEntry,
        id: undefined,
        TotalAmount: parseFloat(totalAmount.toString()) || 0,
        CreatedDate: new Date().toISOString(),
        TotalQty: parseFloat(totalQty.toString()),
        PurchaseItems: rows.map((row: any) => ({
          ...(isnew ? {} : { id: row.id }),
          HSNCode: row.hsnCode,
          GSTPercent: parseFloat(row.gstPercent.toString()),
          Qty: parseFloat(row.qty.toString()),
          MRP: parseFloat(row.mrp.toString()),
          Rate: parseFloat(row.saleRate.toString()),
          DiscType: row.discType,
          DiscPercent: parseFloat(row.diskPersentage.toString()),
          DiscAmount: parseFloat(row.discAmount.toString()),
          GSTAmount: parseFloat(row.gstAmount.toString()),
          Amount: parseFloat(row.netAmount.toString()),
          NetAmount: parseFloat(row.netAmount.toString()),
          bar_qr_code_No: `${row.itemCode}${row.saleRate}`,
          Item_Id: row.itemid,
        })),
      };

      const response = isnew
        ? await postPurchaseEntry(payload)
        : await updatePurchaseEntry(id, payload);

      if (response.success) {
        setSaleEntry(initialSaleEntry);
        setRows([]);
        setTotalAmount(0);
        setTotalQty(0);
        setSelectedParty(null);
        toast.success("Purchase Entry Added Successfully", { autoClose: 1000 });
        if (print) {
          printSaleEntry(response?.data);
        }
        navigate("/purchase-entries");
      } else {
        toast.error("Error creating Purchase entry", { autoClose: 1000 });
      }
    } catch (error) {
      console.error("Error creating Purchase entry:", error);
      toast.error("Error creating Purchase entry", { autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 100);
  }, []);

  return (
    <Paper style={{ padding: 10 }} sx={{ position: "relative" }}>
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: '50%',
            left: '50%',
            transform: "translate(-50%, -50%)",
          }}
        >
           <CircularProgress color="primary" />
        </Box>
      )}

      <Grid container spacing={1}>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Entry Date"
            name="RefDate"
            type="date"
            size="small"
            value={saleEntry.RefDate}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            inputRef={firstInputRef}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Autocomplete
            disablePortal
            size="small"
            options={parties}
            value={selectedParty}
            onChange={(_e, newValue) => {
              setSelectedParty(newValue);
              setSaleEntry((prev) => ({
                ...prev,
                Party_Id: newValue ? newValue.ptycode : 0,
              }));
            }}
            getOptionLabel={(option) => `${option.Ptyname} - ${option.Mobile}`}
            fullWidth
            renderInput={(params) => (
              <TextField
                {...params}
                label="Supplier"
                error={!!errors.Party_Id}
                helperText={errors.Party_Id}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            label="Bill No"
            name="BillNo"
            type="text"
            size="small"
            value={saleEntry.BillNo}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            inputRef={firstInputRef}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Bill Date"
            name="BillDate"
            type="date"
            size="small"
            value={saleEntry.BillDate}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            inputRef={firstInputRef}
          />
        </Grid>
      </Grid>
      <div style={{ width: "100%", marginTop: 16 }}>
        <EditCell
          rows={rows}
          setRows={setRows}
          isReady={isReady}
          handleInputChange={handleInputChange}
          saleEntry={saleEntry}
          setTotalAmount={setTotalAmount}
          setTotalQty={setTotalQty}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSubmit()}
          disabled={loading}
        >
          Save
        </Button>
        {/* <Button
          variant="contained"
          color="success"
          style={{ marginLeft: 8 }}
          disabled={loading}
          onClick={() => handleSubmit(true)}
        >
          Print & Save
        </Button> */}
      </div>
    </Paper>
  );
};

export default AddPurchaseEntry;
