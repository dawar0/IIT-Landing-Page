import React from "react";
import { Grid } from "@mui/material";

import SingleDeadline from "./SingleDeadline";

import { colors } from "../../assets/images/colors";
export default function ApplicationDeadline() {
  let deadlines = [
    { title: "2 Years", helperText: "Course Duration", addititonalText: "" },
    {
      title: "2 / Week",
      helperText: "Saturdays, Sundays",
      additionalText: " 9:15AM - 5:30PM",
    },
    {
      title: "₹12,00,000",
      helperText: "Course Fee ",
      additionalText: "(GST and Registration Extra)",
    },
    {
      title: "9th January '22",
      helperText: "Deadline to Apply",
    },
  ];
  return (
    <Grid container sx={{ background: colors.lightGray, py: 5 }}>
      {deadlines.map((item) => (
        <SingleDeadline {...item} />
      ))}
    </Grid>
  );
}
