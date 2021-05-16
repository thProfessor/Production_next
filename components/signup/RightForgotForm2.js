import { FormControlLabel, Snackbar } from "@material-ui/core";

import { useState } from "react";
import styled from "styled-components";
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

import { Alert } from "@material-ui/lab";

function RightForgotForm2() {
  const [check, setCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    code: "",
    password: "",
    reenterpassword: "",
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
      form.code !== "" ||
      form.password !== "" ||
      form.reenterpassword !== ""
    ) {
      setNotify({ open: true, message: "Fill all the fields", type: "error" });
    } else {
      const reset = {
        code: form.code,
        password: form.password,
      };
      console.log(reset);
    }
  };
  return (
    <Wrapper direction="column" style={{ paddingRight: "45px" }}>
      <Formheading
        size="42"
        color={primary.cherry}
        weight="6"
        style={{ margin: "20px 0" }}
      >
        Almost Done!
      </Formheading>
      <Formheading
        size="32"
        color={primary.formDarkGrey}
        weight="6"
        style={{ margin: "30px 0" }}
      >
        Password Reset
      </Formheading>
      <StyledForm>
        <Input
          onChange={formOnChange}
          name="code"
          value={form.code}
          formdark={primary.formdark}
          formgrey={primary.formgrey}
          width="2"
          label="Verification Code"
          placeholder="4-digit code"
          type="number"
        />
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
            valid={form.password.length > 0}
          />
          {showPassword ? (
            <Eye onClick={() => setShowPassword(false)} />
          ) : (
            <CloseEye onClick={() => setShowPassword(true)} />
          )}
        </PasswordWrapper>

        <Input
          onChange={formOnChange}
          name="reenterpassword"
          value={form.reenterpassword}
          formdark={primary.formdark}
          formgrey={primary.formgrey}
          width="2"
          label="Re-enter Password"
          type="password"
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

        <StyledButton width="4" borderColor={primary.cherry} onClick={onSubmit}>
          Save
        </StyledButton>
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

export default RightForgotForm2;

const A = styled.a`
  color: ${primary.cherry};
  margin-left: "3px";
  cursor: pointer;
`;
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
