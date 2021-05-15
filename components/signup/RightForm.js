import { FormControlLabel, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Link from "next/link";
import { useState } from "react";
import { primary } from "../../styles/pallete";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";

import {
  Input,
  StyledButton,
  StyledForm,
  Wrapper,
  Formheading,
  CheckBox,
} from "./SignupComp";
import styled from "styled-components";
import validator from "validator";

function RightForm() {
  const [check, setCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const handleCheck = () => {
    setCheck((check) => !check);
  };
  const formOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [notify, setNotify] = useState({ open: false, message: "", type: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      form.firstname === "" ||
      form.lastname === "" ||
      form.email === "" ||
      form.mobile === "" ||
      form.password === "" ||
      form.confirmPassword === ""
    ) {
      setNotify({ open: true, message: "Fill all the fields", type: "error" });
    } else if (!validator.isEmail(form.email)) {
      setNotify({ open: true, message: "Invalid Email", type: "error" });
    } else if (form.mobile.length !== 10) {
      setNotify({
        open: true,
        message: "Invalid Mobile Number",
        type: "error",
      });
    } else if (form.password !== form.confirmPassword) {
      setNotify({
        open: true,
        message: "Passwords not matched",
        type: "error",
      });
    } else {
      console.log("call API!!");
    }

    const newUser = {
      firstname: form.firstname,
      lastname: form.lastname,
      email: form.email,
      mobile: form.mobile,
      password: form.password,
    };

    console.log(newUser);
  };
  return (
    <Wrapper direction="column" style={{ paddingRight: "35px" }}>
      <Formheading
        size="42"
        color={primary.cherry}
        weight="6"
        style={{ margin: "25px 0 20px" }}
      >
        Let's get you <br /> started!
      </Formheading>
      <Formheading
        size="32"
        color={primary.formDarkGrey}
        weight="6"
        style={{ marginBottom: "20px" }}
      >
        Sign Up
      </Formheading>
      <StyledForm>
        <Wrapper direction="row">
          <Input
            onChange={formOnChange}
            name="firstname"
            value={form.firstname}
            formdark={primary.formdark}
            formgrey={primary.formgrey}
            width="1"
            label="First Name"
            valid={form.firstname.length > 0}
          />
          <Input
            onChange={formOnChange}
            name="lastname"
            value={form.lastname}
            formdark={primary.formdark}
            formgrey={primary.formgrey}
            width="1"
            label="Last Name"
            valid={form.lastname.length > 0}
          />
        </Wrapper>

        <Wrapper direction="row">
          <Input
            onChange={formOnChange}
            name="email"
            value={form.email}
            formdark={primary.formdark}
            formgrey={primary.formgrey}
            width="1"
            label="Email Address"
            type="email"
            valid={validator.isEmail(form.email)}
          />
          <Input
            onChange={formOnChange}
            name="mobile"
            value={form.mobile}
            formdark={primary.formdark}
            formgrey={primary.formgrey}
            width="1"
            label="Mobile Number"
            type="number"
            valid={form.mobile.length === 10}
          />
        </Wrapper>

        <Wrapper direction="column">
          <PasswordWrapper>
            <Input
              onChange={formOnChange}
              name="password"
              value={form.password}
              formdark={primary.formdark}
              formgrey={primary.formgrey}
              width="2"
              label="Password"
              type={showPassword ? "text" : "password"}
              valid={form.password.length >= 8}
            />
            {showPassword ? (
              <Eye onClick={() => setShowPassword(false)} />
            ) : (
              <CloseEye onClick={() => setShowPassword(true)} />
            )}
          </PasswordWrapper>

          <Input
            onChange={formOnChange}
            name="confirmPassword"
            value={form.confirmPassword}
            formdark={primary.formdark}
            formgrey={primary.formgrey}
            width="2"
            label="Re-enter Password"
            type="password"
            valid={
              form.password.length >= 8 &&
              form.password === form.confirmPassword
            }
          />
          <FormControlLabel
            control={
              <CheckBox
                checked={check}
                onChange={handleCheck}
                name="checkedB"
                color={primary.cherry}
              />
            }
            label="Keep me logged in"
          />
        </Wrapper>
        <StyledButton width="4" borderColor={primary.cherry} onClick={onSubmit}>
          SIGN UP
        </StyledButton>
        <Formheading
          size="14"
          color={primary.formdark}
          weight="4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Already on Skilzen? Go to
          <Link href="/auth/signin">
            <a style={{ color: primary.cherry, marginLeft: "3px" }}>Sign in</a>
          </Link>
        </Formheading>
      </StyledForm>
      <Snackbar
        open={notify.open}
        autoHideDuration={3000}
        onClose={() => setNotify({ open: false, message: "", type: "" })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          variant="filled"
          onClose={() => setNotify({ open: false, message: "", type: "" })}
          severity={notify.type}
        >
          {notify.message}
        </Alert>
      </Snackbar>
    </Wrapper>
  );
}

export default RightForm;

const PasswordWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;
const Eye = styled(FaRegEye)`
  color: ${primary.cherry};
  position: absolute;
  top: 1.2em;
  right: 0;
  cursor: pointer;
`;
const CloseEye = styled(RiEyeCloseLine)`
  color: ${primary.cherry};
  position: absolute;
  top: 1.2em;
  right: 0;
  cursor: pointer;
`;
