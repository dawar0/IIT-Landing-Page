import React from "react";
import BackgroundImage from "../../assets/images/Background.png";

import { Grid, Typography, Button, Box, useMediaQuery } from "@mui/material";

import { colors } from "../../assets/images/colors";
import Logo from "../../assets/images/logo.png";

import Form from "../Form";
export default function Header() {
  const matches = useMediaQuery("(min-width:600px)");
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Grid
        container
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          height: matches ? "100vh" : "70vh",
          backgroundSize: "cover",
          backgroundPosition: "70% 50%",
          display: "flex",
        }}
      >
        <Grid item md={12} sx={{ mt: 4, mb: 0, mx: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", width: "15%" }}>
            <img
              src={Logo}
              alt={"IIT Logo"}
              style={{ width: 70, height: 60, padding: "2%" }}
            />
            <Typography
              sx={{
                color: matches ? colors.white : "#000000",
                fontFamily: "inherit",
                fontSize: "small",
                fontWeight: "bold",
              }}
            >
              INDIAN INSTIUTE OF MANAGEMENT KASHIPUR
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          sx={{ justifySelf: "end", ml: matches ? "60%" : "0%" }}
        >
          <Box
            sx={{
              p: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "inherit",
                color: colors.darkBlue,
                fontWeight: 600,
                fontSize: "medium",
                textAlign: matches ? "left" : "center",
              }}
            >
              IIM Kashipur Offers
            </Typography>
            <Typography
              sx={{
                fontFamily: "inherit",
                color: colors.darkBlue,
                fontWeight: 700,
                fontSize: "x-large",
                textAlign: matches ? "left" : "center",
              }}
            >
              EXECUTIVE MASTER OF BUSINESS ADMINISTRATION (ANALYTICS)
            </Typography>
            <Typography
              sx={{
                fontFamily: "inherit",
                color: colors.gray,
                fontSize: "small",
                py: 1,
                px: matches ? 0 : 2,
                textAlign: matches ? "left" : "center",
              }}
            >
              Course Starts:{" "}
              <p style={{ fontWeight: "bold", display: "inline-block" }}>
                11th 12th April, 2022
              </p>{" "}
              | Admission:{" "}
              <p style={{ fontWeight: "bold", display: "inline-block" }}>
                Open
              </p>
            </Typography>
            <Box sx={{ alignSelf: matches ? "flex-start" : "center" }}>
              <Button onClick={() => setOpen(true)}>DOWNLOAD BROCHURE</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Form open={open} setOpen={setOpen} />
    </>
  );
}
