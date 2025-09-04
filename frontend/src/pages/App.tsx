import Switcher from "../components/switcher/switcher";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import Footer from "../components/footer/footer";
import Backtotop from "../components/backtotop/backtotop";
import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Initialload } from "../components/contextapi";

function App() {
  const [lateLoad, setlateLoad] = useState(false);

  useEffect(() => {
    setlateLoad(true);
  });
  const [pageloading, setpageloading] = useState(false);
  return (
    <>
      <Fragment>
        <Initialload.Provider value={{ pageloading, setpageloading }}>
          <div style={{ display: `${lateLoad ? "block" : "none"}` }}>
            <Switcher />

            <div className="page">
              <Header />
              <Sidebar />
              <div className="main-content app-content">
                <div className="container-fluid">
                  <Outlet />
                </div>
              </div>
              <Footer />
            </div>
            <Backtotop />
          </div>
        </Initialload.Provider>
      </Fragment>
    </>
  );
}

export default App;
