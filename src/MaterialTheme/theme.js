import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  overrides: {
    MuiToolbar: {
      gutters: {
        paddingLeft: 0,
        paddingRight: 0,

        "@media (min-width: 600px)": {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
  },
});

export default theme;
