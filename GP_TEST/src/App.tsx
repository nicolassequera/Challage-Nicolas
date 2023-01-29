import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import AuthGuard from "./guards/auth.guard";
import RoutesWithNotFound from "./utilities/RoutesWithNotFound.utilities";
import { PrivateRoutes, PublicRoutes, Roles } from "./models";
import Home from "./pages/Private/Home/Home";
import RoleGuard from "./guards/rol.guard";

const Login = lazy(() => import("./pages/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));

function App() {
  return (
    <Suspense fallback={<>Cargando</>}>
      <Provider store={store}>
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard privateValidation={true} />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
            <Route element={<RoleGuard rol={Roles.ADMIN} />}>
              <Route path={PrivateRoutes.HOME} element={<Home />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
