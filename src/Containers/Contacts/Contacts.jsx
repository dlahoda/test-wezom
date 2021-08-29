import React from "react";

import Header from "./Header/Header";
import FilterPanel from "./FilterPanel/FilterPanel";
import Content from "./Content/Content";
import Statistic from "./Statistic/Statistic";

const Contacts = (props) => {
  return (
    <div className="px-10 py-5">
      <Header />
      <FilterPanel />
      <Content />
      <Statistic />
    </div>
  );
};

export default Contacts;
