import React from "react";
import { uid } from "uid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useForm, Controller } from "react-hook-form";

const selectLabelId = uid();

import { ContactsContext } from "../Contacts";

const defaultValues = {
  full_name: "",
  gender: "",
  nat: "",
  creator: false,
};

const FilterPanel = (props) => {
  const { data, setFilters } = React.useContext(ContactsContext);
  const nationalityOptions = React.useMemo(() => {
    if (Array.isArray(data)) {
      const regions = data.map(({ region: label, nat: value }) => ({
        label,
        value,
      }));
      return _.uniqBy(regions, "value").sort(({ label: a }, { label: b }) =>
        a.localeCompare(b)
      );
    }

    return [];
  }, [data]);

  const { control, watch, reset } = useForm({ defaultValues });

  React.useEffect(() => {
    const subscription = watch((value) => setFilters(value));
    return () => subscription.unsubscribe();
  }, [watch]);

  const onReset = () => {
    reset(defaultValues);
  };

  return (
    <div className="p-2.5 rounded-t-sm" style={{ backgroundColor: "#fafafa" }}>
      <Paper>
        <div className="p-4">
          <form className="flex items-center">
            <Controller
              name="full_name"
              control={control}
              render={({ field }) => (
                <TextField
                  style={{ minWidth: 300 }}
                  className="pr-4"
                  placeholder="Search by full name"
                  variant="outlined"
                  {...field}
                />
              )}
            />
            <Controller
              name="gender"
              control={control}
              render={({ field }) => {
                return (
                  <FormControl
                    className="pr-4"
                    variant="outlined"
                    style={{ minWidth: 120 }}
                  >
                    <InputLabel
                      id={selectLabelId}
                      classes={{
                        shrink: "opacity-0",
                      }}
                    >
                      Gender
                    </InputLabel>
                    <Select
                      labelId={selectLabelId}
                      displayEmpty
                      {...field}
                      onChange={(e) => field.onChange(e.target.value)}
                    >
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="indeterminate">Indeterminate</MenuItem>
                    </Select>
                  </FormControl>
                );
              }}
            />
            <Controller
              name="nat"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  style={{ minWidth: 300 }}
                  className="pr-4"
                  options={nationalityOptions}
                  getOptionLabel={(option) => option.label || ""}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Nationality"
                      variant="outlined"
                    />
                  )}
                  {...field}
                  onChange={(_e, value) => field.onChange(value || "")}
                />
              )}
            />
            <Controller
              name="creator"
              control={control}
              render={({ field }) => {
                return (
                  <FormControlLabel
                    className="pr-4"
                    control={<Checkbox checked={field.value} />}
                    label="I am creator"
                    {...field}
                  />
                );
              }}
            />

            <div className="flex-grow" />
            <Button color="primary" variant="outlined" onClick={onReset}>
              Reset
            </Button>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default FilterPanel;
