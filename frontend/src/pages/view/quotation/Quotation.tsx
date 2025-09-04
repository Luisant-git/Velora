import { Fragment, useEffect, useState } from "react";
import { deleteQuotation, getQuotations } from "../../../api/quotation";
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
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import PageheaderQuotaion from "../../../components/page-header/PageheadQuotaion";
import theme from "../../../theme";


interface PartyData {
  Headerid: number;
  Vchnum: string;
  PrgDate: string;
  Party: {
    Ptyname: string;
    E_mail: string;
    Phone1?: string;
  };
  ClothDetails: {
    DetailId: number;
    clothdes: string;
    count: string;
    Rate: number;
    CRate: number;
    SampleRate: number;
    CSampleRate: number;
    Dia: string;
    Color_id:string
    combo:string
    LL:string
    GSM:string
    GG:string
    
  }[];
}



function Quotation() {
  const [partiesData, setPartiesData] = useState<PartyData[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [openRows, setOpenRows] = useState<number[]>([]);
  const [orderBy, setOrderBy] = useState<keyof PartyData>("Headerid");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [selectedPartyCode, setSelectedPartyCode] = useState<number | null>(
    null
  );
  const [open, setOpen] = useState(false);

  const getQuotationsData = () => {
    getQuotations()
      .then((response) => {
        if (response && response.status === 200) {
          setPartiesData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching parties data:", error);
      });
  };
  console.log(partiesData, "selectedparty");

  useEffect(() => {
    getQuotationsData();
  }, []);

  const handleClickOpen = (ptycode: number) => {
    setSelectedPartyCode(ptycode);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    if (selectedPartyCode === null) return;

    deleteQuotation(selectedPartyCode)
      .then((response) => {
        if (response?.success) {
          alert("Party deleted successfully.");
          getQuotationsData();
        } else {
          alert("Failed to delete the party.");
        }
      })
      .catch((error) => {
        console.error("Error deleting party:", error);
        alert("An error occurred while deleting the party.");
      });
    handleClose();
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

  const handleSort = (property: keyof PartyData) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredData = partiesData
    .filter(
      (party) =>
        party.Party.Ptyname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        party.Party.E_mail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        party.Vchnum.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (order === "asc") {
        return a[orderBy] > b[orderBy] ? 1 : -1;
      } else {
        return a[orderBy] < b[orderBy] ? 1 : -1;
      }
    });

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
          path="/quotation/add"
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          title="Tables"
          currentpage="Quotation"
          activepage="Quotation"
        />

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
                  active={orderBy === "Headerid"}
                  direction={orderBy === "Headerid" ? order : "asc"}
                  onClick={() => handleSort("Headerid")}
                >
                  ID
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
                  active={orderBy === "Vchnum"}
                  direction={orderBy === "Vchnum" ? order : "asc"}
                  onClick={() => handleSort("Vchnum")}
                >
                  Voucher Number
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
                  active={orderBy === "PrgDate"}
                  direction={orderBy === "PrgDate" ? order : "asc"}
                  onClick={() => handleSort("PrgDate")}
                >
                  Date
                </TableSortLabel>
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#6B76F8",
                  color: "#fff",
                  padding: "8px",
                }}
              >
                Name
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#6B76F8",
                  color: "#fff",
                  padding: "8px",
                }}
              >
                Email
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#6B76F8",
                  color: "#fff",
                  padding: "8px",
                }}
              >
                Phone
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
              .map((party) => (
                <Fragment key={party.Headerid}>
                  <TableRow>
                    <TableCell style={{ padding: "8px" }}>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => toggleRow(party.Headerid)}
                      >
                        {openRows.includes(party.Headerid) ? (
                          <Remove />
                        ) : (
                          <Add />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell style={{ padding: "8px" }}>
                      {party.Headerid}
                    </TableCell>
                    <TableCell style={{ padding: "8px" }}>
                      {party.Vchnum}
                    </TableCell>
                    <TableCell style={{ padding: "8px" }}>
                      {new Date(party.PrgDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell style={{ padding: "8px" }}>
                      {party.Party.Ptyname}
                    </TableCell>
                    <TableCell style={{ padding: "8px" }}>
                      {party.Party.E_mail}
                    </TableCell>
                    <TableCell style={{ padding: "8px" }}>
                      {party.Party.Phone1}
                    </TableCell>
                    <TableCell style={{ padding: "8px" }}>
                      <td>
                        <div className="hstack gap-2 fs-15">
                          <Link
                            to={`/printer/${party.Headerid}`}
                            className="btn btn-icon btn-sm btn-success-light rounded-pill"
                          >
                            <i className="ri-download-2-line"></i>
                          </Link>
                          <Link
                            to={`/quotation/update/${party.Headerid}`}
                            className="btn btn-icon btn-sm btn-info-light rounded-pill"
                          >
                            <i className="ri-edit-line"></i>
                          </Link>
                          <Link
                            to=""
                            onClick={() => handleClickOpen(party.Headerid)}
                            className="btn btn-icon btn-sm btn-danger-light rounded-pill"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </Link>
                        </div>
                      </td>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={8}
                    >
                      <Collapse
                        in={openRows.includes(party.Headerid)}
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
                                  Description
                                </TableCell>
                                <TableCell
                                  style={{
                                    padding: "8px",
                                    backgroundColor: "#6B76F8",
                                    color: "#fff",
                                  }}
                                >
                                  Count
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
                                  CRate
                                </TableCell>
                                <TableCell
                                  style={{
                                    padding: "8px",
                                    backgroundColor: "#6B76F8",
                                    color: "#fff",
                                  }}
                                >
                                  Sample Rate
                                </TableCell>
                                <TableCell
                                  style={{
                                    padding: "8px",
                                    backgroundColor: "#6B76F8",
                                    color: "#fff",
                                  }}
                                >
                                  CSample Rate
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
                                  Combo
                                </TableCell>
                                <TableCell
                                  style={{
                                    padding: "8px",
                                    backgroundColor: "#6B76F8",
                                    color: "#fff",
                                  }}
                                >
                                  LL
                                </TableCell>
                                <TableCell
                                  style={{
                                    padding: "8px",
                                    backgroundColor: "#6B76F8",
                                    color: "#fff",
                                  }}
                                >
                                  LSM
                                </TableCell>
                                <TableCell
                                  style={{
                                    padding: "8px",
                                    backgroundColor: "#6B76F8",
                                    color: "#fff",
                                  }}
                                >
                                  GG
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {party.ClothDetails.map((detail) => (
                                <TableRow key={detail.DetailId}>
                                  <TableCell style={{ padding: "8px" }}>
                                    {detail.clothdes}
                                  </TableCell>
                                  <TableCell style={{ padding: "8px" }}>
                                    {detail.count}
                                  </TableCell>
                                  <TableCell style={{ padding: "8px" }}>
                                    {detail.Rate}
                                  </TableCell>
                                  <TableCell style={{ padding: "8px" }}>
                                    {detail.CRate}
                                  </TableCell>
                                  <TableCell style={{ padding: "8px" }}>
                                    {detail.SampleRate}
                                  </TableCell>
                                  <TableCell style={{ padding: "8px" }}>
                                    {detail.CSampleRate}
                                  </TableCell>
                                  <TableCell style={{ padding: "8px" }}>
                                    {detail.Color_id}
                                  </TableCell>
                                  <TableCell style={{ padding: "8px" }}>
                                    {detail.combo}
                                  </TableCell>
                                  <TableCell style={{ padding: "8px" }}>
                                    {detail.LL}
                                  </TableCell>
                                  <TableCell style={{ padding: "8px" }}>
                                    {detail.GSM}
                                  </TableCell>
                                  <TableCell style={{ padding: "8px" }}>
                                    {detail.GG}
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
            page={page + 1} // MUI Pagination is 1-based
            onChange={onPageChange}
          />
        </div>
      </Fragment>
      <div
        className={`modal fade ${open ? "show d-block" : ""}`}
        tabIndex={-1}
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Party</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this party?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Quotation;
