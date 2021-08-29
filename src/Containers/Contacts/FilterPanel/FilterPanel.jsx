import React from "react";
import { uid } from "uid";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";

const _options = [
  {
    value: "test",
    label: "Test",
  },
];

const selectLabelId = uid();

const FilterPanel = (props) => {
  return (
    <div className="p-2.5 rounded-t-sm" style={{ backgroundColor: "#fafafa" }}>
      <Paper>
        <div className="flex items-center p-4">
          <TextField placeholder="Search by full name" />
          <FormControl>
            <InputLabel id={selectLabelId}>Gender</InputLabel>
            <Select labelId={selectLabelId} value={""}>
              <option>Female</option>
              <option>Male</option>
              <option>Indeterminate</option>
            </Select>
          </FormControl>
          <Autocomplete
            options={_options}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Nationality"
                variant="outlined"
              />
            )}
          />
          <FormControlLabel control={<Checkbox />} label="I am creator" />
          <div className="flex-grow" />
          <Button color="primary" variant="outlined">
            Reset
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default FilterPanel;
