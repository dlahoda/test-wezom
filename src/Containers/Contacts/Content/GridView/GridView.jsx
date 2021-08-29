import React from "react";
import Grid from "@material-ui/core/Grid";

import { UserCard } from "Components";

const GridView = ({ data, ...props }) => {
  return (
    <div className="p-2.5">
      <Grid container spacing={3} justifyContent="space-between">
        {Array.isArray(data) &&
          data.map((data, index) => (
            <Grid item xs>
              <UserCard key={index} data={data} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default GridView;
