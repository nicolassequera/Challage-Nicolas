import { PrivateRoutes, PublicRoutes, Roles } from "@/models";
import { createUser, resetUser, UserKey } from "@/redux/states/user";
import { getMorty } from "@/service";
import { clearLocalStorage } from "@/utilities";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import Background from "../../assets/background.jpg";
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
    <div
      className="container"
    >
      <Player
        src={"https://assets9.lottiefiles.com/packages/lf20_PBgNop.json"}
        loop
        autoplay
        className="player"
        style={{ height: "100%", width: "100%" }}
      />
      <Button
        variant="contained"
        onClick={login}
        style={{ height: "100%", width: "100%" }}
      >
        Ingresar
      </Button>
    </div>
  );
};

export default Login;
