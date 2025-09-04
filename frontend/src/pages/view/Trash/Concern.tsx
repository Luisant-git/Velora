import { Fragment, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import {
  getDeletedConcernMaster,
  restoreConcernMaster,
} from "../../../api/concern";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import ItemSkeleton from "../../../components/skeleton/Skeleton";

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

function ConcernTrash() {
  const [filteredData, setFilteredData] = useState<ConcernMasterData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [openRestore, setOpenRestore] = useState(false);
  const [selectedHeaderId, setSelectedHeaderId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [restoreLoading, setRestoreLoading] = useState(false);

  const handleClickOpenRestore = (headerId: number) => {
    setSelectedHeaderId(headerId);
    setOpenRestore(true);
  };

  const handleCloseRestore = () => {
    setOpenRestore(false);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleRestore = () => {
    if (selectedHeaderId === null) return;
    setRestoreLoading(true);

    restoreConcernMaster(selectedHeaderId)
      .then((response: { success: any; }) => {
        if (response?.success) {
          toast.success("Concern restored successfully", {
            autoClose: 1000,
          });
          getDeletedConcerns();
        } else {
          toast.error("Error While Restoring", { autoClose: 1000 });
        }
      })
      .catch((error: any) => {
        console.error("Error restoring Concern:", error);
        toast.error("Error While Restoring", { autoClose: 1000 });
      })
      .finally(() => {
        setRestoreLoading(false);
        handleCloseRestore();
      });
  };

  const getDeletedConcerns = () => {
    setLoading(true);
    getDeletedConcernMaster()
      .then((response: { status: number; data: any[]; }) => {
        if (response && response.status === 200) {
          // Show only deleted concerns (Delete_flg === 1)
          const deletedConcerns = response.data.filter(
            (concern: ConcernMasterData) => concern.Delete_flg === 1
          );
          setFilteredData(deletedConcerns);
        }
      })
      .catch((error: any) => {
        console.error("Error fetching deleted Concerns:", error);
        toast.error("Failed to fetch deleted Concerns.", { autoClose: 3000 });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getDeletedConcerns();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentConcerns = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Fragment>
      <Col xl={12}>
        {loading ? (
          <ItemSkeleton
            columns={["ID", "Concern Name", "Legal Name", "Address", "Mobile No", "Status", "Actions"]}
            actionsCount={1}
          />
        ) : (
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
                { title: "Status" },
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
                    <span className="badge bg-danger">Deleted</span>
                  </td>
                  <td>
                    <div className="hstack gap-2 fs-15">
                      <button
                        onClick={() =>
                          concern.HeaderId !== undefined &&
                          handleClickOpenRestore(concern.HeaderId)
                        }
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
        )}
      </Col>

      <div
        className={`modal fade ${openRestore ? "show d-block" : ""}`}
        tabIndex={-1}
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Restore Concern</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleCloseRestore}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to restore this Concern?</p>
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
  );
}

export default ConcernTrash;