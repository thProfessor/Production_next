import { FormControlLabel, MenuItem, Select } from "@material-ui/core";
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
  MobileInput,
  Error,
} from "./SignupComp";
import styled from "styled-components";
import validate from "../../utility/validation/validateInfo";
import useForm from "../../utility/validation/useForm";

function RightForm() {
  const [check, setCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // form validation
  const { formOnChange, onSubmit, form, errors } = useForm(validate, "signup");

  const handleCheck = () => {
    setCheck((prev) => !prev);
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
          <Wrapper direction="column">
            <Input
              onChange={formOnChange}
              name="firstname"
              value={form.firstname}
              formdark={primary.formdark}
              formgrey={primary.formgrey}
              width="1"
              label="First Name"
              type="text"
            />
            <Error>{errors && errors.firstname}</Error>
          </Wrapper>
          <Wrapper direction="column">
            <Input
              onChange={formOnChange}
              name="lastname"
              value={form.lastname}
              formdark={primary.formdark}
              formgrey={primary.formgrey}
              width="1"
              label="Last Name"
              type="text"
            />
            <Error>{errors && errors.lastname}</Error>
          </Wrapper>
        </Wrapper>

        <Wrapper direction="row">
          <Wrapper direction="column">
            <Input
              onChange={formOnChange}
              name="email"
              value={form.email}
              formdark={primary.formdark}
              formgrey={primary.formgrey}
              width="1"
              label="Email Address"
              type="email"
            />
            <Error>{errors && errors.email}</Error>
          </Wrapper>
          <Wrapper direction="column">
            <MobileInput>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"india"}
                // onChange={handleChange}
              >
                <MenuItem value={"india"}>
                  <img
                    src="https://www.kindpng.com/picc/m/133-1330075_india-transparent-button-png-indian-flag-icon-png.png"
                    width="30"
                    alt="india"
                    srcset=""
                  />
                </MenuItem>
              </Select>

              <Input
                onChange={formOnChange}
                name="mobile"
                value={form.mobile}
                formdark={primary.formdark}
                formgrey={primary.formgrey}
                width="1"
                label="Mobile Number"
                type="number"
              />
            </MobileInput>
            <Error>{errors && errors.mobile}</Error>
          </Wrapper>
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
            />
            {showPassword ? (
              <Eye onClick={() => setShowPassword(false)} />
            ) : (
              <CloseEye onClick={() => setShowPassword(true)} />
            )}
          </PasswordWrapper>
          <Error>{errors && errors.password}</Error>
          <Input
            onChange={formOnChange}
            name="confirmPassword"
            value={form.confirmPassword}
            formdark={primary.formdark}
            formgrey={primary.formgrey}
            width="2"
            label="Re-enter Password"
            type="password"
          />
          <Error>{errors && errors.confirmPassword}</Error>
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
