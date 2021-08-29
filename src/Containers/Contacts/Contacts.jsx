import React from "react";
import axios from "axios";
import Noty from "noty";
import { useSelector } from "react-redux";

import Header from "./Header/Header";
import FilterPanel from "./FilterPanel/FilterPanel";
import Content from "./Content/Content";
import Statistic from "./Statistic/Statistic";
import { getReq } from "./api";
import { contactsActions, contactsSelectors } from "Redux";

Noty.overrideDefaults({
  layout: "bottomRight",
  timeout: 3000,
});

const Contacts = () => {
  const mounted = React.useRef(false);
  const [fetch, setFetch] = React.useState("");
  const data = useSelector(contactsSelectors.selectData);

  React.useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  });

  React.useEffect(() => {
    let source = axios.CancelToken.source();

    if (fetch !== "" || !data) {
      getReq(source).then(
        ({ status, data }) => {
          if (status && status === 200) {
            contactsActions.setContacts(data);

            new Noty({
              type: "success",
              text: "Data Updated!",
            }).show();
          }
        },
        (error) => {
          new Noty({
            type: "error",
            text: error.message || error,
          }).show();
        }
      );
    }

    return () => {
      source.cancel();
    };
  }, [fetch]);

  return (
    <div className="px-10 py-5">
      <Header fetchCallback={() => setFetch(!fetch)} />
      <FilterPanel />
      <Content />
      <Statistic />
    </div>
  );
};

export default Contacts;
