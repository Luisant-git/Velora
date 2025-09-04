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
import { deleteSaleEntry, getSaleEntries } from "../../../../api/saleentry";
import theme from "../../../../theme";
import { toast } from "react-toastify";
import ItemSkeleton from "../../../../components/skeleton/Skeleton";

interface SaleItemData {
  HSNCode: number;
  id: number;
  GSTAmount: number;
  NetAmount: number;
  DiscAmount: number;
  taxableAmount: number;
  Qty: number;
  GSTPercent: number;
  MRP: number;
  diskPersentage: number;
  Rate: number;
  DiscType: string;
  createdAt: string;
  updatedAt: string;
  saleEntryId: number;
}

interface SaleEntryData {
  id: number;
  billNo: string;
  billDate: string;
  mobile: string;
  customerName: string;
  customerAddress: string;
  remarks: string;
  totalQty: number;
  totalAmount: number;
  totalPaidCash: number;
  cardAmount: number;
  upiAmount: number;
  createdAt: string;
  updatedAt: string;
  saleItems: SaleItemData[];
}

function SaleEntry() {
  const [saleEntries, setSaleEntries] = useState<SaleEntryData[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");
  const [openRows, setOpenRows] = useState<number[]>([]);
  const [orderBy, setOrderBy] = useState<keyof SaleEntryData>("id");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [selectedSaleEntryId, setSelectedSaleEntryId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchSaleEntries = useCallback(() => {
    setLoading(true);
    getSaleEntries()
      .then((response) => {
        if (response && response.status === 200) {
          const filteredData = response.data.data.map((entry: any) => ({
            id: entry.id,
            billNo: entry.BillNo,
            billDate: entry.BillDate,
            mobile: entry.customer?.Mobile || "",
            customerName: entry.customer?.customername || "",
            customerAddress: entry.customer?.Address || "",
            remarks: entry.Remarks,
            totalQty: entry.TotalQty,
            totalAmount: entry.TotalAmount,
            totalPaidCash: entry.TotalPaidAmount,
            cardAmount: entry.CardAmount,
            upiAmount: entry.UPIAmount,
            createdAt: entry.CreatedDate,
            updatedAt: entry.ModifiedDate,
            saleItems: entry.saleItems.map((item: any) => ({
              id: item.id,
              HSNCode: item.HSNCode,
              GSTAmount: item.GSTAmount,
              GSTPercent: item.GSTPercent,
              NetAmount: item.NetAmount,
              DiscAmount: item.DiscAmount,
              taxableAmount: item.Amount,
              Qty: item.Qty,
              MRP: item.MRP,
              diskPersentage: item.DiscPercent,
              Rate: item.Rate,
              DiscType: item.DiscType,
              createdAt: item.createdAt,
              updatedAt: item.updatedAt,
              saleEntryId: item.saleEntryId,
            })),
          }));
          setSaleEntries(filteredData);
        }
      })
      .catch((error) => {
        console.error("Error fetching sale entries:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchSaleEntries();
  }, [fetchSaleEntries]);

  const handleClickOpen = (id: number) => {
    setSelectedSaleEntryId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    if (selectedSaleEntryId === null) return;
    setLoading(true);
    deleteSaleEntry(selectedSaleEntryId)
      .then((response) => {
        if (response?.success) {
          toast.success("Sale Entry moved to trash successfully", { autoClose: 1000 });
          fetchSaleEntries();
          setOpen(false);
        } else {
          toast.error("Error while moving to trash", { autoClose: 1000 });
          setOpen(false);
        }
      })
      .catch((error) => {
        console.error("Error deleting sale entry:", error);
        toast.error("Error while moving to trash", { autoClose: 1000 });
        setOpen(false);
      })
      .finally(() => {
        setLoading(false);
      });
    handleClose();
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSort = (property: keyof SaleEntryData) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredData = useMemo(
    () =>
      saleEntries
        .filter(
          (entry) =>
            entry.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            entry.billNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            entry.mobile.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
          if (order === "asc") {
            return a[orderBy] > b[orderBy] ? 1 : -1;
          } else {
            return a[orderBy] < b[orderBy] ? 1 : -1;
          }
        }),
    [saleEntries, searchTerm, order, orderBy]
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const onPageChange = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <PageheaderQuotaion
          path="/sale-entry"
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          title="Tables"
          currentpage="Sale Entries"
          activepage="Sale Entries"
        />

        {loading ? (
          <ItemSkeleton
            columns={[
              "ITEM CODE",
              "ITEM NAME",
              "CATEGORY",
              "HSN CODE",
              "SIZE",
              "COLOR",
              "GST %",
              "ACTIVE",
              "ACTIVE",
              "ACTIVE",
            ]}
            actionsCount={1}
          />
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ backgroundColor: "#6B76F8", color: "#fff", padding: "8px" }} />
                <TableCell style={{ backgroundColor: "#6B76F8", color: "#fff", padding: "8px" }}>
                  <TableSortLabel
                    active={orderBy === "id"}
                    direction={orderBy === "id" ? order : "asc"}
                    onClick={() => handleSort("id")}
                  >
                    ID
                  </TableSortLabel>
                </TableCell>
                <TableCell style={{ backgroundColor: "#6B76F8", color: "#fff", padding: "8px" }}>
                  <TableSortLabel
                    active={orderBy === "billNo"}
                    direction={orderBy === "billNo" ? order : "asc"}
                    onClick={() => handleSort("billNo")}
                  >
                    Bill Number
                  </TableSortLabel>
                </TableCell>
                <TableCell style={{ backgroundColor: "#6B76F8", color: "#fff", padding: "8px" }}>
                  <TableSortLabel
                    active={orderBy === "billDate"}
                    direction={orderBy === "billDate" ? order : "asc"}
                    onClick={() => handleSort("billDate")}
                  >
                    Date
                  </TableSortLabel>
                </TableCell>
                <TableCell style={{ backgroundColor: "#6B76F8", color: "#fff", padding: "8px" }}>
                  Customer Name
                </TableCell>
                <TableCell style={{ backgroundColor: "#6B76F8", color: "#fff", padding: "8px" }}>
                  Mobile
                </TableCell>
                <TableCell style={{ backgroundColor: "#6B76F8", color: "#fff", padding: "8px" }}>
                  Total Amount
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
                      <TableCell style={{ padding: "8px" }}>{entry.id}</TableCell>
                      <TableCell style={{ padding: "8px" }}>{entry.billNo}</TableCell>
                      <TableCell style={{ padding: "8px" }}>
                        {new Date(entry.billDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell style={{ padding: "8px" }}>{entry.customerName}</TableCell>
                      <TableCell style={{ padding: "8px" }}>{entry.mobile}</TableCell>
                      <TableCell style={{ padding: "8px" }}>{entry.totalAmount}</TableCell>
                      <TableCell style={{ padding: "8px" }}>
                        <div className="hstack gap-2 fs-15">
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
                      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                        <Collapse in={openRows.includes(entry.id)} timeout="auto" unmountOnExit>
                          <div style={{ margin: "16px" }}>
                            <Table size="small">
                              <TableHead>
                                <TableRow>
                                  <TableCell style={{ padding: "8px", backgroundColor: "#6B76F8", color: "#fff" }}>
                                    HSN Code
                                  </TableCell>
                                  <TableCell style={{ padding: "8px", backgroundColor: "#6B76F8", color: "#fff" }}>
                                    Quantity
                                  </TableCell>
                                  <TableCell style={{ padding: "8px", backgroundColor: "#6B76F8", color: "#fff" }}>
                                    MRP
                                  </TableCell>
                                  <TableCell style={{ padding: "8px", backgroundColor: "#6B76F8", color: "#fff" }}>
                                    Sale Rate
                                  </TableCell>
                                  <TableCell style={{ padding: "8px", backgroundColor: "#6B76F8", color: "#fff" }}>
                                    Discount Type
                                  </TableCell>
                                  <TableCell style={{ padding: "8px", backgroundColor: "#6B76F8", color: "#fff" }}>
                                    Discount %
                                  </TableCell>
                                  <TableCell style={{ padding: "8px", backgroundColor: "#6B76F8", color: "#fff" }}>
                                    Discount Amount
                                  </TableCell>
                                  <TableCell style={{ padding: "8px", backgroundColor: "#6B76F8", color: "#fff" }}>
                                    GST %
                                  </TableCell>
                                  <TableCell style={{ padding: "8px", backgroundColor: "#6B76F8", color: "#fff" }}>
                                    GST Amount
                                  </TableCell>
                                  <TableCell style={{ padding: "8px", backgroundColor: "#6B76F8", color: "#fff" }}>
                                    Net Amount
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {entry.saleItems.map((item) => (
                                  <TableRow key={item.id}>
                                    <TableCell style={{ padding: "8px" }}>{item.HSNCode}</TableCell>
                                    <TableCell style={{ padding: "8px" }}>{item.Qty}</TableCell>
                                    <TableCell style={{ padding: "8px" }}>{item.MRP}</TableCell>
                                    <TableCell style={{ padding: "8px" }}>{item.Rate}</TableCell>
                                    <TableCell style={{ padding: "8px" }}>{item.DiscType}</TableCell>
                                    <TableCell style={{ padding: "8px" }}>{item.diskPersentage}%</TableCell>
                                    <TableCell style={{ padding: "8px" }}>{item.DiscAmount}</TableCell>
                                    <TableCell style={{ padding: "8px" }}>{item.GSTPercent}%</TableCell>
                                    <TableCell style={{ padding: "8px" }}>{item.GSTAmount}</TableCell>
                                    <TableCell style={{ padding: "8px" }}>{item.NetAmount}</TableCell>
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
      </Fragment>
      <div className={`modal fade ${open ? "show d-block" : ""}`} tabIndex={-1} style={{ background: "rgba(0, 0, 0, 0.5)" }}>
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
              <p>Are you sure you want to move this sale entry to trash?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>
                Cancel
              </button>
              <button type="button" className="btn btn-danger" onClick={handleDelete}>
                Move to Trash
              </button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default SaleEntry;