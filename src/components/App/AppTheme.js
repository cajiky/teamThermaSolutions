import { createMuiTheme } from '@material-ui/core/styles';

const appTheme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#0849eb',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#789dfa',
    },
    background: {
      paper: "#fff",
      default: "#fff"
    },
    // error: will use the default color
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
  },
});

export default appTheme;