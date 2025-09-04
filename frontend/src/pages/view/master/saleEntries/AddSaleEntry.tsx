import React, { useState, useEffect, useRef } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  CircularProgress,
  Autocomplete,
} from "@mui/material";
import { postSaleEntry } from "../../../../api/saleentry";
import EditCell from "./EditCell";
import { toast } from "react-toastify";
import {
  getBillNo,
  getTodayDate,
  printSaleEntry,
} from "../../../../utils/common";
import { getCustomers } from "../../../../api/customer";

// Initial state for the sale entry form
const initialSaleEntry = {
  BillDate: getTodayDate(),
  Remarks: "",
  TotalAmount: 0,
  TotalPaidAmount: 0,
  CardAmount: 0,
  UPIAmount: 0,
  customerId: 0,
  BillNo: getBillNo(),
};

const AddSaleEntry = () => {
  const [saleEntry, setSaleEntry] = useState(initialSaleEntry);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false); // State to control the modal
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [rows, setRows] = useState<any>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [customer, setCustomer] = useState<any>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null); // State to track selected customer in Autocomplete

  // Focus the first input field on component mount
  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  const getCustomerDate = () => {
    getCustomers().then((response) => {
      if (response) {
        setCustomer(response?.data);
      }
    });
  };

  useEffect(() => {
    getCustomerDate();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSaleEntry((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (print: boolean = false) => {
    setLoading(true);
    try {
      const response = await postSaleEntry({
        ...saleEntry,
        TotalPaidAmount: parseFloat(saleEntry.TotalPaidAmount.toString()) || 0,
        CardAmount: parseFloat(saleEntry.CardAmount.toString()) || 0,
        UPIAmount: parseFloat(saleEntry.UPIAmount.toString()) || 0,
        TotalAmount: parseFloat(totalAmount.toString()) || 0,
        TotalQty: parseFloat(totalQty.toString()),
        CreatedDate: new Date().toISOString(),
        saleItems: rows.map((row: any) => ({
          Item_Id: row.itemid,
          HSNCode: row.hsnCode,
          DiscPercent: parseFloat(row.gstPercent.toString()),
          Qty: parseFloat(row.qty.toString()),
          MRP: parseFloat(row.mrp.toString()),
          Rate: parseFloat(row.saleRate.toString()),
          DiscType: row.discType,
          DiscAmount: parseFloat(row.discAmount.toString()),
          GSTAmount: parseFloat(row.gstAmount.toString()),
          NetAmount: parseFloat(row.netAmount.toString()),
          Amount: parseFloat(row.netAmount.toString()),
        })),
      });

      if (response.success) {
        setSaleEntry(initialSaleEntry);
        setRows([]);
        setTotalAmount(0);
        setTotalQty(0);
        setSelectedCustomer(null); // Clear the selected customer in Autocomplete
        toast.success("Sale Entry Added Successfully", { autoClose: 1000 });
        if (print) {
          printSaleEntry(response?.data);
        }
      } else {
        toast.error("Error creating sale entry", { autoClose: 1000 });
      }
    } catch (error) {
      console.error("Error creating sale entry:", error);
      toast.error("Error creating sale entry", { autoClose: 3000 });
    } finally {
      setLoading(false);
      setOpenModal(false);
    }
  };

  const [isReady, setIsReady] = React.useState(false);

  // Simulate a delay to set the component as ready
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 100);
  }, []);

  return (
    <Paper style={{ padding: 10 }}>
      <Grid container spacing={1}>
        {/* Bill Date Field */}

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
            name="billDate"
            type="date"
            size="small"
            value={saleEntry.BillDate}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            inputRef={firstInputRef}
          />
        </Grid>

        {/* Mobile Field */}
        <Grid item xs={12} sm={6}>
          <Autocomplete
            disablePortal
            size="small"
            options={customer}
            value={selectedCustomer} // Controlled value
            onChange={(_event, newValue) => {
              setSelectedCustomer(newValue); // Update the selected customer
              if (newValue) {
                setSaleEntry((prev) => ({
                  ...prev,
                  customerId: newValue?.customercode,
                }));
              } else {
                setSaleEntry((prev) => ({
                  ...prev,
                  customerId: 0,
                }));
              }
            }}
            getOptionLabel={(option: {
              customercode: number;
              Mobile: string;
              customername: string;
            }) => option.customername}
            fullWidth
            renderInput={(params) => <TextField {...params} label="Customer" />}
          />
        </Grid>
      </Grid>
      {/* EditCell Component for Rows */}
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
      {/* Submit Button */}
      <div style={{ marginTop: 16 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenModal(true)}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Submit"}
        </Button>
      </div>

      {/* Confirmation Modal */}
      <div
        className={`modal fade ${openModal ? "show d-block" : ""}`}
        tabIndex={-1}
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sale Finalize</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setOpenModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="color" className="form-label">
                  Total Payable
                </label>
                <input
                  type="text"
                  disabled
                  className="form-control"
                  id="Dia"
                  name="Dia"
                  value={totalAmount || 0}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="color" className="form-label">
                  Total Qty
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="totalQty"
                  name="totalQty"
                  value={totalQty || ""}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="color" className="form-label">
                  Total Paid in Cash
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="totalPaidCash"
                  name="TotalPaidAmount"
                  value={saleEntry.TotalPaidAmount || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="color" className="form-label">
                  Total Paid in Card
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="cardAmount"
                  name="CardAmount"
                  value={saleEntry.CardAmount || 0}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="color" className="form-label">
                  Total Paid in Upi (Google Pay, PhonePe, etc.)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="upiAmount"
                  name="UPIAmount"
                  value={saleEntry.UPIAmount || 0}
                  onChange={handleInputChange}
                />
              </div>
              <input
                disabled
                name="barcode"
                placeholder="Scan/Search product by barcode"
                className="form-control border-2 border-primary text-white italic fs-5 fw-2 mb-3"
                style={{ height: "50px", backgroundColor: "green" }}
                value={`Balance Amount : ₹ ${
                  totalAmount -
                  (saleEntry.TotalPaidAmount || 0) -
                  (saleEntry.CardAmount || 0) -
                  parseFloat(saleEntry.UPIAmount.toString() || "0")
                }`}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleSubmit()}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleSubmit(true)}
              >
                Save & Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default AddSaleEntry;
