import { Grid, Box, Typography } from "@mui/material";
import { colors } from "../../assets/images/colors";

interface Highlight {
  title: string;
  text: string;
  image: string;
}

export default function SingleHighlight({ title, text, image }: Highlight) {
  return (
    <Grid
      item
      xs={6}
      md={4}
      sx={{
        textAlign: "center",
        p: 1,
      }}
    >
      <img src={image} alt={title} style={{ width: 100 }} />
      <Typography
        sx={{ fontFamily: "inherit", color: colors.gray, fontWeight: 600 }}
      >
        {title}
      </Typography>
      <Typography
        sx={{ fontFamily: "inherit", color: colors.gray, fontSize: "small" }}
      >
        {text}
      </Typography>
    </Grid>
  );
}
