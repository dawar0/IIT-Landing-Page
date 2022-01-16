import React from "react";
import { Grid } from "@mui/material";

import SingleDeadline from "./SingleDeadline";

import { colors } from "../../assets/images/colors";
import { dateString } from "../Date";
export default function ApplicationDeadline() {
  let deadlines = [
    { title: "2 Years", helperText: "Course Duration", addititonalText: "" },
    {
      title: "2 Days/Week",
      helperText: "Saturdays, Sundays",
      additionalText: " 9:15AM - 5:30PM",
    },
    {
      title: "₹12,00,000",
      helperText: "Course Fee ",
      additionalText: "(GST and Registration Extra)",
    },
    {
      title: dateString,
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
