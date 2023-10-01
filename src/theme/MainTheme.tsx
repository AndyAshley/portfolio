import { createTheme } from "@mui/material";
import "../styles/_variables.scss";

declare module "@mui/material/styles" {
  interface Palette {
    linkedIn: Palette["primary"];
  }

  interface PaletteOptions {
    linkedIn?: PaletteOptions["primary"];
  }
}

const MainTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#222222",
      contrastText: "#fafcff",
    },
    secondary: {
      main: "#fcc515",
      contrastText: "#222222",
    },
    linkedIn: {
      main: "$linkedIn",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default MainTheme;
