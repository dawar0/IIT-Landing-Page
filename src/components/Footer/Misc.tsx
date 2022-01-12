import { Box, Typography } from "@mui/material";
import { colors } from "../../assets/images/colors";
export function Title(props: any) {
  const { children } = props;
  return (
    <Box
      sx={{
        alignContent: "center",
        justifyContent: "center",
        display: "flex",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontFamily: "inherit",
          color: colors.darkBlue,
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

export function prependZero(number: any) {
  if (number < 9) return "0" + number;
  else return number;
}

export function Image(props: any) {
  const { src, alt, sx } = props;
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          p: 1,
          borderRadius: "50%",
          border: "3px solid",
          borderColor: colors.gray,
          ...sx,
          width: "75px",
        }}
      >
        <img src={src} alt={alt} style={{ width: 50 }} />
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "small",
          fontFamily: "inherit",
          color: colors.gray,
        }}
      >
        {alt}
      </Typography>
    </Box>
  );
}
