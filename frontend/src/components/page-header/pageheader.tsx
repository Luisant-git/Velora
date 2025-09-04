import { Fragment, useState } from "react";
import SpkBreadcrumb from "../../@spk-reusable-components/reusable-uielements/spk-breadcrumb";
import { Link } from "react-router-dom";
import SpkButton from "../../@spk-reusable-components/reusable-uielements/spk-button";

interface PageheaderProps {
  title: string;
  subtitle?: string;
  currentpage: string;
  activepage: string;
  path: string;
  onSearch?: (searchTerm: string) => void; // Callback for search
  onSort?: (sortOrder: "asc" | "desc") => void; // Callback for sorting
}

const Pageheader = (props: PageheaderProps) => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterClick = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen); // Toggle filter menu visibility
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (props.onSearch) {
      props.onSearch(e.target.value); // Trigger search callback
    }
  };

  const handleSort = (sortOrder: "asc" | "desc") => {
    if (props.onSort) {
      props.onSort(sortOrder);
    }
  };

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between  flex-wrap mb-2">
        <div>
          <SpkBreadcrumb Customclass="mb-1">
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
          {/* Filter Button */}
          <SpkButton Buttonvariant="white" onClick={handleFilterClick}>
            <i className="ri-filter-3-line align-middle me-1 lh-1"></i> Filter
          </SpkButton>

          {/* Filter Menu */}
          {isFilterMenuOpen && (
            <div className="filter-menu position-absolute bg-white p-2  shadow rounded mt-2">
              {/* Search Input */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>

              <div className="w-100 gap-2">
                <div className="bg-light p-2" onClick={() => handleSort("asc")}>
                  <i className="ri-arrow-up-double-line"></i>
                  Sort Asc
                </div>

                <div className="bg-light p-2" onClick={() => handleSort("desc")}>
                  <i className="ri-arrow-down-double-line"></i>
                  Sort Desc
                </div>
              </div>
            </div>
          )}

          {/* Create Button */}
          <Link to={props.path}>
            <SpkButton Buttonvariant="primary" Customclass="me-0">
              <i className="ri-add-line me-1"></i> Create
            </SpkButton>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Pageheader;
