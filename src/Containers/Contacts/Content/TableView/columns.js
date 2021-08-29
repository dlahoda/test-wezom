import { CopyValue } from "Components";
import Typography from "@material-ui/core/Typography";

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
    Header: "Full Name",
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
