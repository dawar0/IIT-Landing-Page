import React from "react";
import { Grid } from "@mui/material";
import EligibilityCriteria from "./EligibilityCriteria";
import ApplicationCloseIn from "./ApplicationCloseIn";
import ApplicationProcess from "./ApplicationProcess";
import AdvanceYourCareer from "./AdvanceYourCareer";
export default function Footer() {
  return (
    <Grid container>
      <Grid container item lg={8} xs={12}>
        <EligibilityCriteria />
      </Grid>
      <Grid item lg={4} xs={12} sx={{ px: 8, pb: 2, pt: 8 }}>
        <ApplicationCloseIn />
      </Grid>
      <Grid container item lg={8} xs={12}>
        <ApplicationProcess />
      </Grid>
      <Grid container item lg={4} xs={12} sx={{ justifyContent: "center" }}>
        <AdvanceYourCareer />
      </Grid>
    </Grid>
  );
}
