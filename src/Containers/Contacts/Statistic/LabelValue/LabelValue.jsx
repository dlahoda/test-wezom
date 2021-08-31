import React from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";

const LabelValue = ({
  label = "",
  value = "",
  variant = "horizontal",
  className,
  labelClassName,
  valueClassName,
  ...props
}) => {
  return (
    <div
      className={clsx(className, "flex", {
        "flex-col": variant === "vertical",
      })}
      {...props}
    >
      <Typography
        color="textSecondary"
        className={clsx(labelClassName, "text-sm")}
      >
        {label}
      </Typography>
      <Typography className={clsx(valueClassName, "text-sm")}>
        {value}
      </Typography>
    </div>
  );
};

export default LabelValue;
