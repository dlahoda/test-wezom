import React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { ContactsContext } from "../Contacts";
import LabelValue from "./LabelValue/LabelValue";

const Statistic = () => {
  const { filteredData } = React.useContext(ContactsContext);

  const collectionSize = filteredData.length;
  const females = filteredData.filter(
    ({ gender }) => gender === "female"
  ).length;
  const males = filteredData.filter(({ gender }) => gender === "male").length;

  let predominate =
    collectionSize === 0
      ? "No Data"
      : females === males
      ? "Genders are balanced"
      : `${females > males ? "Women" : "Men"} predominate`;

  const nationalities = _.countBy(filteredData, "region");

  return (
    <div className="p-2.5 rounded-b-sm" style={{ backgroundColor: "#fafafa" }}>
      <Paper className="p-4">
        <div className="pb-2">
          <Typography variant="h4">Statistic</Typography>
        </div>
        <div className="flex pb-2">
          <LabelValue
            className="pr-4"
            variant="vertical"
            label="Collection Size"
            value={collectionSize}
          />
          <div>
            <div className="flex">
              <LabelValue
                className="pr-4"
                variant="vertical"
                label="Females"
                value={females}
              />
              <LabelValue
                className="pr-4"
                variant="vertical"
                label="Males"
                value={males}
              />
            </div>
            <span>{predominate}</span>
          </div>
        </div>
        <div>
          <Typography color="textSecondary" className="text-sm">
            Nationalities
          </Typography>
          <div
            className="flex flex-col flex-wrap pt-1"
            style={{ maxHeight: 150 }}
          >
            {Object.entries(nationalities).map(
              ([nationality, count], index) => (
                <LabelValue
                  key={index}
                  label={nationality + ":"}
                  className="pr-4"
                  labelClassName="pr-2"
                  value={count}
                />
              )
            )}
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Statistic;
