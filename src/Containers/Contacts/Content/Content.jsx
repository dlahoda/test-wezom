import React from "react";
import { useSelector } from "react-redux";

import { contactsSelectors } from "Redux";
import GridView from "./GridView/GridView";
import TableView from "./TableView/TableView";
import { ContactsContext } from "../Contacts";

import NoData from "./NoData/NoData";

const Content = () => {
  const viewType = useSelector(contactsSelectors.selectViewType);
  const { filteredData, pagination } = React.useContext(ContactsContext);

  if (
    Array.isArray(filteredData) &&
    filteredData.length > 0 &&
    pagination &&
    viewType === "grid"
  ) {
    return <GridView />;
  }

  if (Array.isArray(filteredData) && filteredData.length > 0 && pagination) {
    return <TableView />;
  }

  return <NoData />;
};

export default Content;
