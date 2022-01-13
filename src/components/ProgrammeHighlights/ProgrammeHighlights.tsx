import { Box, Grid, Typography } from "@mui/material";
import SingleHighlight from "./SingleHighlight";
import { colors } from "../../assets/images/colors";
import ComprehensiveLearningImage from "../../assets/images/ComprehensiveLearning.svg";
import FlexibleCurriculumImage from "../../assets/images/FlexibleCurriculum.svg";
import AlumniStatusImage from "../../assets/images/AlumniStatus.svg";
import RemoteLearningImage from "../../assets/images/RemoteLearning.svg";
import RobustPedagogyImage from "../../assets/images/RobustPedagogy.svg";
import BlendedLearningImage from "../../assets/images/BlendedLearning.svg";

export default function ProgrammeHighlights() {
  const highlights = [
    {
      title: "Comprehensive Learning",
      text: "900 contact hours spread across six terms over 24 months",
      image: ComprehensiveLearningImage,
    },
    {
      title: "Flexible Curriculum",
      text: "Participants can choose their credits from a poolof 40+ electives across 9 domains",
      image: FlexibleCurriculumImage,
    },
    {
      title: "IIM Kashipur Executive Alumni Status",
      text: "Access to a global network of peers and alumni network to unlock new career opportunities",
      image: AlumniStatusImage,
    },
    {
      title: "Remote and Flexible Learning",
      text: "A flexible and location-independent programme specifically designed for working professionals",
      image: RemoteLearningImage,
    },
    {
      title: "Robust Pedagogy",
      text: "Immersive pedagogy comprising case studies, simulations, peer learning, industry workshops, and capstone projects",
      image: RobustPedagogyImage,
    },
    {
      title: "Blended Learning",
      text: "A combination of online and on-campus learning with IIM Kashipur faculty and industry experts",
      image: BlendedLearningImage,
    },
  ];

  return (
    <Box>
      <Grid container sx={{ p: 2, my: 4 }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "inherit",
              fontWeight: 600,
              fontSize: "x-large",
              color: colors.gray,
            }}
          >
            PROGRAMME HIGHLIGHTS
          </Typography>
        </Grid>
        {highlights.map((highlight) => (
          <SingleHighlight {...highlight} />
        ))}
      </Grid>
    </Box>
  );
}
