import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import ConcernMasterModel from "./ConcernMasterModel";
import {
  deleteConcernMaster,
  getConcernMasters,
  postConcernMaster,
  updateConcernMaster,
} from "../../../../api/concern";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import ItemSkeleton from "../../../../components/skeleton/Skeleton";

interface ConcernMasterData {
  HeaderId?: number;
  Concern_Name: string;
  LegalName: string;
  Address: string;
  MobileNo: string;
  PhoneNo: string;
  EmailId: string;
  GSTNo: string;
  PanNo: string;
  State: string;
  StateCode: number;
  BankName: string;
  AccountNo: string;
  Branch: string;
  IFSCCode: string;
  Delete_flg: number;
  IsRunning: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}

function ConcernMaster() {
  const [filteredData, setFilteredData] = useState<ConcernMasterData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [openDelete, setOpenDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedHeaderId, setSelectedHeaderId] = useState<number | null>(null);
  const [modalData, setModalData] = useState<ConcernMasterData | null>(null);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleClickOpenDelete = (headerId: number) => {
    setSelectedHeaderId(headerId);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleOpenModal = (concernMaster?: ConcernMasterData) => {
    setModalData(concernMaster || null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalData(null);
  };

  const handleDelete = () => {
    if (selectedHeaderId === null) return;
    setDeleteLoading(true);

    deleteConcernMaster(selectedHeaderId)
      .then((response) => {
        if (response?.success) {
          toast.success("Concern moved to trash successfully", {
            autoClose: 1000,
          });
          getConcernMasterData();
        } else {
          toast.error("Error While Moving to Trash", { autoClose: 1000 });
        }
      })
      .catch((error) => {
        console.error("Error deleting Concern Master:", error);
        toast.error("Error While Moving to Trash", { autoClose: 1000 });
      })
      .finally(() => {
        setDeleteLoading(false);
        handleCloseDelete();
      });
  };

  const handleSubmitModal = (data: ConcernMasterData) => {
    setLoading(true);
    if (modalData) {
      updateConcernMaster(modalData.HeaderId, data)
        .then((response) => {
          if (response?.success) {
            toast.success("Concern Master Updated Successfully", {
              autoClose: 1000,
            });
            getConcernMasterData();
          }
        })
        .catch((error) => {
          console.error("Error updating Concern Master:", error);
          toast.error("Error updating Concern Master", { autoClose: 1000 });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      postConcernMaster(data)
        .then((response) => {
          if (response) {
            toast.success("Concern Master created successfully.", {
              autoClose: 1000,
            });
            getConcernMasterData();
          }
        })
        .catch((error) => {
          console.error("Error creating Concern Master:", error);
          toast.error("Error creating Concern Master", { autoClose: 1000 });
        })
        .finally(() => {
          setLoading(false);
        });
    }
    handleCloseModal();
  };

  const getConcernMasterData = () => {
    setLoading(true);
    getConcernMasters()
      .then((response) => {
        if (response && response.status === 200) {
          // Filter out deleted concerns (Delete_flg !== 1)
          const activeConcerns = response.data.filter(
            (concern: ConcernMasterData) => concern.Delete_flg !== 1
          );
          setFilteredData(activeConcerns);
        }
      })
      .catch((error) => {
        console.error("Error fetching Concern Master data:", error);
        toast.error("Failed to fetch Concern Master data.", { autoClose: 3000 });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getConcernMasterData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentConcerns = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Fragment>
      <Col xl={12} className="mb-3 mt-2 text-end">
        <SpkButton
          onClick={() => handleOpenModal()}
          Buttonvariant="primary"
          Customclass="me-0"
        >
          <i className="ri-add-line me-1"></i> Create
        </SpkButton>
      </Col>
      {loading ? (
        <ItemSkeleton
          columns={["ID", "Concern Name", "Legal Name", "Address", "Mobile No", "Actions"]}
          actionsCount={2}
        />
      ) : (
        <Col xl={12}>
          <div className="table-responsive">
            <SpkTablescomponent
              tableClass="text-nowrap table-bordered bg-primary"
              headerBgColor="#f8f9fa"
              header={[
                { title: "ID" },
                { title: "Concern Name" },
                { title: "Legal Name" },
                { title: "Address" },
                { title: "Mobile No" },
                { title: "Actions" },
              ]}
              totalItems={filteredData?.length}
              onPageChange={handlePageChange}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
            >
              {currentConcerns.map((concern: ConcernMasterData) => (
                <tr key={concern.HeaderId}>
                  <th scope="row">{concern.HeaderId}</th>
                  <td>{concern.Concern_Name}</td>
                  <td>{concern.LegalName}</td>
                  <td>{concern.Address}</td>
                  <td>{concern.MobileNo}</td>
                  <td>
                    <div className="hstack gap-2 fs-15">
                      <Link
                        to=""
                        onClick={() => handleOpenModal(concern)}
                        className="btn btn-icon btn-sm btn-info-light rounded-pill"
                      >
                        <i className="ri-edit-line"></i>
                      </Link>
                      <Link
                        to=""
                        onClick={() =>
                          concern.HeaderId !== undefined &&
                          handleClickOpenDelete(concern.HeaderId)
                        }
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
      )}

      <div
        className={`modal fade ${openDelete ? "show d-block" : ""}`}
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
                onClick={handleCloseDelete}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to move this Concern to trash?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseDelete}
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
      <ConcernMasterModel
        open={openModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        initialData={modalData}
      />
    </Fragment>
  );
}

export default ConcernMaster;