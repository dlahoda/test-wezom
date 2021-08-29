import React from "react";
import { useSelector } from "react-redux";

import { contactsSelectors } from "Redux";
import GridView from "./GridView/GridView";
import TableView from "./TableView/TableView";

const Content = () => {
  const viewType = useSelector(contactsSelectors.selectViewType);
  const stateData = useSelector(contactsSelectors.selectData);

  const data = "results" in stateData ? stateData.results : null;

  // TODO style no data placeholder
  if (!data || Array.isArray(data) && data.length === 0) {
    return <div>No Data</div>;
  }

  if (viewType === "grid") {
    return <GridView data={data} />;
  }

  return <TableView data={data} />;
};

export default Content;
