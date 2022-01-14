import { Grid, Box, Typography } from "@mui/material";
import { colors } from "../../assets/images/colors";

const SingleItem = ({ item }: any) => {
  return (
    <Grid item xs={4}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          ml: "20%",
          mr: "10%",
          my: "10%",
        }}
      >
        <Box sx={{ display: "inline-block", mb: "10%" }}>
          <Typography
            sx={{
              fontFamily: "inherit",
              color: colors.gray,
              fontWeight: 500,
              fontSize: "large",
            }}
          >
            {item.title}
          </Typography>
          <div
            style={{
              display: "block",
              marginTop: "4px",
              background: colors.darkBlue,
              height: "4px",
              width: "80%",
            }}
          ></div>
        </Box>

        {item.topics.map((child: any) => (
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: "small",
              color: colors.gray,
            }}
          >
            ■ {child}
          </Typography>
        ))}
      </Box>
    </Grid>
  );
};
export default function Course(props: any) {
  const { Courses } = props;

  return (
    <Grid item container>
      {Courses.map((item: any, index: number) => (
        <SingleItem item={item} />
      ))}
    </Grid>
  );
}
