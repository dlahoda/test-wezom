import React from "react";

import { Table } from "Components";
import { ContactsContext } from "../../Contacts";

import columns from "./columns";

const TableView = () => {
  const {
    sort,
    setSort,
    filteredData,
    pagination: { pageLimit, page } = {},
  } = React.useContext(ContactsContext);

  const data = _.chunk(filteredData, pageLimit);

  return (
    <div className="px-2.5 overflow-x-auto">
      <Table
        colDefs={columns}
        rowData={data[page - 1]}
        useTableProps={{ sort, setSort }}
      />
    </div>
  );
};

export default TableView;
