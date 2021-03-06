import { useState } from "react";

import { Grid, Box, Typography, Button, useMediaQuery } from "@mui/material";

import Form from "../Form";

import { Title } from "./Misc";
import { colors } from "../../assets/images/colors";

export default function AdvanceYourCareer() {
  const matches = useMediaQuery("(min-width:600px)");
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          px: 3,
          py: 1,
        }}
      >
        <Title>ADVANCE YOUR CAREER</Title>

        <Typography
          sx={{
            pt: 2,
            fontFamily: "inherit",
            textAlign: "center",
            fontSize: 12,
            color: colors.gray,
          }}
        >
          Apply for this course offered by IIM Kashipur{" "}
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            textAlign: "center",
            fontSize: 12,
            fontWeight: 600,
            color: colors.gray,
          }}
        >
          EXECUTIVE MASTER OF BUSINESS ADMINISTRATION (ANALYTICS){" "}
        </Typography>
        <Box sx={{ justifyContent: "center", display: "flex", py: 3 }}>
          {matches && (
            <Button onClick={() => setOpen(true)} variant="contained">
              APPLY NOW
            </Button>
          )}
        </Box>
      </Box>
      <Form open={open} setOpen={setOpen} />
    </>
  );
}
