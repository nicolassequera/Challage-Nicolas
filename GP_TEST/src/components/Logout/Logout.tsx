import { PublicRoutes } from "@/models";
import { resetUser, UserKey } from "@/redux/states/user";
import { clearLocalStorage } from "@/utilities";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export interface LogoutInterface {}

const Logout: React.FC<LogoutInterface> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(PublicRoutes.LOGIN, { replace: true });
  };
  return <button onClick={logOut}>Log Out</button>;
};

export default Logout;
