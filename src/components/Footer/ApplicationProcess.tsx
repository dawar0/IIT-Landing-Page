import { Image, Title } from "./Misc";
import { Grid, Box } from "@mui/material";
import line from "../../assets/images/line.png";
import application from "../../assets/images/application.svg";
import test from "../../assets/images/test.svg";
import personalInterview from "../../assets/images/personalInterview.svg";
import { colors } from "../../assets/images/colors";
export default function ApplicationProcess() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Title>APPLICATION PROCESS</Title>
      </Grid>
      <Grid
        item
        container
        xs={12}
        spacing={1}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Grid item xs={2}>
          <Image src={application} alt={"Application"} />
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={line} alt={"line"} style={{ width: 50 }} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          {" "}
          <Image src={test} alt={"Test"} />
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={line} alt={"line"} style={{ width: 50, height: 50 }} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Image src={personalInterview} alt={"Interview"} />
        </Grid>
      </Grid>
    </Grid>
  );
}
