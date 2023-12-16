import { ThemeProvider, createTheme } from "@mui/material/styles";
import componentOverrides from "./components";
import lightPalette from "./palette.light";
import typography from "./typography";

// eslint-disable-next-line react/prop-types
const AppThemeProvider = ({ children }) => {
  const apptheme = createTheme({
    components: componentOverrides,
    palette: lightPalette,
    typography,
  });

  return (<ThemeProvider theme={apptheme}>
  {children}
  </ThemeProvider>)
};

export default AppThemeProvider;
