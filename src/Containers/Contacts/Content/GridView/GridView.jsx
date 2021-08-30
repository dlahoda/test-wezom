import React from "react";
import Grid from "@material-ui/core/Grid";

import { UserCard } from "Components";

import { ContactsContext } from "../../Contacts";

const GridView = () => {
  const { filteredData, pagination: { pageLimit, page } = {} } =
    React.useContext(ContactsContext);

  const data = _.chunk(filteredData, pageLimit);

  return (
    <div className="p-2.5">
      <Grid container spacing={3} justifyContent="space-between">
        {Array.isArray(data[page - 1]) &&
          data[page - 1].map((userData, index) => (
            <Grid item xs key={index}>
              <UserCard data={userData} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default GridView;
