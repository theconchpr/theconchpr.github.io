import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Slab"],
  },
  palette: {
    primary: {
      main: "#afdbe1",
      dark: "#586e71",
      light: "#d7edf0",
    },
    secondary: {
      main: "#f1bba4",
      dark: "#795e52",
      light: "#f8ddd2",
    },
  },
});

export default theme;
