import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Dashboardicon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 side-menu__icon"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    ></path>
  </svg>
);

const Pagesicon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 side-menu__icon"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
    ></path>
  </svg>
);

const Utilitiesicon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 side-menu__icon"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
    />
  </svg>
);

const MENUITEMS = [
  {
    path: "dashboard",
    icon: Dashboardicon,
    type: "link",
    active: false,
    selected: false,
    title: "Dashboard",
  },
  {
    path: "company-master",
    icon: Pagesicon,
    type: "link",
    active: false,
    selected: false,
    title: "Company Master",
  },
  {
    path: "settings",
    icon: Utilitiesicon,
    type: "link",
    active: false,
    selected: false,
    title: "Settings",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [menuItems, setMenuItems] = useState(MENUITEMS);

  useEffect(() => {
    const updatedItems = MENUITEMS.map(item => ({
      ...item,
      active: location.pathname === `/${item.path}` || (location.pathname === '/' && item.path === 'dashboard'),
      selected: location.pathname === `/${item.path}` || (location.pathname === '/' && item.path === 'dashboard')
    }));
    setMenuItems(updatedItems);
  }, [location.pathname]);

  return (
    <Fragment>
      <aside className="app-sidebar sticky" id="sidebar">
        <div className="main-sidebar-header">
          <Link to="/dashboard" className="header-logo">
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#2196f3' }}>Velora Admin</span>
          </Link>
        </div>
        <div className="main-sidebar" id="sidebar-scroll">
          <nav className="main-menu-container nav nav-pills flex-column sub-open">
            <div className="slide-left" id="slide-left">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
              </svg>
            </div>
            <ul className="main-menu">
              {menuItems.map((item, index) => (
                <li className={`slide ${item.active ? 'active' : ''}`} key={index}>
                  <Link
                    to={`/${item.path}`}
                    className={`side-menu__item ${item.active ? 'active' : ''}`}
                  >
                    {item.icon}
                    <span className="side-menu__label">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="slide-right" id="slide-right">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                <path d="m10.707 17.707 5.707-5.707-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
              </svg>
            </div>
          </nav>
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidebar;