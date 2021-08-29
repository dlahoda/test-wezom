import React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Statistic = (props) => {
  return (
    <div className="p-2.5">
      <Paper>
        <div className="p-4">
          <Typography variant="h4">Statistic</Typography>
        </div>
      </Paper>
    </div>
  );
};

export default Statistic;
