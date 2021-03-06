import { FormControlLabel, Snackbar } from "@material-ui/core";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { primary } from "../../styles/pallete";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";

import { Input, StyledForm, Wrapper, CheckBox, Error } from "./SignupComp";
import { Typography, StyledButton } from "../globalUi/Ui";
import validate from "../../utility/validation/validateInfo";
import useForm from "../../utility/validation/useForm";

function RightSignInForm() {
  const [check, setCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // form validation
  const { formOnChange, onSubmit, form, errors } = useForm(validate, "signin");

  return (
    <Wrapper direction="column" style={{ paddingRight: "8em" }}>
      <Typography
        size="42"
        color={primary.cherry}
        weight="6"
        style={{ margin: "3em 0 0" }}
      >
        Welcome Back!
      </Typography>
      <Typography
        size="32"
        color={primary.formDarkGrey}
        weight="6"
        style={{ margin: "0.8em 0" }}
      >
        Sign In
      </Typography>
      <StyledForm>
        <Input
          onChange={formOnChange}
          name="email"
          value={form.email}
          formdark={primary.formdark}
          formgrey={primary.formgrey}
          width="2"
          label="Email"
          type="email"
        />
        <Error>{errors && errors.email}</Error>
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
          />
          {showPassword ? (
            <Eye onClick={() => setShowPassword((prev) => !prev)} />
          ) : (
            <CloseEye onClick={() => setShowPassword((prev) => !prev)} />
          )}
        </PasswordWrapper>
        <Error>{errors && errors.password}</Error>
        <Wrapper direction="row" style={{ justifyContent: "space-between" }}>
          <FormControlLabel
            control={
              <CheckBox
                checked={check}
                onChange={() => setCheck((prev) => !prev)}
                name="checkedB"
                color={primary.cherry}
              />
            }
            label="Keep me logged in"
          />
          <Link href="/auth/forgotpassword">
            <A style={{ marginTop: "5px" }}>Forgot Password</A>
          </Link>
        </Wrapper>
        <StyledButton
          width="4"
          radius="17"
          borderColor={primary.cherry}
          onClick={onSubmit}
        >
          SIGN IN
        </StyledButton>
        <Typography
          size="14"
          color={primary.formdark}
          weight="4"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          New User?
          <Link href="/auth/signup">
            <A>Sign up</A>
          </Link>
        </Typography>
      </StyledForm>
    </Wrapper>
  );
}

export default RightSignInForm;

const A = styled.a`
  color: ${primary.cherry};
  margin-left: 3px;
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
