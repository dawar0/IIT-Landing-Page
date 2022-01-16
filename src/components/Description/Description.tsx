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
            The two-year Executive MBA in Analytics (EMBAA) degree by IIM
            Kashipur prepares participants to become business leaders who
            harness the power of analytics to improve organisational processes.
            The programme trains learners in the emerging and interdisciplinary
            areas of analytics, technology and management through
            cross-functional academic and practical learning. IIM Kashipur’s
            EMBAA follows a tried, tested and proven pedagogy that is a blend of
            lectures, case studies, white papers, lecture discussions,
            behavioural and computer-based simulations, projects, assignments,
            class presentations, quizzes, et al.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
