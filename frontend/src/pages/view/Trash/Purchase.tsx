import { Fragment, useEffect, useState, useMemo, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Collapse,
  IconButton,
  TablePagination,
  Pagination,
  CircularProgress,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme";
import {
  getDeletedPurchaseEntry,
  restorePurchaseEntry,
} from "../../../api/purchaseEntry";
import { toast } from "react-toastify";
import ItemSkeleton from "../../../components/skeleton/Skeleton";

interface PurchaseItemData {
  id: number;
  Qty: string;
  MRP: string;
  Rate: string;
  Amount: string;
  DiscType: string;
  DiscPercent: string;
  DiscAmount: string;
  GSTAmount: string;
  HSNCode: string;
  bar_qr_code_No: string;
  GSTPercent: string;
  NetAmount: string;
  createdAt: string;
  updatedAt: string;
  purchaseEntryId: number;
  createdBy: number;
  updatedBy: number;
  deletedBy: number;
  Item_Id: number;
}

interface PurchaseEntryData {
  party: any;
  id: number;
  RefNo: string;
  RefDate: string;
  Party_Id: number;
  BillNo: string;
  BillDate: string;
  Remarks: string;
  TotalQty: string;
  TotalAmount: string;
  GSTAmount: string;
  OtherType: string;
  OtherAmount: string;
  Delete_Flg: number;
  CreatedDate: string;
  ModifiedBy: string;
  ModifiedDate: string;
  DeletedDate: string;
  NetAmount: string;
  FinancialYearId: null | number;
  createdBy: number;
  updatedBy: number;
  deletedBy: number;
  PurchaseItems: PurchaseItemData[];
}

function PurchaseTrash() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");
  const [openRows, setOpenRows] = useState<number[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [openRestore, setOpenRestore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [restoreLoading, setRestoreLoading] = useState(false);

  const [purchaseEntries, setPurchaseEntries] = useState<PurchaseEntryData[]>([]);

  const fetchDeletedEntries = useCallback(() => {
    setLoading(true);
    getDeletedPurchaseEntry()
      .then((response) => {
        if (response && response.status === 200) {
          const deletedEntries = response.data.data.filter(
            (entry: PurchaseEntryData) => entry.Delete_Flg === 1
          );
          setPurchaseEntries(deletedEntries);
        }
      })
      .catch((error) => {
        console.error("Error fetching deleted purchase entries:", error);
        toast.error("Failed to fetch deleted purchase entries");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchDeletedEntries();
  }, [fetchDeletedEntries]);

  const handleClickOpenRestore = (id: number) => {
    setSelectedId(id);
    setOpenRestore(true);
  };

  const handleCloseRestore = () => {
    setOpenRestore(false);
  };

  const handleRestore = () => {
    if (selectedId === null) return;
    setRestoreLoading(true);

    restorePurchaseEntry(selectedId)
      .then((response) => {
        if (response?.success) {
          toast.success("Purchase entry restored successfully");
          fetchDeletedEntries();
        } else {
          toast.error("Failed to restore purchase entry");
        }
      })
      .catch((error) => {
        console.error("Error restoring purchase entry:", error);
        toast.error("Failed to restore purchase entry");
      })
      .finally(() => {
        setRestoreLoading(false);
        handleCloseRestore();
      });
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleRow = (id: number) => {
    setOpenRows((prevOpenRows) =>
      prevOpenRows.includes(id)
        ? prevOpenRows.filter((rowId) => rowId !== id)
        : [...prevOpenRows, id]
    );
  };

  const filteredData = useMemo(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return purchaseEntries.filter((entry) => {
      return (
        entry.BillNo.toLowerCase().includes(lowercasedSearchTerm) ||
        entry.party.Ptyname.toLowerCase().includes(lowercasedSearchTerm)
      );
    });
  }, [purchaseEntries, searchTerm]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const onPageChange = (
    _event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <div style={{ position: "relative" }}>
          {loading ? (
            <ItemSkeleton
              columns={["Bill No", "Bill Date", "Party Name", "Total Amount", "Status", "Actions"]}
              actionsCount={1}
            />
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ backgroundColor: "#6B76F8", color: "#fff", padding: "8px" }} />
                  <TableCell style={{ backgroundColor: "#6B76F8", color: "#fff", padding: "8px" }}>
                    Bill No
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#6B76F8", color: "#fff", padding: "8px" }}>
                    Bill Date
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#6B76F8", color: "#fff", padding: "8px" }}>
                    Party Name
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#6B76F8", color: "#fff", padding: "8px" }}>
                    Total Amount
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#6B76F8", color: "#fff", padding: "8px" }}>
                    Status
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#6B76F8", color: "#fff", padding: "8px" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((entry) => (
                    <Fragment key={entry.id}>
                      <TableRow>
                        <TableCell style={{ padding: "8px" }}>
                          <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => toggleRow(entry.id)}
                          >
                            {openRows.includes(entry.id) ? <Remove /> : <Add />}
                          </IconButton>
                        </TableCell>
                        <TableCell style={{ padding: "8px" }}>
                          {entry.BillNo}
                        </TableCell>
                        <TableCell style={{ padding: "8px" }}>
                          {new Date(entry.BillDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell style={{ padding: "8px" }}>
                          {entry.party.Ptyname}
                        </TableCell>
                        <TableCell style={{ padding: "8px" }}>
                          {entry.TotalAmount}
                        </TableCell>
                        <TableCell style={{ padding: "8px" }}>
                          <span className="badge bg-danger">Deleted</span>
                        </TableCell>
                        <TableCell style={{ padding: "8px" }}>
                          <div className="hstack gap-2 fs-15">
                            <button
                              onClick={() => handleClickOpenRestore(entry.id)}
                              className="btn btn-icon btn-sm btn-success-light rounded-pill"
                            >
                              <i className="ri-refresh-line"></i>
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          style={{ paddingBottom: 0, paddingTop: 0 }}
                          colSpan={10}
                        >
                          <Collapse
                            in={openRows.includes(entry.id)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <div style={{ margin: "16px" }}>
                              <Table size="small">
                                <TableHead>
                                  <TableRow>
                                    <TableCell
                                      style={{
                                        padding: "8px",
                                        backgroundColor: "#6B76F8",
                                        color: "#fff",
                                      }}
                                    >
                                      Item Code
                                    </TableCell>
                                    <TableCell
                                      style={{
                                        padding: "8px",
                                        backgroundColor: "#6B76F8",
                                        color: "#fff",
                                      }}
                                    >
                                      Quantity
                                    </TableCell>
                                    <TableCell
                                      style={{
                                        padding: "8px",
                                        backgroundColor: "#6B76F8",
                                        color: "#fff",
                                      }}
                                    >
                                      MRP
                                    </TableCell>
                                    <TableCell
                                      style={{
                                        padding: "8px",
                                        backgroundColor: "#6B76F8",
                                        color: "#fff",
                                      }}
                                    >
                                      Rate
                                    </TableCell>
                                    <TableCell
                                      style={{
                                        padding: "8px",
                                        backgroundColor: "#6B76F8",
                                        color: "#fff",
                                      }}
                                    >
                                      Amount
                                    </TableCell>
                                    <TableCell
                                      style={{
                                        padding: "8px",
                                        backgroundColor: "#6B76F8",
                                        color: "#fff",
                                      }}
                                    >
                                      Discount Amount
                                    </TableCell>
                                    <TableCell
                                      style={{
                                        padding: "8px",
                                        backgroundColor: "#6B76F8",
                                        color: "#fff",
                                      }}
                                    >
                                      GST Amount
                                    </TableCell>
                                    <TableCell
                                      style={{
                                        padding: "8px",
                                        backgroundColor: "#6B76F8",
                                        color: "#fff",
                                      }}
                                    >
                                      Net Amount
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {entry.PurchaseItems.map((item) => (
                                    <TableRow key={item.id}>
                                      <TableCell style={{ padding: "8px" }}>
                                        {item.bar_qr_code_No}
                                      </TableCell>
                                      <TableCell style={{ padding: "8px" }}>
                                        {item.Qty}
                                      </TableCell>
                                      <TableCell style={{ padding: "8px" }}>
                                        {item.MRP}
                                      </TableCell>
                                      <TableCell style={{ padding: "8px" }}>
                                        {item.Rate}
                                      </TableCell>
                                      <TableCell style={{ padding: "8px" }}>
                                        {item.Amount}
                                      </TableCell>
                                      <TableCell style={{ padding: "8px" }}>
                                        {item.DiscAmount}
                                      </TableCell>
                                      <TableCell style={{ padding: "8px" }}>
                                        {item.GSTAmount}
                                      </TableCell>
                                      <TableCell style={{ padding: "8px" }}>
                                        {item.NetAmount}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </Fragment>
                  ))}
              </TableBody>
            </Table>
          )}
        </div>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <div className="d-flex justify-content-center mt-3">
          <Pagination
            count={totalPages}
            variant="outlined"
            shape="rounded"
            page={page + 1}
            onChange={onPageChange}
          />
        </div>

        <div
          className={`modal fade ${openRestore ? "show d-block" : ""}`}
          tabIndex={-1}
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Restore Purchase Entry</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseRestore}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to restore this purchase entry?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseRestore}
                  disabled={restoreLoading}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleRestore}
                  disabled={restoreLoading}
                >
                  {restoreLoading ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    "Restore"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </ThemeProvider>
  );
}

export default PurchaseTrash;