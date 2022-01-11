import React from "react";
import { Grid, Box, Typography, useMediaQuery } from "@mui/material";

import { colors } from "../../assets/images/colors";
export default function ProgrammeStats() {
  const matches = useMediaQuery("(min-width:600px)");
  const stats = [
    {
      percentage: "40%",
      helperText:
        "40% of students report receiving a promotion during their EMBA education",
    },
    {
      percentage: "77%",
      helperText:
        "An average MBA graduate increases their salary by 77% after graduation",
    },
  ];
  return (
    <Grid
      container
      sx={{
        background: colors.darkBlue,
        justifyContent: "center",
        py: 5,
      }}
    >
      {stats.map((item) => (
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            alignSelf: "center",
            alignItems: "center",
            mb: matches ? 0 : 3,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: colors.white,
                textAlign: "center",
                fontFamily: "inherit",
                fontSize: "xxx-large",
                fontWeight: 500,
              }}
            >
              {item.percentage}
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                color: colors.white,
                fontFamily: "inherit",
                px: 10,
                fontSize: "smaller",
              }}
            >
              {item.helperText}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
