import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Routedata } from "./components/common/ui/routingdata.tsx";
import { Provider } from "react-redux";
import store from "./components/common/ui/redux/store.tsx";
import RootWrapper from "./pages/Rootwrapper.tsx";
import CenteredLoader from "./components/progress/Progress.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrinterQuoation from "./components/print/PrintQuoation.tsx";



import { ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
const App = lazy(() => import("./pages/App.tsx"));
const Error401 = lazy(
  () => import("./container/authentication/error/401-error/error401.tsx")
);
const Error404 = lazy(
  () => import("./container/authentication/error/404-error/error404.tsx")
);
const Error500 = lazy(
  () => import("./container/authentication/error/500-error/error-500.tsx")
);
const Landing = lazy(() => import("./container/pages/landing/landing.tsx"));
const Landinglayout = lazy(() => import("./pages/landinglayout.tsx"));
const Login = lazy(() => import("./firebase/login.tsx"));
const PublicRoute = lazy(() => import("./firebase/PublicRoute.tsx"));
const ProtectedRoute = lazy(() => import("./firebase/ProtectedRoute.tsx"));
const Signup = lazy(() => import("./firebase/signup.tsx"));

createRoot(document.getElementById("root")!).render(

    <>
   <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RootWrapper>
          <BrowserRouter>
            <Suspense fallback={<CenteredLoader />}>
              <Routes>
                <Route element={<PublicRoute />}>
                  <Route index element={<Login />} />
                  <Route path={`login`} element={<Login />} />
                  <Route path={`signup`} element={<Signup />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                  <Route element={<App />}>
                    {Routedata.map((idx) => (
                      <Route
                        key={idx.id}
                        path={idx.path}
                        element={idx.element}
                      />
                    ))}
                  </Route>
                </Route>
                <Route element={<ProtectedRoute />}>
                  <Route
                    path={`authentication/error/401-error`}
                    element={<Error401 />}
                  />
                  <Route
                    path={`authentication/error/404-error`}
                    element={<Error404 />}
                  />
                  <Route
                    path={`authentication/error/500-error`}
                    element={<Error500 />}
                  />
                  <Route path={`printer/:id`} element={<PrinterQuoation />} />
                </Route>
                <Route element={<Landinglayout />}>
                  <Route path={`pages/landing`} element={<Landing />} />
                </Route>
              </Routes>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </Suspense>
          </BrowserRouter>
        </RootWrapper>
      </Provider>
     </ThemeProvider>
    </>

);
