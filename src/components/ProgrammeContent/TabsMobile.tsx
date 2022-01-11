import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Grid, Typography, Box } from "@mui/material";
import { colors } from "../../assets/images/colors";

const SingleItem = ({ item }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        my: 7,
        mx: 7,
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
            marginTop: "10%",
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
  );
};
export default function TabsMobile(props: any) {
  const { items, name } = props;
  return (
    <Grid container item xs={12}>
      <Grid item xs={12} sx={{ backgroundColor: "#DADADA", py: 1 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "inherit",
            fontWeight: 600,
            fontSize: "x-large",
            color: colors.darkBlue,
          }}
        >
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ justifyContent: "center" }}>
        <Carousel interval={null} variant="dark" controls={false}>
          {items.map((item: any) => (
            <Carousel.Item>
              <SingleItem item={item} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
}
