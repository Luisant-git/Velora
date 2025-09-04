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
  TableSortLabel,
  Pagination,
  CircularProgress,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import PageheaderQuotaion from "../../../../components/page-header/PageheadQuotaion";
import theme from "../../../../theme";
import {
  deletePurchaseEntry,
  getPurchaseEntries,
} from "../../../../api/purchaseEntry";
import { toast } from "react-toastify";
import ItemSkeleton from "../../../../components/skeleton/Skeleton";

interface PurchaseItemData {
  ItemMaster: any;
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

function PurchaseEntry() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");
  const [openRows, setOpenRows] = useState<number[]>([]);
  const [orderBy, setOrderBy] = useState<keyof PurchaseEntryData>("id");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [purchaseEntries, setPurchaseEntries] = useState<PurchaseEntryData[]>(
    []
  );

  const fetchPurchaseEntries = useCallback(() => {
    setLoading(true);
    getPurchaseEntries()
      .then((response) => {
        if (response && response.status === 200) {
          const activeEntries = response.data.data.filter(
            (entry: PurchaseEntryData) => entry.Delete_Flg !== 1
          );
          setPurchaseEntries(activeEntries);
        }
      })
      .catch((error) => {
        console.error("Error fetching purchase entries:", error);
        toast.error("Failed to fetch purchase entries");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchPurchaseEntries();
  }, [fetchPurchaseEntries]);

  const handleClickOpen = (id: number) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    if (selectedId === null) return;
    setDeleteLoading(true);

    deletePurchaseEntry(selectedId)
      .then((response) => {
        if (response?.success) {
          toast.success("Purchase entry moved to trash successfully");
          fetchPurchaseEntries();
        } else {
          toast.error("Failed to move purchase entry to trash");
        }
      })
      .catch((error) => {
        console.error("Error deleting purchase entry:", error);
        toast.error("Failed to move purchase entry to trash");
      })
      .finally(() => {
        setDeleteLoading(false);
        handleClose();
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

  const handleSort = (property: keyof PurchaseEntryData) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredData = useMemo(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filteredEntries = purchaseEntries.filter((entry) => {
      return (
        entry.BillNo.toLowerCase().includes(lowercasedSearchTerm) ||
        entry.party.Ptyname.toLowerCase().includes(lowercasedSearchTerm)
      );
    });

    return filteredEntries.sort((a, b) => {
      if (order === "desc") {
        if (a[orderBy] === null || b[orderBy] === null) {
          return 0;
        }
        return a[orderBy] > b[orderBy] ? 1 : -1;
      } else {
        if (a[orderBy] === null || b[orderBy] === null) {
          return 0;
        }
        return a[orderBy] < b[orderBy] ? 1 : -1;
      }
    });
  }, [purchaseEntries, order, orderBy, searchTerm]);

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
        <PageheaderQuotaion
          path="/purchase-entry"
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          title="Purchase Entries"
          currentpage="Active Purchase Entries"
          activepage="Purchase Entries"
        />

        <div style={{ position: "relative" }}>
          {loading ? (
            <ItemSkeleton
              columns={[
                "ITEM NAME",
                "CATEGORY",
                "HSN CODE",
                "SIZE",
                "COLOR",
                "GST %",
                "ACTIVE",
              ]}
              actionsCount={1}
            />
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      backgroundColor: "#6B76F8",
                      color: "#fff",
                      padding: "8px",
                    }}
                  />
                  <TableCell
                    style={{
                      backgroundColor: "#6B76F8",
                      color: "#fff",
                      padding: "8px",
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === "BillNo"}
                      direction={orderBy === "BillNo" ? order : "asc"}
                      onClick={() => handleSort("BillNo")}
                    >
                      Bill No
                    </TableSortLabel>
                  </TableCell>
                  <TableCell
                    style={{
                      backgroundColor: "#6B76F8",
                      color: "#fff",
                      padding: "8px",
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === "BillDate"}
                      direction={orderBy === "BillDate" ? order : "asc"}
                      onClick={() => handleSort("BillDate")}
                    >
                      Bill Date
                    </TableSortLabel>
                  </TableCell>
                  <TableCell
                    style={{
                      backgroundColor: "#6B76F8",
                      color: "#fff",
                      padding: "8px",
                    }}
                  >
                   Supplier
                  </TableCell>
                  <TableCell
                    style={{
                      backgroundColor: "#6B76F8",
                      color: "#fff",
                      padding: "8px",
                    }}
                  >
                    Total Qty
                  </TableCell>
                  <TableCell
                    style={{
                      backgroundColor: "#6B76F8",
                      color: "#fff",
                      padding: "8px",
                    }}
                  >
                    Total Amount
                  </TableCell>
                  <TableCell
                    style={{
                      backgroundColor: "#6B76F8",
                      color: "#fff",
                      padding: "8px",
                    }}
                  >
                    Party Name
                  </TableCell>
                  <TableCell
                    style={{
                      backgroundColor: "#6B76F8",
                      color: "#fff",
                      padding: "8px",
                    }}
                  >
                Mobile
                  </TableCell>
                  <TableCell
                    style={{
                      backgroundColor: "#6B76F8",
                      color: "#fff",
                      padding: "8px",
                    }}
                  >
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
                          {entry.TotalQty}
                        </TableCell>
                        <TableCell style={{ padding: "8px" }}>
                          {entry.TotalAmount}
                        </TableCell>
                        <TableCell style={{ padding: "8px" }}>
                          {entry?.party?.Ptyname}
                        </TableCell>
                        <TableCell style={{ padding: "8px" }}>
                          {entry?.party?.Mobile}
                        </TableCell>
                        <TableCell style={{ padding: "8px" }}>
                          <div className="hstack gap-2 fs-15">
                            <Link
                              to={`/purchase-entry/${entry.id}`}
                              className="btn btn-icon btn-sm btn-info-light rounded-pill"
                            >
                              <i className="ri-edit-line"></i>
                            </Link>
                            <Link
                              to=""
                              onClick={() => handleClickOpen(entry.id)}
                              className="btn btn-icon btn-sm btn-danger-light rounded-pill"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </Link>
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
                                      Category
                                    </TableCell>
                                    <TableCell
                                      style={{
                                        padding: "8px",
                                        backgroundColor: "#6B76F8",
                                        color: "#fff",
                                      }}
                                    >
                                      Item Name
                                    </TableCell>
                                    <TableCell
                                      style={{
                                        padding: "8px",
                                        backgroundColor: "#6B76F8",
                                        color: "#fff",
                                      }}
                                    >
                                      Color
                                    </TableCell>
                                    <TableCell
                                      style={{
                                        padding: "8px",
                                        backgroundColor: "#6B76F8",
                                        color: "#fff",
                                      }}
                                    >
                                      Size
                                    </TableCell>
                                    <TableCell
                                      style={{
                                        padding: "8px",
                                        backgroundColor: "#6B76F8",
                                        color: "#fff",
                                      }}
                                    >
                                      GST%
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
                                        {item.ItemMaster?.itemCode || ""}
                                      </TableCell>
                                      <TableCell style={{ padding: "8px" }}>
                                        {item.ItemMaster?.category}
                                      </TableCell>
                                      <TableCell style={{ padding: "8px" }}>
                                        {item.ItemMaster?.itemName}
                                      </TableCell>
                                      <TableCell style={{ padding: "8px" }}>
                                        {item.ItemMaster?.color}
                                      </TableCell>
                                      <TableCell style={{ padding: "8px" }}>
                                        {item.ItemMaster.size}
                                      </TableCell>
                                      <TableCell style={{ padding: "8px" }}>
                                        {item.ItemMaster.gstPercent}
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
          className={`modal fade ${open ? "show d-block" : ""}`}
          tabIndex={-1}
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Move to Trash</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Are you sure you want to move this purchase entry to trash?
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                  disabled={deleteLoading}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                  disabled={deleteLoading}
                >
                  {deleteLoading ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    "Move to Trash"
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

export default PurchaseEntry;
