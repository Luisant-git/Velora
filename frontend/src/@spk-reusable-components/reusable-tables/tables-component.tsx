import { Pagination } from "@mui/material";
import React, { Fragment } from "react";
import { Table } from "react-bootstrap";

interface HeaderItem {
  title: string | React.ReactNode;
  headerClassname?: string;
}

interface SpkTablesComponentProps {
  children?: React.ReactNode;
  tableClass?: string;
  header?: HeaderItem[];
  showCheckbox?: boolean;
  onCheckboxChange?: any; 
  headerClass?: string;
  footchildren?: React.ReactNode;
  footerClass?: string;
  Customcheckclass?: string;
  tBodyClass?: string;
  headerContent?: any;
  checked?: any;
  inputClass?: string;
  Bodytag?: boolean;
  totalItems?: number;
  itemsPerPage?: number;
  currentPage?: number;
  onPageChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
  headerBgColor?: string; 
}

const SpkTablescomponent: React.FC<SpkTablesComponentProps> = ({
  children,
  Bodytag = true,
  header,
  footerClass,
  footchildren,
  headerContent,
  tBodyClass,
  checked,
  showCheckbox = false,
  Customcheckclass,
  onCheckboxChange,
  totalItems = 0,
  itemsPerPage = 10,
  currentPage = 1,
  onPageChange,

}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Fragment>
      <Table striped className="table text-nowrap table-striped table-compact">
        {headerContent}
        <thead className="table-primary">
          <tr style={{ backgroundColor: "#6B76F8", color: "white" }}>
            {showCheckbox && (
              <th className={Customcheckclass}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkboxNoLabel02"
                  checked={checked}
                  aria-label="..."
                  onChange={onCheckboxChange}
                />
              </th>
            )}
            {header &&
              header.map((headerItem, index) => (
                <th  key={index} className="p-2">
                  {headerItem.title}
                </th>
              ))}
          </tr>
        </thead>
        {Bodytag ? <tbody className={tBodyClass}>{children}</tbody> : children}
        <tfoot className={footerClass}>{footchildren}</tfoot>
      </Table>
      <div className="d-flex justify-content-center mt-3">
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={onPageChange} 
        />
      </div>
    </Fragment>
  );
};

export default SpkTablescomponent;
