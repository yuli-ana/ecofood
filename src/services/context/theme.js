import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  props: {
    // Name of the component
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application!
    },
  },
  typography: {
    button: {
      textTransform: "capitalize",
    },
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 14,
  },
  spacing: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 32, 64],
  shape: {
    borderRadius: 20,
  },
  palette: {
    primary: {
      light: "#5485e8",
      main: "#000000",
      dark: "#266bf6",
      contrastText: "#fff",
    },
    secondary: {
      light: "#2A9D8F",
      main: "rgba(256, 256, 256, .4)",
      dark: "#2A9D8F",
    },
  },
});
