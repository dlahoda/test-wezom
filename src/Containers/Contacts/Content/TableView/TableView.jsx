import React from "react";

import { Table, CopyValue } from "Components";

import Typography from "@material-ui/core/Typography";

const COLUMNS = [
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

const getRowData = (entry) => {
  let result = {};

  const {
    picture,
    name,
    dob,
    nat,
    phone,
    email,
    location: { country, street, city, state, postcode },
  } = entry;

  result.picture_url = picture.large;
  result.full_name = Object.values(name).join(" ");

  const dateOfBirth = new Intl.DateTimeFormat("en-US").format(
    new Date(dob.date)
  );

  result.date_of_birth = {
    dateOfBirth,
    age: dob.age,
  };
  result.phone = phone;
  result.email = email;
  result.location = {
    country,
    address: `${street.number} ${street.name}, ${city}, ${state}, ${postcode}`,
  };
  result.region = new Intl.DisplayNames(["en"], { type: "region" }).of(nat);

  return result;
};

const TableView = ({ data }) => {
  const [rowData, setRowData] = React.useState([]);

  React.useEffect(() => {
    if (Array.isArray(data)) {
      const _rowData = data.map(getRowData);

      setRowData(_rowData);
    }
  }, [data]);

  return (
    <div>
      <Table colDefs={COLUMNS} rowData={rowData} />
    </div>
  );
};

export default TableView;
