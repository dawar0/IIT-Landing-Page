import React from "react";
import { Grid, Typography, useMediaQuery, Box } from "@mui/material";

import TabsDesktop from "./TabsDesktop";

import { colors } from "../../assets/images/colors";

import TabsMobile from "./TabsMobile";
import { FirstYearCourses, SecondYearCourses, TentativeList } from "./Courses";

export default function ProgrammeContent() {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          background: "#eeeeee",
          justifyContent: "center",
          alignItems: "center",
          py: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "inherit",
            fontWeight: 600,
            fontSize: "x-large",
            color: colors.darkBlue,
          }}
        >
          PROGRAMME CONTENT
        </Typography>
      </Grid>
      <TabsDesktop />
      <Box sx={{ display: matches ? "none" : "block" }}>
        <TabsMobile name={"First Year Courses"} items={FirstYearCourses} />
        <TabsMobile name={"Second Year Courses"} items={SecondYearCourses} />
        <TabsMobile name={"Tentative List"} items={TentativeList} />
      </Box>
    </Grid>
  );
}
