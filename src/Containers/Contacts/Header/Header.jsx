import React from "react";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import RefreshIcon from "@material-ui/icons/Refresh";
import AppsIcon from "@material-ui/icons/Apps";
import ListIcon from "@material-ui/icons/List";

import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ViewListIcon from "@material-ui/icons/ViewList";

const Header = (props) => {
  return (
    <div className="flex items-center">
      <Typography variant="h4">Contacts</Typography>
      <div className="flex-grow" />
      <IconButton color="primary">
        <RefreshIcon />
      </IconButton>
      <ButtonGroup color="primary">
        <Button
          startIcon={<ViewComfyIcon />}
          classes={{ startIcon: "m-0" }}
        ></Button>
        <Button
          startIcon={<ViewListIcon />}
          classes={{ startIcon: "m-0" }}
        ></Button>
      </ButtonGroup>
    </div>
  );
};

export default Header;
