import React from "react";
import { Grid, Tabs, Tab, useMediaQuery, Box } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { colors } from "../../assets/images/colors";

import {
  FirstYearCourse,
  SecondYearCourse,
  TentativeListComponent,
} from "./Courses";

const NewTabs = styled(Tabs)({
  borderBottom: `0px`,
  background: "#dadada",
  "& .MuiTabs-indicator": {
    backgroundColor: colors.darkBlue,
    height: 5,
  },
});
const NewTab = styled(Tab)({
  fontFamily: "inherit",
  color: colors.gray,
  "&.Mui-selected": {
    color: colors.darkBlue,
    fontWeight: 700,
  },
});

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsDesktop() {
  const [value, setValue] = React.useState(0);

  function handleChange(event: any, newValue: any): any {
    setValue(newValue);
  }
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Grid item xs={12} sx={{ display: matches ? "flex" : "none" }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <NewTabs
            value={value}
            onChange={handleChange}
            centered
            variant="fullWidth"
          >
            <NewTab label="FIRST YEAR COURSES" {...a11yProps(0)} />
            <NewTab label="SECOND YEAR COURSES" {...a11yProps(1)} />
            <NewTab label="TENTATIVE LIST OF ELECTIVES" {...a11yProps(2)} />
          </NewTabs>
        </Box>
        <TabPanel value={value} index={0}>
          <FirstYearCourse />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SecondYearCourse />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TentativeListComponent />
        </TabPanel>
      </Box>
    </Grid>
  );
}
