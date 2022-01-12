import React from "react";

import {
  Grid,
  Typography,
  Button,
  Box,
  Dialog,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";

import { API, PDFLocation } from "./API";
import CloseIcon from "@mui/icons-material/Close";
interface FormInterface {
  open: any;
  setOpen: any;
}
export default function Form({ open, setOpen }: FormInterface) {
  const errorObjectInitial: { [key: string]: any } = {
    name: false,
    phone: false,
    email: false,
    city: false,
    experience: false,
  };

  const [errorObject, setErrorObject] = React.useState(errorObjectInitial);
  const formObjectInitial: { [key: string]: any } = {
    name: null,
    phone: null,
    email: null,
    city: null,
    experience: null,
  };
  const [formObject, setFormObject] = React.useState(formObjectInitial);
  const handleSubmit = () => {
    let tempError: { [key: string]: any } = {};
    let flag = true;
    for (let i in formObject) {
      if (formObject[i] == null || !formObject[i].length) {
        tempError[i] = true;
        flag = false;
      }
    }
    setErrorObject({ ...errorObject, ...tempError });
    fetch(
      "https://timestsw.com/wp-content/uploads/2021/11/IIM_Kashipur_EMBAA-Brochure.pdf"
    );
    if (flag) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject),
      };
      fetch(API, requestOptions).then((e) => {
        fetch(PDFLocation);
      });
    }
    console.log(errorObject);
  };
  const handleChange = (e: any) => {
    const tempObject: { [key: string]: any } = {};
    const tempError: { [key: string]: any } = {};
    tempError[e.target.name] = false;
    setErrorObject({ ...errorObject, ...tempError });

    tempObject[e.target.name] = e.target.value;
    setFormObject({ ...formObject, ...tempObject });
  };
  const experience = [
    "<1 Years",
    "2-3 Years",
    "3-4 Years",
    "4-5 Years",
    "5-6 Years",
    "6-7 Years",
    "7-8 Years",
    "8-9 Years",
    "9-10 Years",
    ">10 Years",
  ];

  React.useEffect(() => {
    console.log(formObject);
    console.log(errorObject);
  }, [formObject, errorObject]);
  return (
    <Dialog open={open}>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", pb: 2, px: 1, pt: 1 }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "grid",
            justifyItems: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box sx={{ justifySelf: "end" }}>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography
            sx={{ textAlign: "center", fontFamily: "inherit", px: 1 }}
          >
            Submit the below details to get a brochure
          </Typography>
          <Typography sx={{ textAlign: "center" }}></Typography>
        </Grid>
        <Grid item xs={10} sx={{ justifySelf: "center" }}>
          <Box sx={{ p: 1 }}>
            <TextField
              label="Name"
              autoComplete="name"
              name="name"
              variant="outlined"
              fullWidth
              error={errorObject.name}
              value={formObject?.name}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ p: 1 }}>
            <TextField
              autoComplete="Email"
              name="email"
              label="Email"
              variant="outlined"
              value={formObject?.email}
              error={errorObject.email}
              fullWidth
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ p: 1 }}>
            <TextField
              autoComplete="tel-national"
              label="Phone Number"
              name="phone"
              value={formObject?.phone}
              error={errorObject.phone}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ p: 1 }}>
            <TextField
              autoComplete="address-level2"
              label="City"
              name="city"
              value={formObject?.city}
              error={errorObject.city}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ p: 1 }}>
            <TextField
              label="Experience"
              name="experience"
              onChange={handleChange}
              value={formObject?.experience}
              error={errorObject.experience}
              variant="outlined"
              fullWidth
              select
            >
              {experience.map((option: any) => (
                <MenuItem value={option} key={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
            <Button onClick={handleSubmit}>DOWNLOAD BROCHURE</Button>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
}
