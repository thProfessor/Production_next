import { FormControlLabel, Snackbar } from "@material-ui/core";

import { useState } from "react";
import styled from "styled-components";
import { primary } from "../../styles/pallete";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { Input, StyledForm, Wrapper, CheckBox } from "./SignupComp";
import { Typography, StyledButton } from "../globalUi/Ui";
import validate from "../../utility/validation/validateInfo";
import useForm from "../../utility/validation/useForm";

function RightForgotForm2() {
  const [check, setCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // form validation
  const { formOnChange, onSubmit, form, errors } = useForm(
    validate,
    "forgotPassword2"
  );

  return (
    <Wrapper
      direction="column"
      style={{ padding: "0 8em 1em 0", width: "500px" }}
    >
      <Typography
        size="42"
        color={primary.cherry}
        weight="6"
        style={{ margin: "2em 0 0" }}
      >
        Almost Done!
      </Typography>
      <Typography
        size="32"
        color={primary.formDarkGrey}
        weight="6"
        style={{ margin: "0.8em 0" }}
      >
        Password Reset
      </Typography>
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
              onChange={() => setCheck(!check)}
              name="checkedB"
              color={primary.lightCherry}
            />
          }
          label="Keep me logged in"
        />
        {console.log(errors)}
        <StyledButton
          width="4"
          radius="17"
          borderColor={primary.lightCherry}
          onClick={onSubmit}
        >
          Save
        </StyledButton>
      </StyledForm>
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
