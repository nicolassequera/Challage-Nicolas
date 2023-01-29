import { PrivateRoutes, PublicRoutes, Roles } from "@/models";
import { createUser, resetUser, UserKey } from "@/redux/states/user";
import { getMorty } from "@/service";
import { clearLocalStorage } from "@/utilities";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser({ ...result, rol: Roles.ADMIN }));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {}
  };

  return (
    <>
      <h2>Ingresar</h2>
      <button onClick={login}>LOGIN</button>
    </>
  );
};

export default Login;
