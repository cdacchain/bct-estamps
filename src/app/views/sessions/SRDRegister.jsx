import { useTheme } from "@emotion/react";
import { LoadingButton } from "@mui/lab";
import {
  Card,
  Checkbox,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { Paragraph } from "app/components/Typography";
import useAuth from "app/hooks/useAuth";
import { Formik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Dreamer from "./dreamer.svg";
import RefreshIcon from "@mui/icons-material/Refresh";

const FlexBox = styled(Box)(() => ({ display: "flex", alignItems: "center" }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: "center" }));

const ContentBox = styled(JustifyBox)(() => ({
  height: "100%",
  padding: "32px",
  background: "rgba(0, 0, 0, 0.01)",
}));

const JWTRegister = styled(JustifyBox)(() => ({
  background: "#1A2038",
  minHeight: "100vh !important",
  "& .card": {
    maxWidth: 800,
    minHeight: 400,
    margin: "1rem",
    display: "flex",
    borderRadius: 12,
    alignItems: "center",
  },
}));

// inital login credentials
const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  username: "",
  state: "",
  remember: true,
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 character length")
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .min(6, "Password must be 6 character length")
    .required("Password is required!"),
  email: Yup.string()
    .email("Invalid Email address")
    .required("Email is required!"),
  state: Yup.string().required("Please provide the State"),
});

const states = [
  {
    name: "Andhra Pradesh",
    abbreviation: "AP",
  },
  {
    name: "Arunachal Pradesh",
    abbreviation: "AR",
  },
  {
    name: "Assam",
    abbreviation: "AS",
  },
  {
    name: "Bihar",
    abbreviation: "BR",
  },
  {
    name: "Chhattisgarh",
    abbreviation: "CT",
  },
  {
    name: "Goa",
    abbreviation: "GA",
  },
  {
    name: "Gujarat",
    abbreviation: "GJ",
  },
  {
    name: "Haryana",
    abbreviation: "HR",
  },
  {
    name: "Himachal Pradesh",
    abbreviation: "HP",
  },
  {
    name: "Jharkhand",
    abbreviation: "JH",
  },
  {
    name: "Karnataka",
    abbreviation: "KA",
  },
  {
    name: "Kerala",
    abbreviation: "KL",
  },
  {
    name: "Madhya Pradesh",
    abbreviation: "MP",
  },
  {
    name: "Maharashtra",
    abbreviation: "MH",
  },
  {
    name: "Manipur",
    abbreviation: "MN",
  },
  {
    name: "Meghalaya",
    abbreviation: "ML",
  },
  {
    name: "Mizoram",
    abbreviation: "MZ",
  },
  {
    name: "Nagaland",
    abbreviation: "NL",
  },
  {
    name: "Odisha",
    abbreviation: "OD",
  },
  {
    name: "Punjab",
    abbreviation: "PB",
  },
  {
    name: "Rajasthan",
    abbreviation: "RJ",
  },
  {
    name: "Sikkim",
    abbreviation: "SK",
  },
  {
    name: "Tamil Nadu",
    abbreviation: "TN",
  },
  {
    name: "Telangana",
    abbreviation: "TG",
  },
  {
    name: "Tripura",
    abbreviation: "TR",
  },
  {
    name: "Uttar Pradesh",
    abbreviation: "UP",
  },
  {
    name: "Uttarakhand",
    abbreviation: "UL",
  },
  {
    name: "West Bengal",
    abbreviation: "WB",
  },
];

const unionTerritories = [
  {
    name: "Andaman and Nicobar Islands",
    abbreviation: "AN",
  },
  {
    name: "Chandigarh",
    abbreviation: "CH",
  },
  {
    name: "Dadar and Nagar Haveli",
    abbreviation: "DN",
  },
  {
    name: "Daman and Diu",
    abbreviation: "DD",
  },
  {
    name: "Delhi",
    abbreviation: "DL",
  },
  {
    name: "Jammu and Kashmir",
    abbreviation: "JK",
  },
  {
    name: "Ladakh",
    abbreviation: "LA",
  },
  {
    name: "Lakshadweep",
    abbreviation: "LD",
  },
  {
    name: "Pondicherry",
    abbreviation: "PY",
  },
];

const SRDRegister = () => {
  const theme = useTheme();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (values) => {
    setLoading(true);
    const { username, email, password, state } = values;
    try {
      register(username, email, password, state);
      navigate("/");
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <JWTRegister>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <ContentBox>
              <img width="100%" alt="Register" src={Dreamer} />
            </ContentBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Box p={4} height="100%">
              <h1>State Revenue Department</h1>
              <h3>Sign Up</h3>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="username"
                      label="Username"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.username}
                      onChange={handleChange}
                      helperText={touched.username && errors.username}
                      error={Boolean(errors.username && touched.username)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      name="confirmPassword"
                      type="password"
                      label="Confirm Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      onChange={handleChange}
                      helperText={
                        touched.confirmPassword && errors.confirmPassword
                      }
                      error={Boolean(
                        errors.confirmPassword && touched.confirmPassword
                      )}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      //name="confirmPassword"
                      type="number"
                      label="Phone Number"
                      variant="outlined"
                      //onBlur={handleBlur}
                      //value={values.confirmPassword}
                      //onChange={handleChange}
                      //helperText={touched.confirmPassword && errors.confirmPassword}
                      //error={Boolean(errors.confirmPassword && touched.confirmPassword)}
                      sx={{ mb: 2 }}
                    />
                    <FormControl
                      fullWidth
                      sx={{ mb: 2 }}
                      size="small"
                      error={Boolean(errors.state && touched.state)}
                    >
                      <InputLabel id="demo-simple-select-label">
                        State
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.state}
                        label="Age"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <ListSubheader>States</ListSubheader>
                        {states.map((state) => (
                          <MenuItem key={state.name} value={state.abbreviation}>
                            {state.name}
                          </MenuItem>
                        ))}
                        <ListSubheader>Union Territories</ListSubheader>
                        {unionTerritories.map((state) => (
                          <MenuItem key={state.name} value={state.abbreviation}>
                            {state.name}
                          </MenuItem>
                        ))}
                      </Select>
                      {Boolean(errors.state && touched.state) && (
                        <FormHelperText>{errors.state}</FormHelperText>
                      )}
                    </FormControl>
                    {/* <TextField
                      fullWidth
                      size="small"
                      name="pincode"
                      type="number"
                      label="Pincode"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.pincode}
                      onChange={handleChange}
                      helperText={touched.pincode && errors.pincode}
                      error={Boolean(errors.pincode && touched.pincode)}
                      sx={{ mb: 2 }}
                    /> */}
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          sx={{
                            border: "1px solid black",
                            letterSpacing: 5,
                            fontWeight: "bolder",
                            flexGrow: 1,
                          }}
                        >
                          syer5
                        </Typography>
                        <RefreshIcon />
                      </Box>
                      <TextField
                        size="small"
                        fullWidth
                        placeholder="Enter Captcha"
                      />
                    </Box>

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ mb: 2, mt: 3 }}
                    >
                      Regiser
                    </LoadingButton>

                    <Paragraph>
                      Already have an account?
                      <NavLink
                        to="/session/srdlogin"
                        style={{
                          color: theme.palette.primary.main,
                          marginLeft: 5,
                        }}
                      >
                        Login
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </JWTRegister>
  );
};

export default SRDRegister;
