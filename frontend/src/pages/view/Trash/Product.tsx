import { Fragment, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import {
  getDeletedItems,
  restoreItems,
} from "../../../api/items";
import { toast } from "react-toastify";
import ItemSkeleton from "../../../components/skeleton/Skeleton";
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
}

function ProductTrash() {
  const [filteredData, setFilteredData] = useState<ItemData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [openRestore, setOpenRestore] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [restoreLoading, setRestoreLoading] = useState(false);

  const handleClickOpenRestore = (id: number) => {
    setSelectedItemId(id);
    setOpenRestore(true);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleCloseRestore = () => {
    setOpenRestore(false);
  };

  const handleRestore = () => {
    if (selectedItemId === null) return;
    setRestoreLoading(true);

    restoreItems(selectedItemId)
      .then((response: { success: any; }) => {
        if (response?.success) {
          toast.success("Item restored successfully");
          fetchDeletedItems();
        } else {
          toast.error("Cannot restore this item. Contact the admin.");
        }
      })
      .catch((error: any) => {
        console.error("Error restoring item:", error);
        toast.error("Cannot restore this item. Contact the admin.");
      })
      .finally(() => {
        setRestoreLoading(false);
        handleCloseRestore();
      });
  };

  const fetchDeletedItems = () => {
    setLoading(true);
    getDeletedItems()
      .then((response: { status: number; data: { data: any[]; }; }) => {
        if (response && response.status === 200) {
          // Show only deleted items (Delete_flg === 1)
          const deletedItems = response.data.data.filter((item: ItemData) => 
            item.Delete_flg === 1
          );
          setFilteredData(deletedItems);
        }
      })
      .catch((error: any) => {
        console.error("Error fetching deleted items:", error);
        toast.error("Error fetching deleted items");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDeletedItems();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Fragment>
      <Col xl={12}>
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
              "STATUS",
              "ACTIONS",
            ]}
            actionsCount={1}
          />
        ) : (
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
                { title: "STATUS" },
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
                    <span className="badge bg-danger">Deleted</span>
                  </td>
                  <td>
                    <div className="hstack gap-2 fs-15">
                      <button
                        onClick={() =>
                          item.id !== undefined &&
                          handleClickOpenRestore(item.id)
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
              <h5 className="modal-title">Restore Item</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleCloseRestore}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to restore this item?</p>
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

export default ProductTrash;