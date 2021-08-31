import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ViewListIcon from "@material-ui/icons/ViewList";
import Tooltip from "@material-ui/core/Tooltip";

import { contactsActions, contactsSelectors } from "Redux";

const Header = ({ fetchCallback, ...props }) => {
  const viewType = useSelector(contactsSelectors.selectViewType);

  const handleViewTypeChange = (type) => {
    contactsActions.setViewType(type);
  };

  return (
    <div className="flex items-center px-4" {...props}>
      <Typography variant="h4">Contacts</Typography>
      <div className="flex-grow" />
      <Tooltip placement="top" title="Update Data">
        <IconButton
          color="primary"
          className="mr-2"
          onClick={fetchCallback}
          style={{ height: 32, width: 32 }}
        >
          <RefreshIcon />
        </IconButton>
      </Tooltip>
      <ButtonGroup color="primary">
        <Tooltip placement="top" title="Tiled View">
          <Button
            onClick={handleViewTypeChange.bind(null, "grid")}
            startIcon={<ViewComfyIcon />}
            classes={{ startIcon: "m-0" }}
            style={{
              ...(viewType === "grid"
                ? {
                    backgroundColor: "#3f51b5",
                    color: "white",
                  }
                : {}),
            }}
          ></Button>
        </Tooltip>
        <Tooltip placement="top" title="Tabular View">
          <Button
            onClick={handleViewTypeChange.bind(null, "table")}
            startIcon={<ViewListIcon />}
            classes={{ startIcon: "m-0" }}
            style={{
              ...(viewType === "table"
                ? {
                    backgroundColor: "#3f51b5",
                    color: "white",
                  }
                : {}),
            }}
          ></Button>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
};

export default Header;
