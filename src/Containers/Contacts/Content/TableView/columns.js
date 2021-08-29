import { CopyValue } from "Components";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

import Icon from "@material-ui/core/Icon";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const columns = [
  {
    Header: "Avatar",
    accessor: "picture_url",
    Cell: ({ value }) => {
      return (
        <div style={{ height: 40, width: 40 }}>
          <img className="rounded-full" src={value} />
        </div>
      );
    },
  },
  {
    Header: ({ sort, setSort }) => {
      let tooltip = "";
      let nextSort = "";
      let IconComponent = null;

      if (sort === "default") {
        tooltip = "Click to sort by ascend";
        nextSort = "full_name.asc";
        IconComponent = () => (
          <span
            className="inline-block"
            style={{ height: 24, width: 21 }}
          ></span>
        );
      } else if (sort === "full_name.asc") {
        tooltip = "Click to sort by descend";
        nextSort = "full_name.desc";
        IconComponent = () => (
          <Icon className="leading-4" color="primary">
            <ArrowDropUpIcon />
          </Icon>
        );
      } else if (sort === "full_name.desc") {
        tooltip = "Click to cancel sort";
        nextSort = "default";
        IconComponent = () => (
          <Icon className="leading-4" color="primary">
            <ArrowDropDownIcon />
          </Icon>
        );
      }

      const handleClick = () => {
        setSort(nextSort);
      };

      return (
        <Tooltip placement="top" title={tooltip}>
          <div
            className="cursor-pointer flex items-center justify-center"
            onClick={handleClick}
          >
            Full Name
            <IconComponent />
          </div>
        </Tooltip>
      );
    },
    accessor: "full_name",
  },
  {
    Header: "Birthday",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return (
        <div>
          <Typography>{value.dateOfBirth}</Typography>
          <Typography>{value.age} years</Typography>
        </div>
      );
    },
  },
  {
    Header: "Email",
    accessor: "email",
    Cell: ({ value }) => {
      return (
        <div className="flex items-center">
          <CopyValue value={value} />
          <Typography>
            <a href={`mailto:${value}`}>{value}</a>
          </Typography>
        </div>
      );
    },
  },
  {
    Header: "Phone",
    accessor: "phone",
    Cell: ({ value }) => {
      return (
        <div className="flex items-center">
          <CopyValue value={value} />
          <Typography>
            <a href={`tel:${value}`}>{value}</a>
          </Typography>
        </div>
      );
    },
  },
  {
    Header: "Location",
    accessor: "location",
    Cell: ({ value: { country, address } }) => {
      return (
        <div className="flex items-center">
          <CopyValue value={`/${country}/ ${address}`} />
          <div>
            <Typography>/{country}/</Typography>
            <Typography>{address}</Typography>
          </div>
        </div>
      );
    },
  },
  {
    Header: "Nationality",
    accessor: "region",
  },
];

export default columns;
