import { Title } from "./Misc";
import { Grid, Box, Typography, Button } from "@mui/material";
import { colors } from "../../assets/images/colors";
export default function AdvanceYourCareer() {
  return (
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
        <Button variant="contained">DOWNLOAD BROCHURE</Button>
      </Box>
    </Box>
  );
}
