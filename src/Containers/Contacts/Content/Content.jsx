import React from "react";
import { useSelector } from "react-redux";

import { contactsSelectors } from "Redux";
import GridView from "./GridView/GridView";
import TableView from "./TableView/TableView";
import { ContactsContext } from "../Contacts";

const Content = () => {
  const viewType = useSelector(contactsSelectors.selectViewType);
  const { data, filteredData, pagination } = React.useContext(ContactsContext);

  if (filteredData && pagination && viewType === "grid") {
    return <GridView />;
  }

  if (filteredData && pagination) {
    return <TableView />;
  }

  // TODO style no data placeholder
  return <div>No Data</div>;
};

export default Content;
