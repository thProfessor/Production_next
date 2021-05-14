import { FormControlLabel } from "@material-ui/core";
import Link from "next/link";
import { useState } from "react";
import { primary } from "../../styles/pallete";
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
  const [form, setForm] = useState({
    name: "",
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
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: form.name,
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
            name="name"
            value={form.name}
            formdark={primary.formdark}
            formgrey={primary.formgrey}
            width="1"
            label="Name"
          />
          <Input
            onChange={formOnChange}
            name="lastname"
            value={form.lastname}
            formdark={primary.formdark}
            formgrey={primary.formgrey}
            width="1"
            label="Last Name"
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
          />
        </Wrapper>
        <Wrapper direction="column">
          <Input
            onChange={formOnChange}
            name="password"
            value={form.password}
            formdark={primary.formdark}
            formgrey={primary.formgrey}
            width="2"
            label="Password"
            type="password"
          />
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
