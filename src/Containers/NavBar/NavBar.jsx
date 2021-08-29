import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar color="default">
      <Toolbar>
        <Box
          boxSizing="border-box"
          display="flex"
          alignItems="center"
          px={5}
          py={1.25}
          height={65}
        >
          <Box boxSizing="border-box" pr={4.5}>
            <Link to="/">
              <img src="media\svg\wezom-logo.svg" />
            </Link>
          </Box>
          <Box boxSizing="border-box" px={1}>
            <Link to="/">
              <Typography>Home</Typography>
            </Link>
          </Box>
          <Box boxSizing="border-box" px={1}>
            <Link to="/contacts">
              <Typography>Contacts</Typography>
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
