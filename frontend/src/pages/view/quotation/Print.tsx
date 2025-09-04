import React, { useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import logo from '../../../assets/images/logo.png';
import "../../../assets/css/print.css";
interface ModalPrintProps {
  isOpen: boolean;
  onClose: () => void;
  responseData: {
    data?: {
      Vchnum?: string;
      PrgDate?: string;
      ExpdelDate?: string;
      Party?: {
        Ptyname?: string;
        Add1?: string;
        Add2?: string;
        District?: string;
        State?: string;
        Pincode?: string;
        Phone1?: string;
      };
      ClothDetails?: Array<{
        DetailId: string;
        clothdes: string;
        combo: string;
        Dia_Id: string;
        Uom_Id: string;
        GSM: string;
        LL: string;
        GG: string;
        Remarks: string;
        Rate: string;
      }>;
      narration?: string;
      notes?: string;
    };
  };
}

const ModalPrint: React.FC<ModalPrintProps> = ({
  isOpen,
  onClose,
  responseData,
}) => {
  const printRef = useRef<HTMLDivElement>(null);

  const printContent = () => {
    const printContents = printRef.current?.innerHTML;
    if (printContents) {
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();
    }
  };

  const { Vchnum, PrgDate, ExpdelDate, Party, ClothDetails, narration, notes } =
    responseData?.data || {};

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="xl">
      <DialogTitle>
        Print Details
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <div ref={printRef} className="quotation">
          <div className="invoice-containers">
            <header className="invoice-header">
              <div className="invoice-brand">
                <img src={logo} alt="Logo" className="brand-logo" />
              </div>
              <div className="invoice-business-details">
                <h2>VEE PEE ESS FABRIC</h2>
                <p>
                  O.No. 14, N.No. 15, Kumarasamy Layout, Kongu Main Road,
                  TIRUPUR - 641607
                </p>
                <p>Phone No: 85080 80128, 88706 88007</p>
                <p>Email: veepeeessfabric@gmail.com</p>
                <p>TAX ID: 00XXXXX1234X0XX</p>
              </div>
            </header>
            <hr />
            <div className="invoice-details">
              <div className="billing-details">
                <p>
                  <strong>Billed to</strong>
                </p>
                <p>{Party?.Ptyname}</p>
                <p>
                  {Party?.Add1}, {Party?.Add2}
                </p>
                <p>
                  {Party?.District}, {Party?.State} - {Party?.Pincode}
                </p>
                <p>{Party?.Phone1}</p>
              </div>
              <div className="invoice-info">
                <p>
                  <strong>Voucher Number:</strong> {Vchnum}
                </p>
                <p>
                  <strong>Program Date:</strong> {PrgDate}
                </p>
                <p>
                  <strong>Expected Delivery Date:</strong> {ExpdelDate}
                </p>
              </div>
            </div>

            <div className="invoice-items">
              <p>
                <strong>Cloth Details:</strong>
              </p>
              <table className="invoice-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Combo</th>
                    <th>Dia</th>
                    <th>UOM</th>
                    <th>GSM</th>
                    <th>Length</th>
                    <th>Weight</th>
                    <th>Remarks</th>
                    <th>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {ClothDetails?.map((item) => (
                    <tr key={item.DetailId}>
                      <td>{item.DetailId}</td>
                      <td>{item.clothdes}</td>
                      <td>{item.combo}</td>
                      <td>{item.Dia_Id}</td>
                      <td>{item.Uom_Id}</td>
                      <td>{item.GSM}</td>
                      <td>{item.LL}</td>
                      <td>{item.GG}</td>
                      <td>{item.Remarks}</td>
                      <td>{item.Rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <footer className="invoice-footer">
              <hr />
              <div className="invoice-summary">
                <p>
                  <strong>Narration:</strong> {narration}
                </p>
                <p>
                  <strong>Notes:</strong>{" "}
                  {notes || "No additional notes provided."}
                </p>
              </div>
              <hr />
              <p>
                <strong>Terms & Conditions:</strong> All goods sold are
                non-refundable.
              </p>
              <p>
                <strong>Payment Terms:</strong> Payments due within 30 days.
              </p>
              <p>
                <strong>Credit Days:</strong> 30 days from the date of the
                invoice.
              </p>
              <p className="signature">For VEE PEE ESS FABRIC</p>
              <p className="authorised-signatory">Authorised Signatory</p>
            </footer>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={printContent}>
          Print
        </Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalPrint;
