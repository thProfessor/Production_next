import { FormControlLabel } from "@material-ui/core";
import Link from "next/link";
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

function RightForm() {
  const [check, setCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleCheck = () => {
    setCheck((check) => !check);
  };

  const formOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const oldUser = {
      email: form.email,
      password: form.password,
    };
    console.log(oldUser);
  };
  return (
    <Wrapper
      direction="column"
      style={{ paddingRight: "45px", height: "120%" }}
    >
      <Formheading
        size="42"
        color={primary.cherry}
        weight="6"
        style={{ margin: "50px 0" }}
      >
        Welcome Back!
      </Formheading>
      <Formheading
        size="32"
        color={primary.formDarkGrey}
        weight="6"
        style={{ margin: "30px 0" }}
      >
        Sign In
      </Formheading>
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
        <Wrapper direction="row" style={{ justifyContent: "space-between" }}>
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
          <Link href="/auth/forgotpassword">
            <A style={{ marginTop: "5px" }}>Forgot Password</A>
          </Link>
        </Wrapper>
        <StyledButton width="4" borderColor={primary.cherry} onClick={onSubmit}>
          SIGN IN
        </StyledButton>
        <Formheading
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
        </Formheading>
      </StyledForm>
    </Wrapper>
  );
}

export default RightForm;

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
