import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { StyledButton, WrapperDiv } from "../Styles/Container.styles";
import { Span, P } from "../Styles/elements.style";
import "./Dialog.css";
import referralIcon from "../../Images/referral.png";
import {
  createStyles,
  Grid,
  Link,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Image } from "react-bootstrap";
const CustomTextField = withStyles({
  root: {
    "& .MuiFormLabel-root": {
      color: "#FBA234", // Text color
      marginBottom: "10px",
      marginLeft: "10px",
      fontFamily: "Poppins",
      fontSize: "13px",
      lineHeight: "20px",
      letterSpacing: "0.02rem",
    },
    "& .MuiInput-input": {
      color: "black", // Text color
      marginBottom: "10px",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#FBA922", // Semi-transparent underline
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#FBA922", // Solid underline on hover
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FBA922", // Solid underline on focus
    },
    "& MuiInputLabel": {
      color: "#FBA922",
    },
  },
})(TextField);
export default function FormDialog({ dialog, toggle }) {
  const [open, setOpen] = React.useState(dialog);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [signUp, setSignUp] = useState(false);
  const newSignUp = () => {
    setSignUp(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSignIn = () => {
    console.log("signed in success");
  };
  return (
    <div>
      <Dialog
        open={dialog}
        onClose={toggle}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <Span>Log In</Span>
          <StyledButton
            float="right"
            border="1px solid black"
            height="36px"
            width="24px"
            color="black"
            borderRadius="50%"
            onClick={toggle}
          >
            x
          </StyledButton>
        </DialogTitle>
        <DialogContent dividers="true">
          {!signUp ? (
            <FormControl>
              <CustomTextField
                margin="normal"
                id="email"
                label="Phone Number"
                name="email"
                autoComplete="email"
              />
              <CustomTextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <StyledButton
                onClick={handleSignIn}
                borderRadius="5px"
                width="100%"
                backgroundColor="#FBA922"
                margin="20px auto"
              >
                Sign In
              </StyledButton>
              <WrapperDiv width="417px">
                <Span margin="0 0 0 10px">Don't Have Account?</Span>
                <StyledButton
                  onClick={() => setSignUp(true)}
                  margin="0 auto"
                  padding="0"
                  color="#FBA922"
                >
                  Sign up
                </StyledButton>
              </WrapperDiv>
            </FormControl>
          ) : (
            <FormControl>
              <WrapperDiv width="417px">
                <CustomTextField
                  fullWidth
                  margin="normal"
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                />
                <CustomTextField
                  fullWidth
                  margin="normal"
                  id="email"
                  label="Email "
                  name="email"
                  autoComplete="email"
                />
                <CustomTextField
                  fullWidth
                  margin="normal"
                  id="phone"
                  label="Phone No"
                  name="phone"
                  autoComplete="phone"
                />
                <CustomTextField
                  fullWidth
                  margin="normal"
                  id="password"
                  type="password"
                  label="Password"
                  name="password"
                  autoComplete="current-password"
                />
                <WrapperDiv width="100%" margin="20px 0 0 0">
                  <Grid container spacing={2}>
                    <Grid item lg={2}>
                      <img src={referralIcon} alt="refreralcode" />
                    </Grid>
                    <Grid item lg={10}>
                      <Span
                        fontFamily="Jost"
                        fontSize="16px"
                        lineHeight="28px"
                        fontWeight="500"
                        color="#2c2d32"
                      >
                        Referral Code
                      </Span>
                      <Span
                        margin="0 0 0 51%"
                        fontSize="11px"
                        lineHeight="16px"
                      >
                        <Link
                          underLineAlways
                          color="inherit"
                          component="button"
                        >
                          view options
                        </Link>
                      </Span>
                      <P
                        color="#777777"
                        fontFamily="Poppins"
                        fontSize="11px"
                        lineHeight="16px"
                      >
                        Add a personalized gift note to your order
                      </P>
                    </Grid>
                  </Grid>
                  <StyledButton
                    onClick={handleSignIn}
                    borderRadius="5px"
                    width="100%"
                    backgroundColor="#FBA922"
                    margin="20px auto"
                  >
                    Sign Up
                  </StyledButton>
                </WrapperDiv>
                <Span margin="0 0 0 10px">Already Have Account?</Span>
                <StyledButton
                  onClick={() => setSignUp(false)}
                  margin="0 auto"
                  padding="0"
                  color="#FBA922"
                >
                  Sign In
                </StyledButton>
              </WrapperDiv>
            </FormControl>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
