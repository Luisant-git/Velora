import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  DataGrid,
  useGridApiRef,
  GridRowId,
  GridColDef,
} from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../theme";
import { getItems } from "../../../../api/items";
import { toast } from "react-toastify";

interface Row {
  id: number;
  itemCode?: string;
  itemName?: string;
  category?: string;
  color?: string;
  size?: string;
  hsnCode?: string;
  gstPercent?: number;
  qty?: number;
  mrp?: number | string;
  saleRate?: number | string;
  discType?: string;
  diskPersentage?: number | string;
  discAmount?: number | string;
  taxableAmount?: number | string;
  gstAmount?: number | string;
  netAmount?: number | string;
}

interface DataTableProps {
  rows: Row[];
  setRows: (rows: Row[]) => void;
  isReady: boolean;
  saleEntry: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setTotalAmount: (totalAmount: number) => void;
  setTotalQty: (totalQty: number) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  rows = [],
  setRows,
  isReady,
  saleEntry,
  handleInputChange,
  setTotalAmount,
  setTotalQty,
}) => {
  const apiRef = useGridApiRef();
  const barcodeInputRef = useRef<HTMLInputElement>(null); // Ref for the barcode input field
  const integerFields = ["qty", "GSM", "LL", "GG"];
  const [itemCodeSuggestions, setItemCodeSuggestions] = useState<
    { itemCode: string; itemName: string; category: string; size: string; color: string }[]
  >([]);
  const [barcodeInput, setBarcodeInput] = useState<string>("");
  const suggestionsRef = useRef<HTMLUListElement>(null); // Ref for the suggestions list

  // Calculate total quantity and total amount
  const totalQty = rows.reduce((sum, row) => sum + (row.qty || 0), 0);
  const totalAmount = rows
    .reduce((sum, row) => sum + parseFloat(row.netAmount?.toString() || "0"), 0)
    .toFixed(0);
  useEffect(() => {
    setTotalQty(totalQty);
    setTotalAmount(parseFloat(totalAmount));
  }, [rows, setTotalQty, setTotalAmount]);

  useEffect(() => {
    if (isReady && barcodeInputRef.current) {
      setTimeout(() => {
        barcodeInputRef.current?.focus();
      }, 100);
    }
  }, [isReady]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setItemCodeSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const calculateNetAmount = (row: Row) => {
    const qty = parseFloat(row.qty?.toString() || "0");
    const saleRate = parseFloat(row.saleRate?.toString() || "0");
    const gstPercent = parseFloat(row.gstPercent?.toString() || "0");
    const discountPercentage = parseFloat(
      row.diskPersentage?.toString() || "0"
    );

    const baseAmount = saleRate * qty;

    // Discount calculation
    const discAmount =
      row.discType === "%"
        ? (baseAmount * discountPercentage) / 100
        : parseFloat(row.discAmount?.toString() || "0");

    const taxableAmount = baseAmount - discAmount;
    const gstAmount = (taxableAmount * gstPercent) / 100;
    const netAmount = taxableAmount + gstAmount;

    return {
      ...row,
      discAmount: discAmount.toFixed(2),
      taxableAmount: taxableAmount.toFixed(2),
      gstAmount: gstAmount.toFixed(2),
      netAmount: netAmount.toFixed(2),
    };
  };

  // Update Net Amount for all rows
  const updateNetAmounts = (rows: Row[]) => {
    return rows.map((row) => calculateNetAmount(row));
  };

  // Handle barcode scan
  const handleBarcodeScan = async (barcode: any) => {
    try {
      const response = await getItems();
      if (response) {
        const item = response.data.data.find(
          (item: { itemCode: string }) =>
            item.itemCode.replace(/\s+/g, "").toLowerCase() ===
            barcode.replace(/\s+/g, "").toLowerCase()
        );
        if (item) {
          if (!item.active) {
            toast.info("Item is inactive", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            return;
          }
          const existingRow = Array.isArray(rows)
            ? rows.find(
                (row) =>
                  (row.itemCode?.replace(/\s+/g, "").toLowerCase() ?? "") ===
                  item.itemCode.replace(/\s+/g, "").toLowerCase()
              )
            : undefined;
          if (existingRow) {
            const updatedRows = rows.map((row) =>
              (row.itemCode ?? "").replace(/\s+/g, "").toLowerCase() ===
              item.itemCode.replace(/\s+/g, "").toLowerCase()
                ? { ...row, qty: Number(row.qty || 0) + 1 }
                : row
            );
            setRows(updateNetAmounts(updatedRows));
          } else {
            const newRow = {
              id: rows.length ? Math.max(...rows.map((row) => row.id)) + 1 : 1,
              itemid: item.id,
              itemCode: item.itemCode,
              itemName: item.itemName,
              category: item.category,
              color: item.color,
              size: item.size,
              hsnCode: item.hsnCode,
              gstPercent: item.gstPercent,
              qty: 1,
              mrp: 0,
              saleRate: 0,
              discType: "%",
              diskPersentage: "0",
              discAmount: "",
              taxableAmount: "",
              gstAmount: "",
              netAmount: "",
              bar_qr_code_No: "",
            };
            setRows([
              ...updateNetAmounts(rows),
              calculateNetAmount(newRow) as Row,
            ]);
          }
        } else {
          toast.info("Item not matching", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      }
    } catch (error) {
      console.error("Error fetching items data:", error);
      toast.error("Error fetching item data", {
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
  };

  // Handle cell edit commit
  const handleCellEditCommit = ({
    id,
    field,
    value,
  }: {
    id: GridRowId;
    field: string;
    value: any;
  }) => {
    if (integerFields.includes(field)) {
      const parsedValue = Number(value);
      if (isNaN(parsedValue) || !Number.isInteger(parsedValue)) {
        alert(`Please enter a valid integer for the ${field} field.`);
        return;
      }
      value = parsedValue;
    }
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return calculateNetAmount({ ...row, [field]: value });
      }
      return row;
    });
    setRows(updatedRows);
  };

  // Fetch item code suggestions
  const fetchItemCodeSuggestions = async (query: string) => {
    try {
      const response = await getItems();
      if (response) {
        const suggestions = response.data.data
          .filter(
            (item: {
              itemCode: string;
              itemName: string;
              category: string;
              size: string;
              color: string;
              active: boolean;
            }) =>
              item.active &&
              (item.itemCode.toLowerCase().includes(query.toLowerCase()) ||
                item.itemName.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase()) ||
                item.size.toLowerCase().includes(query.toLowerCase()) ||
                item.color.toLowerCase().includes(query.toLowerCase()))
          )
          .map(
            (item: {
              itemCode: string;
              itemName: string;
              category: string;
              size: string;
              color: string;
            }) => ({
              itemCode: item.itemCode,
              itemName: item.itemName,
              category: item.category,
              size: item.size,
              color: item.color,
            })
          );
        setItemCodeSuggestions(suggestions);
      }
    } catch (error) {
      console.error("Error fetching item code suggestions:", error);
    }
  };

  // Handle barcode input change
  const handleBarcodeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBarcodeInput(value);
    if (value) {
      fetchItemCodeSuggestions(value);
    } else {
      setItemCodeSuggestions([]);
    }
  };

  // Handle barcode input key down
  const handleBarcodeInputKeyDown = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      const barcode = barcodeInput.trim();
      if (barcode) {
        await handleBarcodeScan(barcode);
        setBarcodeInput("");
        setItemCodeSuggestions([]);
      }
    }
  };
  const handleDeleteRow = (id: number) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };
  // Columns definition
  const columns: GridColDef<Row>[] = useMemo(
    () => [
      // {
      //   field: "id",
      //   headerClassName: "custom-header",
      //   headerName: "S.NO",
      //   width: 100,
      // },
      {
        field: "itemCode",
        headerClassName: "custom-header",
        headerName: "ITEM CODE",
        width: 100,
        editable: false,
      },
      {
        field: "itemName",
        headerClassName: "custom-header",
        headerName: "ITEM NAME",
        width: 100,
        editable: false,
      },
      {
        field: "category",
        headerClassName: "custom-header",
        headerName: "CATEGORY",
        width: 100,
        editable: false,
      },
      {
        field: "color",
        headerClassName: "custom-header",
        headerName: "COLOR",
        width: 100,
        editable: false,
      },
      {
        field: "size",
        headerClassName: "custom-header",
        headerName: "SIZE",
        width: 100,
        editable: false,
      },
      {
        field: "hsnCode",
        headerClassName: "custom-header",
        headerName: "HSN CODE",
        width: 100,
        editable: false,
        type: "number",
      },
      {
        field: "gstPercent",
        headerClassName: "custom-header",
        headerName: "GST %",
        width: 100,
        editable: true,
      },
      {
        field: "qty",
        headerClassName: "custom-header",
        headerName: "QTY",
        width: 100,
        editable: true,
        type: "number",
      },
      {
        field: "mrp",
        headerClassName: "custom-header",
        headerName: "MRP",
        width: 100,
        editable: true,
        type: "number",
      },
      {
        field: "saleRate",
        headerClassName: "custom-header",
        headerName: "S RATE",
        width: 100,
        editable: true,
        type: "number",
      },
      {
        field: "discType",
        headerClassName: "custom-header",
        headerName: "DISCOUNT TYPE",
        width: 100,
        editable: true,
        type: "singleSelect",
        valueOptions: ["%", "₹"],
      },
      {
        field: "diskPersentage",
        headerClassName: "custom-header",
        headerName: "DISCOUNT %",
        width: 100,
        editable: true,
        type: "number",
      },
      {
        field: "discAmount",
        headerClassName: "custom-header",
        headerName: "DISCOUNT AMOUNT",
        width: 100,
        editable: true,
        type: "number",
      },
      {
        field: "taxableAmount",
        headerClassName: "custom-header",
        headerName: "TAXABLE AMOUNT",
        width: 100,
        editable: false,
        type: "number",
      },
      {
        field: "gstAmount",
        headerClassName: "custom-header",
        headerName: "GST AMOUNT",
        width: 100,
        editable: false,
        type: "number",
      },
      {
        field: "netAmount",
        headerClassName: "custom-header",
        headerName: "NET AMOUNT",
        width: 130,
        editable: false,
        type: "number",
      },
      {
        field: "actions",
        headerClassName: "custom-header",
        headerName: "ACTIONS",
        width: 100,
        renderCell: (params) => (
          <button
            onClick={() => handleDeleteRow(params.row.id)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            🗑️
          </button>
        ),
      },
    ],
    [rows]
  );

  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={12}>
        <Grid item xs={12} sm={12}>
          <div className="position-relative">
            <input
              ref={barcodeInputRef}
              name="barcode"
              placeholder="Scan/Search product by barcode"
              className="form-control border-2 border-primary italic fs-5 fw-2 mb-3"
              style={{ height: "50px", backgroundColor: "#FFF0BD" }}
              value={barcodeInput}
              onChange={handleBarcodeInputChange}
              onKeyDown={handleBarcodeInputKeyDown}
            />
            {itemCodeSuggestions.length > 0 && (
              <ul
                ref={suggestionsRef}
                className="list-group position-absolute w-50 border shadow rounded-0"
                style={{ zIndex: 1000, maxHeight: "700px", overflowY: "auto" }}
              >
                {itemCodeSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-action border"
                    onClick={async () => {
                      await handleBarcodeScan(suggestion.itemCode);
                      setBarcodeInput("");
                      setItemCodeSuggestions([]);
                    }}
                  >
                    <span>{suggestion.itemCode}</span>/
                    <span>{suggestion.itemName}</span> /
                    <span>{suggestion.category}</span> /
                    <span>{suggestion.size}</span>/
                    <span>{suggestion.color}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Grid>
      </Grid>
      <div style={{ height: "400px", width: "100%" }} className="mb-2">
        <DataGrid
          rows={rows}
          columns={columns}
          apiRef={apiRef}
          disableColumnSorting
          processRowUpdate={(newRow: Row) => {
            const updatedRows = rows.map((row) => {
              if (row.id === newRow.id) {
                // Validation logic for discount type
                if (newRow.discType === "%") {
                  newRow.discAmount = ""; // Clear the amount field if % is selected
                } else if (newRow.discType === "₹") {
                  newRow.diskPersentage = ""; // Clear the percentage field if ₹ is selected
                }
                return calculateNetAmount({ ...row, ...newRow });
              }
              return row;
            });
            setRows(updatedRows);
            return calculateNetAmount(newRow);
          }}
          disableRowSelectionOnClick
          pageSizeOptions={[5]}
          disableColumnMenu
          sortingOrder={["asc", "desc"]}
          pagination
          sx={{
            height: "400px",
            "& .MuiDataGrid-cell": {
              fontSize: "0.80rem",
            },
            "& .custom-header": {
              backgroundColor: "#F58B0F !important",
              color: "black !important",
              fontSize: "0.70rem !important",
              textAlign: "center",
              border: "1px solid rgb(255, 255, 255)",
              height: "35px !important",
            },
          }}
        />
      </div>
      <Grid container spacing={1} mt={1}>
        <Grid item xs={12} sm={3}>
          <input
            name="Remarks"
            placeholder="Remarks (optional)"
            className="form-control border-2 border-success text-dark italic  fs-6 fw-6 mb-3 "
            style={{ height: "40px" }}
            value={saleEntry.Remarks}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <input
            name="Total Qty"
            placeholder="Total Qty"
            className="form-control border-2 border-success text-white italic fs-4 fw-6 mb-3"
            disabled
            style={{ height: "40px", backgroundColor: "green" }}
            value={`Total Qty :  ${parseFloat(totalQty.toString()).toFixed(0)}`}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <input
            name="Total Amount"
            placeholder="Total Amount"
            className="form-control border-2 border-success text-white italic fs-4 fw-1 mb-3 "
            disabled
            style={{ height: "40px", backgroundColor: "green" }}
            value={`Total Payable: ₹ ${parseFloat(totalAmount).toFixed(2)}`}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default DataTable;
