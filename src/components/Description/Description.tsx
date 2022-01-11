import React from "react";
import { Grid, Box, Typography, useMediaQuery } from "@mui/material";

import { colors } from "../../assets/images/colors";
export default function Description() {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{ alignSelf: "center", alignItems: "center", py: 5 }}
      >
        <Box>
          <Typography
            sx={{
              color: colors.darkBlue,
              textAlign: "center",
              fontFamily: "inherit",
              fontSize: "x-large",
              fontWeight: 500,
            }}
          >
            A Data-driven MBA For a Data-driven Future
            <br />
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              px: matches ? 15 : 2,
              color: colors.gray,
              fontFamily: "inherit",
            }}
          >
            IIM Lucknow’s Accelerated Management Programme for Executives (AMPE)
            is a uniquely designed, fast-track management programme to prepare
            aspiring leaders for the multifaceted challenges of today’s dynamic
            business environment. Through a comprehensive and personalised
            learning journey, AMPE allows working professionals to build
            future-ready capabilities and develop a growth mindset.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
