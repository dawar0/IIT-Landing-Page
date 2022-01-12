import { Box, Grid, Typography } from "@mui/material";
import { colors } from "../../assets/images/colors";

interface Deadline {
  title: string;
  helperText: string;
  additionalText?: string;
}

export default function SingleDeadline({
  title,
  helperText,
  additionalText,
}: Deadline) {
  return (
    <Grid
      item
      xs={6}
      lg={3}
      sx={{ display: "flex", justifyContent: "center", p: 1 }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "larger",
            color: colors.darkBlue,
            textAlign: "center",
            fontFamily: "inherit",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "smaller",
            color: colors.gray,
            textAlign: "center",
            fontFamily: "inherit",
          }}
        >
          {helperText}
          <br />
          {additionalText}
        </Typography>
      </Box>
    </Grid>
  );
}
