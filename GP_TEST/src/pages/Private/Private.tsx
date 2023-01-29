import { Navbar } from "@/components";
import { PrivateRoutes } from "@/models";
import RoutesWithNotFound from "@/utilities/RoutesWithNotFound.utilities";
import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
export interface PrivateInterface {}

const Home = lazy(() => import("./Home/Home"));

const Private: React.FC<PrivateInterface> = () => {
  return (
    <>
      <Navbar />
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
        <Route path={PrivateRoutes.HOME} element={<Home />} />
      </RoutesWithNotFound>
    </>
  );
};

export default Private;
