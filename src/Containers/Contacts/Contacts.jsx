import React from "react";
import axios from "axios";
import Noty from "noty";

import Header from "./Header/Header";
import FilterPanel from "./FilterPanel/FilterPanel";
import Content from "./Content/Content";
import Statistic from "./Statistic/Statistic";

const URL = "https://randomuser.me/api/";
const seed = "wezom-test";

const Contacts = (props) => {
  const mounted = React.useRef(false);

  React.useEffect(() => {
    mounted.current = true;

    let source = axios.CancelToken.source();

    fetchContacts({ source });

    return () => {
      mounted.current = false;
      source.cancel();
    };
  });

  const fetchContacts = async ({ source }) => {
    try {
      await axios
        .get(URL, {
          params: {
            seed,
            results: _.random(300, 600, false),
          },
          ...(source
            ? {
                cancelToken: source.token,
              }
            : {}),
        })
        .then((response) => {
          if (
            mounted.current &&
            "status" in response &&
            response.status === 200
          ) {
            console.log("response.data", response.data);
          }
        });
    } catch (error) {
      new Noty({
        type: "error",
        layout: "bottomRight",
        text: error.message || error,
      }).show();
    }
  };

  return (
    <div className="px-10 py-5">
      <Header fetchCallback={fetchContacts} />
      <FilterPanel />
      <Content />
      <Statistic />
    </div>
  );
};

export default Contacts;
