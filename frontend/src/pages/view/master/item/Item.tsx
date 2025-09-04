import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import ItemModel from "./ItemModel";
import {
  deleteItem,
  getItems,
  postItem,
  updateItem,
} from "../../../../api/items";
import { toast } from "react-toastify";
import ItemSkeleton from "../../../../components/skeleton/Skeleton";
import { CircularProgress } from "@mui/material";

interface ItemData {
  id?: number;
  color: string;
  size?: string;
  hsnCode?: string;
  category?: string;
  itemName?: string;
  itemCode?: string;
  gstPercent?: number;
  active?: boolean;
  Delete_flg?: number;
  Cate_AliasName?: string;
  Item_AliasName?: string;
  Color_AliasName?: string;
  Size_AliasName?: string;
}

function Item() {
  const [filteredData, setFilteredData] = useState<ItemData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [openDelete, setOpenDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [modalData, setModalData] = useState<ItemData | null>(null);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleClickOpenDelete = (id: number) => {
    setSelectedItemId(id);
    setOpenDelete(true);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleOpenModal = (item?: ItemData) => {
    setModalData(item || null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalData(null);
  };

  const handleDelete = () => {
    if (selectedItemId === null) return;
    setDeleteLoading(true);

    deleteItem(selectedItemId)
      .then((response) => {
        if (response) {
          toast.warning("Item moved to trash successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          fetchItems();
        } else {
          toast.error("Cannot delete this item. Contact the admin.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
        toast.error("Cannot delete this item. Contact the admin.", {
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
        setDeleteLoading(false);
        handleCloseDelete();
      });
  };

  const handleSubmitModal = (data: ItemData) => {
    setSubmitLoading(true);
    const { id, ...payload } = data;

    const apiCall = modalData 
      ? updateItem(id, payload)
      : postItem(payload);

    apiCall
      .then((response) => {
        if (response?.success || response) {
          toast.success(modalData ? "Item Updated successfully" : "Item added successfully");
          fetchItems();
          handleCloseModal();
        } else {
          toast.error(modalData ? "Error Updating Item" : "Error Adding Item");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // toast.error(modalData ? "Error Updating Item" : "Error Adding Item");
      })
      .finally(() => {
        setSubmitLoading(false);
      });
  };

  const fetchItems = () => {
    setLoading(true);
    getItems()
      .then((response) => {
        if (response && response.status === 200) {
          const activeItems = response.data.data.filter((item: ItemData) => 
            item.Delete_flg !== 1
          );
          setFilteredData(activeItems);
        }
      })
      .catch((error) => {
        console.error("Error fetching items data:", error);
        toast.error("Error fetching items");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
          columns={[
            "ITEM CODE",
            "ITEM NAME",
            "CATEGORY",
            "HSN CODE",
            "SIZE",
            "COLOR",
            "GST %",
            "ACTIVE",
            "ACTIONS",
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
                { title: "ITEM CODE" },
                { title: "ITEM NAME" },
                { title: "CATEGORY" },
                { title: "HSN CODE" },
                { title: "SIZE" },
                { title: "COLOR" },
                { title: "GST %" },
                { title: "ACTIVE" },
                { title: "ACTIONS" },
              ]}
              totalItems={filteredData?.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            >
              {currentItems.map((item: ItemData) => (
                <tr key={item.id}>
                  <td>{item.itemCode}</td>
                  <td>{item.itemName}</td>
                  <td>{item.category}</td>
                  <td>{item.hsnCode}</td>
                  <td>{item.size}</td>
                  <td>{item.color}</td>
                  <td>{item.gstPercent}%</td>
                  <td>
                    {item.active ? (
                      <span className="badge bg-success">Active</span>
                    ) : (
                      <span className="badge bg-secondary">Inactive</span>
                    )}
                  </td>
                  <td>
                    <div className="hstack gap-2 fs-15">
                      <Link
                        to=""
                        onClick={() => handleOpenModal(item)}
                        className="btn btn-icon btn-sm btn-info-light rounded-pill"
                      >
                        <i className="ri-edit-line"></i>
                      </Link>
                      <Link
                        to=""
                        onClick={() =>
                          item.id !== undefined &&
                          handleClickOpenDelete(item.id)
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
                disabled={deleteLoading}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to move this item to trash?</p>
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
      <ItemModel
        open={openModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        initialData={modalData}
        loading={submitLoading}
      />
    </Fragment>
  );
}

export default Item;