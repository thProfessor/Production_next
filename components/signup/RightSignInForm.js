import { FormControlLabel, Snackbar } from "@material-ui/core";
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
import validator from "validator";
import { Alert } from "@material-ui/lab";
import axios from "axios";

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
  const [notify, setNotify] = useState({ open: false, message: "", type: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    if(form.email===''||form.password===''){
      setNotify({ open: true, message: "Fill all the fields", type: "error" });
    }
    else{
      const oldUser = {
        username: form.email,
        password: form.password,
      };
      axios.post('https://skilzen-app.herokuapp.com/api/skilzen/v1/login/',oldUser)
      .then(res=>{
        // console.log(res);
        const {data:{token}} =res;
        localStorage.setItem('accesstoken',token);
      })
      .catch((err)=>console.log(err));
    }
    
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
          valid={validator.isEmail(form.email)}
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
            valid={form.password.length>0}
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
