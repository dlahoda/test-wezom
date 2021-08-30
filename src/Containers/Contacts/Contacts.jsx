import React from "react";
import axios from "axios";
import Noty from "noty";
import { useSelector } from "react-redux";

import Header from "./Header/Header";
import FilterPanel from "./FilterPanel/FilterPanel";
import Content from "./Content/Content";
import Statistic from "./Statistic/Statistic";
import PaginationBlock from "./PaginationBlock/PaginationBlock";
import { getReq } from "./api";
import { contactsActions, contactsSelectors } from "Redux";
import prepareData from "./prepareData";

Noty.overrideDefaults({
  layout: "bottomRight",
  timeout: 3000,
});

const ContactsContext = React.createContext();

const Contacts = () => {
  const mounted = React.useRef(false);
  const [fetch, setFetch] = React.useState("");
  const stateData = useSelector(contactsSelectors.selectData);
  const viewType = useSelector(contactsSelectors.selectViewType);
  const [pagination, setPagination] = React.useState(null);
  const [filters, setFilters] = React.useState({
    full_name: "",
    gender: "",
    nat: "",
    creator: false,
  });
  const [data, setData] = React.useState(null);
  const [sort, setSort] = React.useState("default");

  React.useEffect(() => {
    if ("results" in stateData) {
      const newData = stateData.results.map(prepareData);

      let sortedData;
      switch (sort) {
        case "default": {
          sortedData = newData.sort((a, b) => a.index - b.index);
          break;
        }
        case "full_name.asc": {
          sortedData = newData.sort(({ full_name: a }, { full_name: b }) =>
            a.localeCompare(b)
          );
          break;
        }
        case "full_name.desc": {
          sortedData = newData.sort(({ full_name: a }, { full_name: b }) =>
            b.localeCompare(a)
          );
          break;
        }
        default: {
          break;
        }
      }

      const pageLimit = 10;
      const total = newData.length;
      const count = Math.ceil(total / pageLimit);

      const _pagination = {
        page: 1,
        pageLimit: 10,
        total,
        count,
      };

      setPagination(_pagination);
      setData(newData);
    }
  }, [stateData, sort]);

  React.useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  });

  React.useEffect(() => {
    let source = axios.CancelToken.source();

    if (fetch !== "" || !stateData) {
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
    <ContactsContext.Provider
      value={{
        data: data,
        pagination,
        filters,
        setFilters,
        sort,
        setSort,
        pagination,
        setPagination,
      }}
    >
      <div className="px-10 py-5">
        <Header fetchCallback={() => setFetch(!fetch)} />
        <FilterPanel />
        <Content />
        <Statistic />
        <PaginationBlock />
      </div>
    </ContactsContext.Provider>
  );
};

export default Contacts;
export { ContactsContext };
