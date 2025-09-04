import { Fragment, useEffect, useRef, useState } from "react";
import { Dropdown, Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeChanger } from "../redux/store";
import store from "../redux/store";



const Header = ({ local_varaiable, ThemeChanger }: any) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleCloseLogout = () => setShowLogoutModal(false);
  const handleShowLogout = () => setShowLogoutModal(true);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const toggleFullscreen = () => {
    const element = document.documentElement;
    if (!document.fullscreenElement) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", fullscreenChangeHandler);
    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
    };
  }, []);

  const toggleSidebar = () => {
    const theme = store.getState();
    if (window.innerWidth >= 992) {
      ThemeChanger({
        ...theme,
        toggled: theme.toggled === "close-menu-close" ? "" : "close-menu-close",
      });
    } else {
      const newToggled = theme.toggled === "close" ? "open" : "close";
      ThemeChanger({
        ...theme,
        toggled: newToggled,
      });
      
      // Update DOM attribute for CSS
      document.documentElement.setAttribute('data-toggled', newToggled);
      
      // Handle overlay for mobile
      const overlay = document.querySelector('#responsive-overlay');
      if (newToggled === 'open' && overlay) {
        overlay.classList.add('active');
        overlay.addEventListener('click', () => {
          overlay.classList.remove('active');
          ThemeChanger({ ...theme, toggled: 'close' });
          document.documentElement.setAttribute('data-toggled', 'close');
        });
      } else if (overlay) {
        overlay.classList.remove('active');
      }
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Fragment>
      <header
        className="app-header sticky"
        id="header"
        style={{ height: "50px" }}
      >
        <div className="main-header-container container-fluid">
          <div className="header-content-left d-flex align-items-center">
            <div className="header-element d-block d-lg-none me-2">
              <Link
                aria-label="Hide Sidebar"
                onClick={() => toggleSidebar()}
                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                data-bs-toggle="sidebar"
                to="#!"
              >
                <span></span>
              </Link>
            </div>
            <div className="header-element">
              <div className="horizontal-logo">
                <Link
                  to="/dashboard"
                  className="header-logo"
                >
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#2196f3' }}>Velora Admin</span>
                </Link>
              </div>
            </div>
            <div className="header-element mx-lg-0 mx-2 d-none d-lg-block">
              <Link
                aria-label="Hide Sidebar"
                onClick={() => toggleSidebar()}
                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                data-bs-toggle="sidebar"
                to="#!"
              >
                <span></span>
              </Link>
            </div>
            <li className="header-element text-start d-none d-md-block">
              <div
                className="header-link"
                style={{
                  display: "flex",
                  alignItems: "start",
                  padding: "3px 15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#333",
                    }}
                  >
                    Super Admin
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#666",
                      marginTop: "4px",
                    }}
                  >
                    Velora Admin Panel
                  </span>
                </div>
              </div>
            </li>
          </div>
          <ul className="header-content-right">
            <li className="header-element d-none d-lg-block">
              <div
                className="header-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "3px 15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#333",
                    }}
                  >
                    {formattedTime}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#666",
                      marginTop: "4px",
                    }}
                  >
                    {formattedDate}
                  </span>
                </div>
              </div>
            </li>

            <li className="header-element header-fullscreen d-none d-sm-block">
              <Link to="#!" className="header-link" onClick={toggleFullscreen}>
                {isFullscreen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 full-screen-close header-link-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 full-screen-open header-link-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                )}
              </Link>
            </li>
            <Dropdown className="header-element">
              <Dropdown.Toggle as="a" className="header-link no-caret">
                <span className="avatar avatar-sm bg-primary text-white d-flex align-items-center justify-content-center rounded-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                  </svg>
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="main-header-dropdown pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end">
                <Dropdown.Item
                  onClick={(e) => {
                    e.preventDefault();
                    handleShowLogout();
                  }}
                >
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Modal show={showLogoutModal} onHide={handleCloseLogout}>
              <div className="">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Logout Confirmation</h5>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={handleCloseLogout}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure you want to log out?</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCloseLogout}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
          </ul>
        </div>
      </header>
      <Modal
        show={show}
        onHide={handleClose}
        className="fade"
        id="header-responsive-search"
        tabIndex={-1}
        aria-labelledby="header-responsive-search"
      >
        <Modal.Body>
          <div className="input-group">
            <Form.Control
              type="text"
              className="border-end-0"
              placeholder="Search Anything ..."
              aria-label="Search Anything ..."
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});
export default connect(mapStateToProps, { ThemeChanger })(Header);