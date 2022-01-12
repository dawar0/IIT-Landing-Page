import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { colors } from "../../assets/images/colors";
import DateCalulator from "./DateCalculator";
import Background from "../../assets/images/Background.png";
import { Title, prependZero } from "./Misc";

import { dateString } from "../Date";
export default function EligibilityCriteria() {
  const matches = useMediaQuery("(min-width:600px)");
  const dateDifference = DateCalulator();
  const TimeValue = (props: any) => {
    const { children, type } = props;
    return (
      <Box>
        <Typography
          sx={{
            fontFamily: "inherit",
            color: colors.darkBlue,
            fontSize: 42,
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          {prependZero(children)}
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            color: colors.gray,
            fontSize: "small",
            textAlign: "center",
          }}
        >
          {type}
        </Typography>
      </Box>
    );
  };
  return (
    <Box>
      <Title>APPLICATION CLOSE IN</Title>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TimeValue type="DAYS">{dateDifference.days}</TimeValue>
        <TimeValue type="HOURS">{dateDifference.hours}</TimeValue>
        <TimeValue type="MINUTES">{dateDifference.minutes}</TimeValue>
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "inherit",
          color: colors.gray,
          fontSize: 11,
          m: 1,
          fontWeight: 600,
        }}
      >
        Last Date to Apply: {dateString}
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${Background})`,
          width: "100%",
          height: 200,
          display: matches ? "block" : "none",
          backgroundSize: "cover",
        }}
      ></Box>
    </Box>
  );
}
