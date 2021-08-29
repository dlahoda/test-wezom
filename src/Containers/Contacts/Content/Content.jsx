import React from "react";
import { useSelector } from "react-redux";

import { contactsSelectors } from "Redux";
import GridView from "./GridView/GridView";
import TableView from "./TableView/TableView";
import { ContactsContext } from "../Contacts";

const Content = () => {
  const viewType = useSelector(contactsSelectors.selectViewType);
  const { data } = React.useContext(ContactsContext);

  // TODO style no data placeholder
  if (!data || (Array.isArray(data) && data.length === 0)) {
    return <div>No Data</div>;
  }

  if (viewType === "grid") {
    return <GridView data={data} />;
  }

  return <TableView data={data} />;
};

export default Content;
