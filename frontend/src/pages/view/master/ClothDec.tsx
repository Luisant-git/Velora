import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Col } from "react-bootstrap";
import {
  deleteClothDec,
  getClothDecs,
  postClothDec,
  updateClothDec,
} from "../../../api/clothdec";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import ClothDecModal from "./ClothDecModal";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";

interface PartyData {
  ptycode: number;
  Ptyname: string;
  E_mail: string;
  Phone1?: string;
  GSTNO: number;
  Add1?: string;
  Pincode?: string;
  State?: string;
  AccountName?: string;
  IFSC?: string;
  BankName?: string;
  clotDesc?: string;
  Branch?: string;
  DetailId?: number;
}

function ClothDec() {
  const [partiesData, setPartiesData] = useState<PartyData[]>([]);
  const [filteredData, setFilteredData] = useState<PartyData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [openDelete, setOpenDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPartyCode, setSelectedPartyCode] = useState<number | null>(
    null
  );
  const [modalData, setModalData] = useState<PartyData | null>(null);

  const handleClickOpenDelete = (ptycode: number) => {
    setSelectedPartyCode(ptycode);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleOpenModal = (party?: PartyData) => {
    setModalData(party || null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalData(null);
  };

  const handleDelete = () => {
    if (selectedPartyCode === null) return;

    deleteClothDec(selectedPartyCode)
      .then((response) => {
        if (response?.success) {
          alert("Party deleted successfully.");
          getpartiesData();
        } else {
          alert("Failed to delete the party.");
        }
      })
      .catch((error) => {
        console.error("Error deleting party:", error);
        alert("An error occurred while deleting the party.");
      });
    handleCloseDelete();
  };

  const handleSubmitModal = (data: PartyData) => {
    if (modalData) {
      updateClothDec(data.DetailId, data)
        .then((response) => {
          if (response?.success) {
            alert("Party updated successfully.");
            getpartiesData();
          } else {
            alert("Failed to update the party.");
          }
        })
        .catch((error) => {
          console.error("Error updating party:", error);
          alert("An error occurred while updating the party.");
        });
    } else {
      postClothDec(data)
        .then((response) => {
          if (response) {
            alert("Party created successfully.");
            getpartiesData();
          } else {
            alert("Failed to create the party.");
          }
        })
        .catch((error) => {
          console.error("Error creating party:", error);
          alert("An error occurred while creating the party.");
        });
    }
    handleCloseModal();
  };

  const getpartiesData = () => {
    getClothDecs()
      .then((response) => {
        if (response && response.status === 200) {
          setPartiesData(response.data);
          setFilteredData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching parties data:", error);
      });
  };

  useEffect(() => {
    getpartiesData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentParties = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Fragment>
      <Col xl={12} className="mb-3 mt-2 text-end">
   
        <SpkButton      onClick={() => handleOpenModal()} Buttonvariant="primary" Customclass="me-0">
              <i className="ri-add-line me-1"></i> Create
            </SpkButton>
      </Col>

      <Col xl={12}>
        <div className="table-responsive">
          <SpkTablescomponent
            tableClass="text-nowrap table-bordered bg-primary"
            headerBgColor="#f8f9fa"
            header={[
              { title: "ID" },
              { title: "ClothDec" },
              { title: "Description" },
              { title: "Actions" },
            ]}
            totalItems={filteredData?.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
          >
            {currentParties.map((party: PartyData) => (
              <tr key={party.ptycode}>
                <th scope="row">{party.DetailId}</th>
                <td>{party.clotDesc}</td>
                <td>{party.clotDesc}</td>
                <td>
                  <div className="hstack gap-2 fs-15">
                    <Link
                      to=""
                      onClick={() => handleOpenModal(party)}
                      className="btn btn-icon btn-sm btn-info-light rounded-pill"
                    >
                      <i className="ri-edit-line"></i>
                    </Link>
                    <Link
                      to=""
                      onClick={() => handleClickOpenDelete(party.DetailId)}
                      className="btn btn-icon btn-sm btn-danger-light rounded-pill"
                    >
                      <i className="ri-delete-bin-line"></i>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </SpkTablescomponent>
        </div>
      </Col>
      <div
      className={`modal fade ${openDelete ? "show d-block" : ""}`}
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
              onClick={handleCloseDelete}
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this party?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCloseDelete}
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
      <ClothDecModal
        open={openModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        initialData={modalData}
      />
    </Fragment>
  );
}

export default ClothDec;
