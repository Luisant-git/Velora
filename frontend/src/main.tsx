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
import { ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
const App = lazy(() => import("./pages/App.tsx"));
const Error401 = lazy(() => import("./pages/errors/Error401.tsx"));
const Error404 = lazy(() => import("./pages/errors/Error404.tsx"));
const Error500 = lazy(() => import("./pages/errors/Error500.tsx"));
const Landing = lazy(() => import("./pages/Landing.tsx"));
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
                  <Route path={`error/401`} element={<Error401 />} />
                  <Route path={`error/404`} element={<Error404 />} />
                  <Route path={`error/500`} element={<Error500 />} />
                </Route>
                <Route path={`landing`} element={<Landing />} />
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
