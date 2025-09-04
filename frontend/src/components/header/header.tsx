import { Fragment, useEffect, useRef, useState } from "react";
import { Dropdown, Form, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ThemeChanger } from "../common/ui/redux/action";
import store from "../common/ui/redux/store";

import desktoplogo from "../../assets/images/brand-logos/desktop-logo.png";
import toggledarklogo from "../../assets/images/brand-logos/toggle-dark.png";
import desktopdark from "../../assets/images/brand-logos/desktop-dark.png";
import togglelogo from "../../assets/images/brand-logos/toggle-logo.png";
import desktopwhite from "../../assets/images/brand-logos/desktop-white.png";
import togglewhite from "../../assets/images/brand-logos/toggle-white.png";
import face15 from "../../assets/images/avatar.jpg";
import { jwtDecode, JwtPayload } from "jwt-decode";
interface CustomJwtPayload extends JwtPayload {
  name?: string;
  concernId?: string;
  concernName?: string;
}

const Header = ({ local_varaiable, ThemeChanger }: any) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [show, setShow] = useState(false);
  const searchRef = useRef(null);
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

  const menuClose = () => {
    const theme = store.getState();
    if (window.innerWidth <= 992) {
      ThemeChanger({ ...theme, toggled: "close" });
    }
    if (window.innerWidth >= 992) {
      ThemeChanger({
        ...theme,
        toggled: local_varaiable.toggled ? local_varaiable.toggled : "",
      });
    }
  };

  const toggleSidebar = () => {
    const theme = store.getState();
    let sidemenuType = theme.dataNavLayout;
    if (window.innerWidth >= 992) {
      if (sidemenuType === "vertical") {
        let verticalStyle = theme.dataVerticalStyle;
        const navStyle = theme.dataNavStyle;
        switch (verticalStyle) {
          case "closed":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            ThemeChanger({
              ...theme,
              toggled:
                theme.toggled === "close-menu-close" ? "" : "close-menu-close",
            });
            break;
          case "overlay":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            ThemeChanger({
              ...theme,
              toggled:
                theme.toggled === "icon-overlay-close"
                  ? ""
                  : "icon-overlay-close",
            });
            break;
          case "icontext":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            ThemeChanger({
              ...theme,
              toggled:
                theme.toggled === "icon-text-close" ? "" : "icon-text-close",
            });
            break;
          case "doublemenu":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            ThemeChanger({
              ...theme,
              toggled:
                theme.toggled === "double-menu-open"
                  ? "double-menu-close"
                  : "double-menu-open",
            });
            break;
          case "detached":
            ThemeChanger({
              ...theme,
              toggled:
                theme.toggled === "detached-close" ? "" : "detached-close",
            });
            break;
          case "default":
            ThemeChanger({ ...theme, toggled: "" });
        }
        switch (navStyle) {
          case "menu-click":
            ThemeChanger({
              ...theme,
              toggled:
                theme.toggled === "menu-click-closed"
                  ? ""
                  : "menu-click-closed",
            });
            break;
          case "menu-hover":
            ThemeChanger({
              ...theme,
              toggled:
                theme.toggled === "menu-hover-closed"
                  ? ""
                  : "menu-hover-closed",
            });
            break;
          case "icon-click":
            ThemeChanger({
              ...theme,
              toggled:
                theme.toggled === "icon-click-closed"
                  ? ""
                  : "icon-click-closed",
            });
            break;
          case "icon-hover":
            ThemeChanger({
              ...theme,
              toggled:
                theme.toggled === "icon-hover-closed"
                  ? ""
                  : "icon-hover-closed",
            });
            break;
        }
      }
    } else {
      ThemeChanger({
        ...theme,
        toggled: theme.toggled === "close" ? "open" : "close",
      });
      setTimeout(() => {
        if (theme.toggled === "open") {
          const overlay = document.querySelector("#responsive-overlay");
          if (overlay) {
            overlay.classList.add("active");
            overlay.addEventListener("click", () => {
              overlay.classList.remove("active");
              menuClose();
            });
          }
        }
        window.addEventListener("resize", () => {
          if (window.screen.width >= 992) {
            const overlay = document.querySelector("#responsive-overlay");
            if (overlay) {
              overlay.classList.remove("active");
            }
          }
        });
      }, 100);
    }
  };

  const toggledark = () => {
    ThemeChanger({
      ...local_varaiable,
      dataThemeMode:
        local_varaiable.dataThemeMode === "dark" ? "light" : "dark",
      dataHeaderStyles:
        local_varaiable.dataThemeMode === "dark" ? "light" : "dark",
      dataMenuStyles:
        local_varaiable.dataNavLayout === "horizontal"
          ? local_varaiable.dataThemeMode === "dark"
            ? "light"
            : "dark"
          : "dark",
    });
    const theme = store.getState();
    if (theme.dataThemeMode !== "dark") {
      ThemeChanger({
        ...theme,
        bodyBg: "",
        lightRgb: "",
        bodyBg2: "",
        inputBorder: "",
        formControlBg: "",
        gray: "",
      });
      localStorage.setItem("xintralighttheme", "light");
      localStorage.removeItem("xintradarktheme");
      localStorage.removeItem("xintraMenu");
      localStorage.removeItem("xintraHeader");
    } else {
      localStorage.setItem("xintradarktheme", "dark");
      localStorage.removeItem("xintralighttheme");
      localStorage.removeItem("xintraMenu");
      localStorage.removeItem("xintraHeader");
    }
  };

  const handleClick = (event: { target: any }) => {
    const searchInput: any = searchRef.current;
    if (
      searchInput &&
      (searchInput === event.target || searchInput.contains(event.target))
    ) {
      document.querySelector(".header-search")?.classList.add("searchdrop");
    } else {
      document.querySelector(".header-search")?.classList.remove("searchdrop");
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const routeChange = () => {
    const path = `${import.meta.env.BASE_URL}login`;
    navigate(path);
  };
  const [decoded, setDecoded] = useState<CustomJwtPayload | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      const decodedToken = jwtDecode<CustomJwtPayload>(user);
      setDecoded(decodedToken);
    }
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
          <div className="header-content-left">
            <div className="header-element">
              <div className="horizontal-logo">
                <Link
                  to={`${import.meta.env.BASE_URL}dashboard/sales`}
                  className="header-logo"
                >
                  <img src={desktoplogo} alt="logo" className="desktop-logo" />
                  <img
                    src={toggledarklogo}
                    alt="logo"
                    className="toggle-dark"
                  />
                  <img src={desktopdark} alt="logo" className="desktop-dark" />
                  <img src={togglelogo} alt="logo" className="toggle-logo" />
                  <img src={togglewhite} alt="logo" className="toggle-white" />
                  <img
                    src={desktopwhite}
                    alt="logo"
                    className="desktop-white"
                  />
                </Link>
              </div>
            </div>
            <div className="header-element mx-lg-0 mx-2">
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
            <li className="header-element text-start">
              <div
                className="header-link"
                style={{
                  display: "flex",
                  alignItems: "start",

                  padding: "3px 15px",
                  // borderRadius: "8px",
                  // backgroundColor: "rgba(0, 0, 0, 0.05)",
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
                    {decoded?.name}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#666",
                      marginTop: "4px",
                    }}
                  >
                    {decoded?.concernName}
                  </span>
                </div>
              </div>
            </li>
          </div>
          <ul className="header-content-right">
            {/* <li className="header-element d-md-none d-block">
              <Link to="#!" className="header-link" onClick={handleShow}>
                <i className="bi bi-search header-link-icon lh-1"></i>
              </Link>
            </li> */}
            {/* <li className="header-element header-theme-mode">
              <Link
                to="#!"
                className="header-link layout-setting"
                onClick={() => toggledark()}
              >
                <span className="light-layout">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 header-link-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                </span>
                <span className="dark-layout">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 header-link-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                </span>
              </Link>
            </li> */}

            <li className="header-element">
              <div
                className="header-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "3px 15px",
                  // borderRadius: "8px",
                  // backgroundColor: "rgba(0, 0, 0, 0.05)",
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

            <li className="header-element header-fullscreen">
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
                <img
                  src={face15}
                  alt="profile"
                  className="d-flex align-items-center avatar avatar-sm"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="main-header-dropdown pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end">
                {/* <Dropdown.Item className="text-center border-bottom">
                  <div>
                    <span>admin@gmail.com</span>
                    <span className="d-block fs-12 text-muted">Admin</span>
                  </div>
                </Dropdown.Item> */}
                <Dropdown.Item
                  onClick={(e) => {
                    e.preventDefault();
                    handleShowLogout();
                  }}
                >
                  <i className="fe fe-lock p-1 rounded-circle bg-primary-transparent ut me-2 fs-16"></i>
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
