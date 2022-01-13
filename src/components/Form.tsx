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
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import { API, PDFLocation } from "./API";
import CloseIcon from "@mui/icons-material/Close";

import { colors } from "../assets/images/colors";
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
  const [checked, setChecked] = React.useState(false);
  const [checkError, setCheckError] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(true);
  const [phoneValid, setPhoneValid] = React.useState(true);

  function isNum(val: any) {
    return !isNaN(val);
  }
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
    if (!formObject["email"]?.match(validRegex)) {
      flag = false;
      tempError = { ...tempError, ...{ email: true } };
      setEmailValid(false);
      setErrorObject({ ...errorObject, ...tempError });
    }
    if (formObject.phone?.length !== 10 || !isNum(formObject.phone)) {
      flag = false;
      tempError = { ...tempError, ...{ phone: true } };
      setPhoneValid(false);
      setErrorObject({ ...errorObject, ...tempError });
    }
    if (!checked) {
      flag = false;
      setCheckError(true);
    }
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
  };

  const handleChange = (e: any) => {
    const tempObject: { [key: string]: any } = {};
    const tempError: { [key: string]: any } = {};
    tempError[e.target.name] = false;
    setErrorObject({ ...errorObject, ...tempError });

    tempObject[e.target.name] = e.target.value;
    setFormObject({ ...formObject, ...tempObject });

    if (e.target.name === "email" && e.target.value?.match(validRegex)) {
      setEmailValid(true);
    }

    if (e.target.name === "phone" && e.target.value?.length === 10) {
      setPhoneValid(true);
    }
  };

  const experience = ["5-10 Years", "10-15 Years", "15+ Years"];
  const cities = [
    "Mumbai",
    "Delhi NCR",
    "Banglore",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Others",
  ];

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
              helperText={emailValid ? "" : "Enter correct email"}
              fullWidth
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ p: 1 }}>
            <TextField
              autoComplete="tel-national"
              label="Phone Number"
              name="phone"
              type="tel"
              value={formObject?.phone}
              error={errorObject.phone}
              onChange={handleChange}
              helperText={phoneValid ? "" : "Enter a valid 10 digit mobile no."}
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ p: 1 }}>
            <TextField
              label="City"
              name="city"
              value={formObject?.city}
              error={errorObject.city}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              select
            >
              {cities.map((option: any) => (
                <MenuItem value={option} key={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
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
          <Box sx={{ p: 1 }}>
            <FormControlLabel
              control={
                <Checkbox checked={checked} onChange={() => setChecked(true)} />
              }
              label={
                <Typography
                  sx={{
                    color: checkError ? "red" : colors.gray,
                    fontSize: "small",
                  }}
                >
                  You agree to our terms and conditions and our Privacy Policy.{" "}
                </Typography>
              }
            />
            <Typography sx={{ pt: 1, color: colors.gray, fontSize: "small" }}>
              Disclaimer:By submitting my contact details here, I override my
              NDNC registration and authorise TimesTSW and its authorised
              representatives to contact me.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
            <Button onClick={handleSubmit}>DOWNLOAD BROCHURE</Button>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
}
