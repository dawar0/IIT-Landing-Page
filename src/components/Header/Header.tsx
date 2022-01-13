import React from "react";
import BackgroundImage from "../../assets/images/Background.png";

import { Grid, Typography, Button, Box, useMediaQuery } from "@mui/material";

import { colors } from "../../assets/images/colors";
import Logo from "../../assets/images/logo.png";

import Form from "../Form";
export default function Header() {
  const matches = useMediaQuery("(min-width:600px)");
  const [open, setOpen] = React.useState(false);
  const [buttonSticky, setButtonSticky] = React.useState(false);
  const buttonRef = React.useRef(null);
  function handleScroll() {
    // @ts-ignore: Object is possibly 'null'.
    var sticky = buttonRef?.current.offsetTop;
    if (window.pageYOffset > sticky) {
      setButtonSticky(true);
    } else {
      setButtonSticky(false);
    }
  }
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Grid
        container
        sx={{
          backgroundImage: matches ? `url(${BackgroundImage})` : "none",
          height: matches ? "100vh" : "70vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "45%",
          backgroundPosition: "10% 70% ",
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
                // color: matches ? colors.white : "#000000",
                color: colors.gray,
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
                fontWeight: 700,
                fontSize: "x-large",
                textAlign: matches ? "left" : "center",
              }}
            >
              2 Year MBA in Analytics for Working Professionals
            </Typography>
            {!matches && (
              <Box
                sx={{
                  alignContent: "center",
                  display: "grid",
                  justifyContent: "center",
                }}
              >
                <img
                  src={BackgroundImage}
                  alt={"Background Image"}
                  style={{ width: 300 }}
                />
              </Box>
            )}
            <Typography
              sx={{
                fontFamily: "inherit",
                color: "#666666",
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

            <Box
              ref={buttonRef}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: matches ? "flex-start" : "center",
              }}
            >
              <Box
                sx={{
                  alignSelf: matches ? "flex-start" : "center",
                  position: buttonSticky && !matches ? "fixed" : "relative",
                  p: buttonSticky && !matches ? 1 : 0,
                  top: "0",
                  zIndex: 99,
                }}
              >
                <Button onClick={() => setOpen(true)}>APPLY NOW</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Form open={open} setOpen={setOpen} />
    </>
  );
}
