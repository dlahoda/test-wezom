import React from "react";

import { Table } from "Components";
import { ContactsContext } from "../../Contacts";

import columns from "./columns";

const TableView = ({ data }) => {
  const { sort, setSort } = React.useContext(ContactsContext);

  return (
    <div>
      <Table
        colDefs={columns}
        rowData={data}
        useTableProps={{ sort, setSort }}
      />
    </div>
  );
};

export default TableView;
