import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { dialogOpenSubjectService } from "@/service/sharing.service";

import { FavoriteTable } from "../FavoriteTable";
import { CustomDialog } from "../CustomDialog";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = () => {
    dialogOpenSubjectService.setSubject(true);
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
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
