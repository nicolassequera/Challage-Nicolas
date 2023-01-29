import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExitToApp from "@mui/icons-material/ExitToApp";
import { dialogOpenSubjectService } from "@/service/sharing.service";

import { FavoriteTable } from "../FavoriteTable";
import { CustomDialog } from "../CustomDialog";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "@/utilities";
import { resetUser, UserKey } from "@/redux/states/user";
import { PublicRoutes } from "@/models";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dialogOpenSubjectService.setSubject(true);
  };

  const logOut = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(PublicRoutes.LOGIN, { replace: true });
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Challenger Nicolas React Test
          </Typography>
          <IconButton
            color="error"
            aria-label="favorites"
            component="label"
            onClick={handleClick}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="exitApp"
            component="label"
            onClick={logOut}
          >
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
