import { Fragment } from "react";
import SpkBreadcrumb from "../../@spk-reusable-components/reusable-uielements/spk-breadcrumb";
import { Link } from "react-router-dom";
import SpkButton from "../../@spk-reusable-components/reusable-uielements/spk-button";
import { InputAdornment, TextField } from "@mui/material";

interface PageheaderProps {
  title: string;
  subtitle?: string;
  currentpage: string;
  activepage: string;
  path: string;
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PageheaderQuotaion = (props: PageheaderProps) => {
  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between  flex-wrap mb-2 ">
        <div>
          <SpkBreadcrumb>
            <li className="breadcrumb-item">
              <Link to="#!">{props.title}</Link>
            </li>
            {props.subtitle && (
              <li className="breadcrumb-item">
                <Link to="#!">{props.subtitle}</Link>
              </li>
            )}
            <li className="breadcrumb-item active" aria-current="page">
              {props.currentpage}
            </li>
          </SpkBreadcrumb>
        </div>
        <div className="btn-list position-relative">
          <TextField
            label="Search..."
            variant="outlined"
            size="small"
            value={props.searchTerm}
            onChange={props.handleSearch}
            sx={{
              width: "250px",
              "& .MuiInputBase-root": { height: "32px" },
              "& .MuiInputBase-input::placeholder": { fontSize: "12px" }, // Reduce placeholder size
              "& .MuiInputLabel-root": { fontSize: "12px" }, // Reduce label size
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <i className="ri-search-line mt-2"></i>
                </InputAdornment>
              ),
            }}
          />

          <Link to={props.path}>
            <SpkButton Size="sm" Buttonvariant="primary" Customclass="me-0">
              <i className="ri-add-line me-1"></i> Create
            </SpkButton>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default PageheaderQuotaion;
