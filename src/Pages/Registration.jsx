import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [password, setPassword] = useState("");
  const [firstnameError, setFirstNameError] = useState(false);
  const [lastnameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
     firstname: "",
     lastname: "",
     email: ""
  });

  const handleFirstName = (event) => {
    const first_name = event.target.value;
    const isValidFirstName = /^[a-zA-Z]+$/.test(first_name);
    setFirstNameError(!isValidFirstName);
    isValidated();
    setFormData({...formData, firstname:first_name});
  };
  const handleLastName = (event) => {
    const last_name = event.target.value;
    const isValidLastName = /^[a-zA-Z]+$/.test(last_name);
    setLastNameError(!isValidLastName);
    isValidated();
    setFormData({...formData, lastname:last_name});
  };
  const handleEmailChange = (event) => {
    const email = event.target.value;
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    setEmailError(!isValidEmail);
    isValidated();
    setFormData({...formData, email:email});
  };
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (newPassword.length < 8 || newPassword.length > 15) {
      setPasswordError("Password must be between 8 and 15 characters long");
    } else {
      setPasswordError("");
    }
    isValidated();
  };

  const handleConfPassChange = (event) => {
    const newConfPassword = event.target.value;
    setConfirmPassword(newConfPassword);

    if (password !== newConfPassword) {
      setConfirmPasswordError("Password does not match");
    } else {
      setConfirmPasswordError("");
    }
    isValidated();
  };

  const isValidated = () => {
    setIsValid(
      !firstnameError &&
        !lastnameError &&
        !emailError &&
        !passwordError &&
        !confirmPasswordError
    );
  };

  

  const navigate = useNavigate();
  const handleSubmit = (event) => {
     event.preventDefault();
     console.log(formData);
     navigate(`/profile?first_name=${formData.firstname}&last_name=${formData.lastname}&email=${formData.email}`);
   };
  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          "& > :not(style)": { m: 1, width: "45ch" },
          marginTop: "-100px",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            required
            error={firstnameError}
            onChange={handleFirstName}
            helperText="Letters only"
            sx={{ marginRight: "8px" }}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            error={lastnameError}
            onChange={handleLastName}
            helperText="Letters only"
            required
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          required
          helperText="Example: abc@abc.com"
          error={emailError}
          onChange={handleEmailChange}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          error={!!passwordError}
          helperText={passwordError}
          onChange={handlePasswordChange}
          required
        />
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="confirm-password"
          required
          error={!!confirmPasswordError}
          helperText={confirmPasswordError}
          onChange={handleConfPassChange}
        />
        <Button type="submit" variant="contained" disabled={!isValidated}>Save</Button>
      </Box>
    </>
  );
}

export default Registration;
