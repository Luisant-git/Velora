import React, { useState, useRef, useEffect } from "react";
import {
  DataGrid,
  useGridApiRef,
  GridCellParams,
  GridRowId,
} from "@mui/x-data-grid";
import { Button, IconButton, Autocomplete, TextField } from "@mui/material";
import { Delete, Add } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import { getClothDecs } from "../../api/clothdec";
import { getColors } from "../../api/color";
import { getUom } from "../../api/uom";
import { getDias } from "../../api/dia";
import theme from "../../theme";

interface Row {
  id: number;
  count?: number | string;
  clothdes?: string|number;
  Dia_Id?: string|number;
  combo?: string;
  GSM?: number | string;
  LL?: number | string;
  GG?: number | string;
  Rate?: number | string;
  SampleRate?: number | string;
  Color_id: String|number;
  CRate?: number | string;
  CSampleRate?: number | string;
  Uom_Id?: string;
  Remarks?: string;
  color?: string;
  uom?: string;
  dia?: string;
}

interface DataTableProps {
  rows: Row[];
  setRows: (rows: Row[]) => void;
}

const DataTable: React.FC<DataTableProps> = ({ rows, setRows }) => {
  const [focusedCell, setFocusedCell] = useState({ rowIndex: 0, colIndex: 1 });
  const gridRef = useRef<HTMLDivElement>(null);
  const apiRef = useGridApiRef();
  const integerFields = ["count", "GSM", "LL", "GG"];
  const [clothDecs, setClothDecs] = useState<
    { id: string; clotDesc: string }[]
  >([]);
  const [colors, setColors] = useState<{
    Color: string; id: string; clotDesc: string 
}[]>([]);
  const [dias, setDias] = useState<{
    Dia: string; id: string; clotDesc: string 
}[]>([]);
  const [uoms, setUoms] = useState<{ id: string; Uom: string }[]>([]);

  console.log(colors, dias, uoms, clothDecs);

  // Fetch cloth descriptions
  const getClothDec = () => {
    getClothDecs()
      .then((response) => {
        if (response && response.status === 200) {
          setClothDecs(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching cloth descriptions:", error);
      });
  };

  const getColor = () => {
    getColors()
      .then((response) => {
        if (response && response.status === 200) {
          setColors(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching colors:", error);
      });
  };

  const getUoms = () => {
    getUom()
      .then((response) => {
        if (response && response.status === 200) {
          setUoms(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching UOMs:", error);
      });
  };

  const getDia = () => {
    getDias()
      .then((response) => {
        if (response && response.status === 200) {
          setDias(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching dias:", error);
      });
  };

  useEffect(() => {
    getClothDec();
    getUoms();
    getColor();
    getDia();
  }, []);

  const columns = [
    { field: "id", headerName: "ID",   headerClassName: "custom-header", width: 60 },
    { field: "count", headerName: "Count", width: 100, editable: true ,  headerClassName: "custom-header",},
    {
      field: "Color_id",
      headerName: "Color",
      headerClassName: "custom-header",
      width: 140,
      editable: true,
      renderEditCell: (params: GridCellParams) => {
        const value = params.value || "";
        return (
          <Autocomplete
            sx={{ mt: 3 }}
            options={colors}
            getOptionLabel={(option) => option.Color}
            value={colors.find((color) => color.Color === value) || null}
            onChange={(_event, newValue) => {
              params.api.setEditCellValue({
                id: params.id,
                field: "Color_id",
                value: newValue?.Color || "",
              });
            }}
            renderInput={(props) => <TextField {...props} variant="standard" />}
            size="small"
            fullWidth
          />
        );
      },
    },
    { field: "combo", headerName: "combo", width: 140, editable: true,  headerClassName: "custom-header", },
    {
      field: "Dia_Id",
      headerName: "Dia ID",
      headerClassName: "custom-header",
      width: 120,
      editable: true,
      renderEditCell: (params: GridCellParams) => {
        const value = params.value || "";
        return (
          <Autocomplete
            sx={{ mt: 3 }}
            options={dias}
            getOptionLabel={(option) => option.Dia}
            value={dias.find((dia) => dia.Dia === value) || null}
            onChange={(_event, newValue) => {
              params.api.setEditCellValue({
                id: params.id,
                field: "Dia_Id",
                value: newValue?.Dia || "",
              });
            }}
            renderInput={(props) => <TextField {...props} variant="standard" />}
            size="small"
            fullWidth
          />
        );
      },
    },
    {
      field: "clothdes",
      headerName: "Cloth Description",
      headerClassName: "custom-header",
      width: 150,
      editable: true,
      renderEditCell: (params: GridCellParams) => {
        const value = params.value || "";
        return (
          <Autocomplete
            sx={{ mt: 3 }}
            options={clothDecs}
            getOptionLabel={(option) => option.clotDesc}
            value={clothDecs.find((cloth) => cloth.clotDesc === value) || null}
            onChange={(_event, newValue) => {
              params.api.setEditCellValue({
                id: params.id,
                field: "clothdes",
                value: newValue?.clotDesc || "",
              });
            }}
            renderInput={(props) => <TextField {...props} variant="standard" />}
            size="small"
            fullWidth
          />
        );
      },
    },
    { field: "GSM", headerName: "GSM", width: 80, editable: true,  headerClassName: "custom-header", },
    { field: "LL", headerName: "LL", width: 100, editable: true ,  headerClassName: "custom-header",},
    { field: "GG", headerName: "GG", width: 100, editable: true,  headerClassName: "custom-header", },
    { field: "Rate", headerName: "Rate", width: 90, editable: true ,  headerClassName: "custom-header",},
    {
      field: "SampleRate",
      headerName: "Sample Rate",
      width: 130,
      editable: true,
      headerClassName: "custom-header",
    },
    { field: "CRate", headerName: "C Rate", width: 100, editable: true,  headerClassName: "custom-header", },
    {
      field: "CSampleRate",
      headerName: "C Sample Rate",
      width: 130,
      editable: true,
      headerClassName: "custom-header",
    },
    {
      field: "Uom_Id",
      headerName: "UOM ID",
      width: 110,
      editable: true,
      headerClassName: "custom-header",
      renderEditCell: (params: GridCellParams) => {
        const value = params.value || "";
        return (
          <Autocomplete
            sx={{ mt: 3 }}
            options={uoms}
            getOptionLabel={(option) => option.Uom}
            value={uoms.find((uom) => uom.Uom === value) || null}
            onChange={(_event, newValue) => {
              params.api.setEditCellValue({
                id: params.id,
                field: "Uom_Id",
                value: newValue?.Uom || "",
              });
            }}
            renderInput={(props) => <TextField {...props} variant="standard" />}
            size="small"
            fullWidth
          />
        );
      },
    },
    { field: "Remarks",  headerClassName: "custom-header", headerName: "Remarks", width: 160, editable: true },
    {
      field: "copy",
      headerName: "Copy Row",
      headerClassName: "custom-header",
      width: 80,
      renderCell: () => (
        <IconButton
          onClick={() => addRow()}
          aria-label="Add Row"
          size="small"
        >
          <Add />
        </IconButton>
      ),
    },
    {
      field: "delete",
      headerClassName: "custom-header",
      headerName: "Delete",
      width: 80,
      renderCell: (params: GridCellParams) => (
        <IconButton
          onClick={() => deleteRow(params.id as GridRowId)}
          aria-label="Delete Row"
          size="small"
        >
          <Delete />
        </IconButton>
      ),
    },
  ];

  const addRow = () => {
    const newId = rows.length ? Math.max(...rows.map((row) => row.id)) + 1 : 1;
    const newRow = {
      id: newId,
      count: "",
      clothdes: "",
      Dia_Id: "",
      combo: "",
      GSM: "",
      LL: "",
      GG: "",
      Rate: "",
      SampleRate: "",
      Color_id: "",
      CRate: "",
      CSampleRate: "",
      Uom_Id: "",
      Remarks: "",
      color: "",
      uom: "",
      dia: "",
    };
    const updatedRows = [...rows, newRow];
    setRows(updatedRows);
    setTimeout(() => {
      if (apiRef.current) {
        apiRef.current.setCellFocus(newId, "count");
      }
    }, 10);
  };

  const deleteRow = (id: GridRowId) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
    if (focusedCell.rowIndex >= updatedRows.length) {
      setFocusedCell({
        rowIndex: Math.max(0, updatedRows.length - 1),
        colIndex: 1,
      });
    }
  };

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
        return { ...row, [field]: value };
      }
      return row;
    });
    setRows(updatedRows);
  };



  return (
    <ThemeProvider theme={theme}>
      {rows.length === 0 && (
        <Button
          component="button"
          onClick={() => addRow()}
          onKeyDown={(e) => e.key === "Enter" && addRow()}
          tabIndex={0}
          size="small"
        >
          Add Row
        </Button>
      )}
      <div style={{ height: "400px", width: "100%" }} ref={gridRef}>
        <DataGrid
          rows={rows}
          columns={columns}
          apiRef={apiRef}
          onCellEditCommit={handleCellEditCommit}
          processRowUpdate={(newRow: Row) => {
            const updatedRows = rows.map((row) =>
              row.id === newRow.id ? { ...row, ...newRow } : row
            );
            setRows(updatedRows);
            return newRow;
          }}
          disableColumnMenu
          disableColumnSorting
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
          disableSelectionOnClick
                 
          pageSizeOptions={[5]}
          pagination
          
        />
      </div>
    </ThemeProvider>
  );
};

export default DataTable;
