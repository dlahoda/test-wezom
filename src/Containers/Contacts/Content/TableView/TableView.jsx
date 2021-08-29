import React from "react";

import { Table } from "Components";

import columns from "./columns";

const TableView = ({ data }) => {
  return (
    <div>
      <Table colDefs={columns} rowData={data} />
    </div>
  );
};

export default TableView;
