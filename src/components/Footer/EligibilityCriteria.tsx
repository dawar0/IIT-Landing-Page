import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { colors } from "../../assets/images/colors";
import entrepreneurs from "../../assets/images/entrepreneurs.svg";
import executives from "../../assets/images/executives.svg";
import juniorExecutives from "../../assets/images/juniorExecutives.svg";
import graduates from "../../assets/images/graduates.svg";
import { Title } from "./Misc";

const criteria = [
  {
    title: "Executives",
    img: executives,
    text: "Working executives within minimum three years of experience, seeking to advance in their career with a flexible Executive MBA in Analytics.",
  },
  {
    title: "Entrepreneurs",
    img: entrepreneurs,
    text: "Entrepreneurs and Business owners who want to apply analytical insights in their business practices.",
  },
  {
    title: "Graduates",
    img: graduates,
    text: "Graduates from different domains who want to pursue a career at the intersection of analytics and management.",
  },
  {
    title: "Junior Executives",
    img: juniorExecutives,
    text: "Junior to mid-level executives looking to build a career in analytics.",
  },
];
export default function EligibilityCriteria() {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box sx={{ px: matches ? 8 : 2, pb: 2, pt: 8 }}>
      <Title>ELIGIBILITY CRITERIA</Title>
      <Grid item container>
        {criteria.map((item) => (
          <Grid
            item
            xs={6}
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              px: matches ? 5 : 1,
              py: 2,
            }}
          >
            <Box
              sx={{
                p: 1,
                borderRadius: "50%",
                border: "3px solid",
                borderColor: colors.gray,
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: 50, height: 50 }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "inherit",
                color: colors.gray,
                fontWeight: "bold",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "inherit",
                color: colors.gray,
                textAlign: "center",
                fontSize: 13,
              }}
            >
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
