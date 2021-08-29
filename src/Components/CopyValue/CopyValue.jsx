import React from "react";

import IconButton from "@material-ui/core/IconButton";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

const CopyValue = ({ value, ...props }) => {
  const handleClick = () => {
    console.log("value", value);
    navigator.clipboard.writeText(value);
  };

  return (
    <IconButton className="p-1" color="primary" onClick={handleClick}>
      <FileCopyOutlinedIcon className="text-base" />
    </IconButton>
  );
};

export default CopyValue;
