import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import { Fragment, useEffect, useState } from "react";
import Pageheader from "../../../components/page-header/pageheader";
import { getDeletedParties, restoreParty } from "../../../api/party";
import img from "../../../assets/images/avatar.jpg";
import {
  Avatar,
  Badge,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Col } from "react-bootstrap";
import { toast } from "react-toastify";
import ItemSkeleton from "../../../components/skeleton/Skeleton";

interface PartyData {
  ptycode: number;
  Ptyname: string;
  Add1: string;
  Add2: string;
  Add3: string;
  Add4: string;
  District: string;
  State: string;
  Phone1: string;
  Mobile: string;
  Fax: string;
  E_mail: string;
  Panno: string;
  Delete_flg: number;
  IsRunning: number;
  TallyAccName: string;
  MarketPerson: string;
  MarketContact: string;
  IsExport: number;
  IsCashParty: number;
  State_id: number;
  GSTNO: string;
  IsRegular: number;
  BankName: string;
  AccountNo: string;
  IFSC: string;
  PartyCode: string;
  AccountName: string;
  Branch: string;
  CreditDays: number;
  Pincode: string;
  Distance: number;
  createdAt: string;
  updatedAt: string;
  createdBy: number;
  updatedBy: number | null;
  deletedBy: number | null;
  ConcernId: number | null;
}

function PartyTrash() {
  const [partiesData, setPartiesData] = useState<PartyData[]>([]);
  const [filteredData, setFilteredData] = useState<PartyData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [selectedPartyCode, setSelectedPartyCode] = useState<number | null>(null);
  const [selectedParty, setSelectedParty] = useState<PartyData | null>(null);
  const [loading, setLoading] = useState(false);
  const [restoreLoading, setRestoreLoading] = useState(false);

  const handleClickOpen = (ptycode: number) => {
    setSelectedPartyCode(ptycode);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleViewClick = (party: PartyData) => {
    setSelectedParty(party);
    setOpenView(true);
  };

  const handleRestore = () => {
    if (selectedPartyCode === null) return;
    setRestoreLoading(true);
    restoreParty(selectedPartyCode)
      .then(() => {
        toast.success("Party restored successfully.");
        getPartiesData();
      })
      .catch(() => {
        toast.error("Cannot restore this party. Contact the admin.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .finally(() => {
        setRestoreLoading(false);
        handleClose();
      });
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const getPartiesData = () => {
    setLoading(true);
    getDeletedParties()
      .then((response) => {
        if (response && response.status === 200) {
          const deletedParties = response.data.filter((party: PartyData) => party.Delete_flg === 1);
          setPartiesData(deletedParties);
          setFilteredData(deletedParties);
        }
      })
      .catch((error) => {
        console.error("Error fetching deleted parties data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getPartiesData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentParties = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch = (searchTerm: string) => {
    const filtered = partiesData.filter((party) =>
      party.Ptyname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSort = (sortOrder: "asc" | "desc") => {
    const sorted = [...filteredData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Ptyname.localeCompare(b.Ptyname);
      } else {
        return b.Ptyname.localeCompare(a.Ptyname);
      }
    });
    setFilteredData(sorted);
  };

  return (
    <Fragment>
      <Pageheader
        path="/party"
        title="Party Management"
        currentpage="Trash Bin"
        activepage="party"
        onSearch={handleSearch}
        onSort={handleSort}
       
      />
      {loading ? (
        <ItemSkeleton
          columns={[
            "Name",
            "Address",
            "Mobile",
            "Email",
            "GST",
            "Status",
            "Action",
          ]}
          actionsCount={2}
        />
      ) : (
        <Col xl={12}>
          <div className="table-responsive">
            <SpkTablescomponent
              tableClass="text-nowrap table-bordered bg-primary"
              headerBgColor="#f8f9fa"
              header={[
                { title: "Name" },
                { title: "Address" },
                { title: "Mobile" },
                { title: "Email" },
                { title: "GST" },
                { title: "Status" },
                { title: "Action" },
              ]}
              totalItems={filteredData?.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            >
              {currentParties.map((party: PartyData) => (
                <tr key={party.ptycode}>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={img} alt="img" />
                      </span>
                      {party.Ptyname}
                    </div>
                  </th>
                  <td>{party.Add1}</td>
                  <td>{party.Mobile}</td>
                  <td>{party.E_mail}</td>
                  <td>{party.GSTNO}</td>
                  <td>
                    <span className="badge bg-danger">Deleted</span>
                  </td>
                  <td>
                    <div className="hstack gap-2 fs-15">
                      {/* <button
                        onClick={() => handleViewClick(party)}
                        className="btn btn-icon btn-sm btn-secondary-light rounded-pill"
                      >
                        <i className="ri-eye-line"></i>
                      </button> */}
                      <button
                        onClick={() => handleClickOpen(party.ptycode)}
                        className="btn btn-icon btn-sm btn-success-light rounded-pill"
                      >
                        <i className="ri-refresh-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </SpkTablescomponent>
          </div>
        </Col>
      )}
      <div
        className={`modal fade ${open ? "show d-block" : ""}`}
        tabIndex={-1}
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Restore Party</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to restore this party?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
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

      <Modal open={openView} onClose={() => setOpenView(false)}>
        <Paper
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: 24,
            maxWidth: 600,
            width: "90%",
          }}
        >
          {selectedParty ? (
            <Stack spacing={2} alignItems="center">
              <Avatar
                sx={{ width: 80, height: 80 }}
                alt={selectedParty.Ptyname || "User"}
                src=""
              />
              <Typography variant="h6">
                {selectedParty.Ptyname || "N/A"}
              </Typography>
              <Typography variant="body2">
                {selectedParty.Add1 || "No Address Provided"},{" "}
                {selectedParty.Pincode || ""}
              </Typography>
              <Typography variant="body2">
                {selectedParty.E_mail || "No Email Provided"}
              </Typography>
              <Badge color="success">
                {selectedParty.State || "Unknown State"}
              </Badge>
              <Divider sx={{ width: "100%" }} />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">Phone</Typography>
                  <Typography>{selectedParty.Phone1 || "N/A"}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">GST No</Typography>
                  <Typography>{selectedParty.GSTNO || "N/A"}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">Account Name</Typography>
                  <Typography>{selectedParty.AccountName || "N/A"}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">IFSC</Typography>
                  <Typography>{selectedParty.IFSC || "N/A"}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">Bank Name</Typography>
                  <Typography>{selectedParty.BankName || "N/A"}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">Branch</Typography>
                  <Typography>{selectedParty.Branch || "N/A"}</Typography>
                </Grid>
              </Grid>
              <Button variant="outlined" onClick={() => setOpenView(false)}>
                Close
              </Button>
            </Stack>
          ) : (
            <Typography>No data available.</Typography>
          )}
        </Paper>
      </Modal>
    </Fragment>
  );
}

export default PartyTrash;