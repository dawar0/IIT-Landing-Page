import { createTheme } from "@mui/material";
import { colors } from "../assets/images/colors";
const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        sx: {
          fontFamily: "FuturaBT",
        },
      },
    },
  },
  shape: {
    borderRadius: 0,
  },
  palette: {
    primary: {
      main: colors.darkBlue,
    },
  },
});

export default theme;
