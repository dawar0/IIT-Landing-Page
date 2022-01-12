import React from "react";
import { Box, Grid, GridSize, Typography, useMediaQuery } from "@mui/material";

import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

import { colors } from "../../assets/images/colors";
interface SingleBenefitInterface {
  items: String;
  size: GridSize;
}
function SingleBenefit({ items, size }: SingleBenefitInterface) {
  return (
    <Grid item xs={size} sx={{ display: "flex", p: 2 }}>
      <Box sx={{ display: "inline-block", height: "100%", px: 2 }}>
        <Box
          sx={{
            display: "inline-block",
            width: "20px",
            height: "3px",
            background: colors.white,
          }}
        ></Box>
      </Box>
      <Typography
        sx={{
          fontFamily: "inherit",
          // p: 2,
          fontSize: 13,

          // fontWeight: 600,
          color: colors.white,
        }}
      >
        {"  "} {items}
      </Typography>
    </Grid>
  );
}
export default function Benefits() {
  const benefits = [
    "Demonstrate knowledge about modern business practices and contexts.",
    "Learn how to use data analytics to build better strategies for the business and customers.",
    "Develop dynamic strategic frameworks and effective management systems to improve business processes.",
    "Analyse business phenomena and evaluate them from a critical perspective",
    "Master the art of descriptive, predictive and prescriptive analytics in an organisational decision-making context.",
    "Demonstrate knowledge of cross-functional managerial and analytical concepts to facilitate organisational growth.",
    "Understand and create analytics-driven business solutions.",
    "Learn how to use emerging technologies like AI, Machine Learning, Deep Learning, Spatial Data Science, and Cloud Computing. ",
  ];
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Grid
      container
      sx={{ background: colors.darkBlue, justifyContent: "center", py: 4 }}
    >
      <Grid item xs={12}>
        <Typography
          sx={{
            textAlign: "center",
            color: colors.white,
            fontFamily: "inherit",
            fontSize: "x-large",
            mb: 1,
          }}
        >
          HOW YOU WILL BENEFIT
        </Typography>
      </Grid>
      <Grid container item xs={10} sx={{ display: matches ? "flex" : "none" }}>
        {benefits.map((item) => (
          <SingleBenefit items={item} size={4} />
        ))}
      </Grid>
      <Grid item container xs={12} sx={{ display: matches ? "none" : "block" }}>
        <Carousel controls={false} interval={null}>
          <Carousel.Item>
            <Box sx={{ pb: 5 }}>
              {benefits.slice(0, 4).map((item: String) => (
                <SingleBenefit items={item} size={12} />
              ))}
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box sx={{ pb: 5 }}>
              {benefits.slice(4, 8).map((item: String) => (
                <SingleBenefit items={item} size={12} />
              ))}
            </Box>
          </Carousel.Item>
        </Carousel>
      </Grid>
    </Grid>
  );
}
