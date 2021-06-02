import { useState } from "react";
import { primary } from "../../styles/pallete";
import { Input, StyledForm, Wrapper } from "./SignupComp";
import { useRouter } from "next/router";
import { Typography, StyledButton } from "../globalUi/Ui";

function RightForm() {
  const [form, setForm] = useState({
    email: "",
    contact: "",
  });

  const router = useRouter();

  const formOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const oldUser = {
      email: form.email,
      contact: form.contact,
    };
    console.log(oldUser);
    router.push("/auth/forgotpassword2");
  };
  return (
    <Wrapper direction="column" style={{ paddingRight: "8em" }}>
      <Typography
        size="42"
        color={primary.cherry}
        weight="6"
        style={{ margin: "1.2em 0 0.5em" }}
      >
        Let us help!
      </Typography>
      <Typography
        size="32"
        color={primary.formDarkGrey}
        weight="6"
        style={{ margin: "1.2em 0" }}
      >
        Forgot Password
      </Typography>
      <Typography
        size="12"
        color={primary.cherry}
        weight="4"
        style={{ margin: "0 auto 20px" }}
      >
        Mention your Registered Email/mobile number to get the verification
        code.
      </Typography>
      <StyledForm>
        <Input
          onChange={formOnChange}
          name="email"
          value={form.email}
          formdark={primary.formdark}
          formgrey={primary.formgrey}
          width="2"
          label=" Registered Email"
          type="email"
        />

        <Typography
          size="14"
          color={primary.cherry}
          weight="4"
          style={{ margin: "10px auto" }}
        >
          OR
        </Typography>

        <Input
          onChange={formOnChange}
          name="contact"
          value={form.contact}
          formdark={primary.formdark}
          formgrey={primary.formgrey}
          width="2"
          label="Contact Number"
          type="number"
        />

        <StyledButton
          width="4"
          borderColor={primary.lightCherry}
          radius="17"
          onClick={onSubmit}
          style={{ marginTop: "20px" }}
        >
          SEND
        </StyledButton>
        <Typography
          size="10"
          color={primary.formgrey}
          weight="4"
          style={{
            display: "flex",
            marginBottom: "20px",
          }}
        >
          Check you Email/Text to get the code
        </Typography>
      </StyledForm>
    </Wrapper>
  );
}

export default RightForm;
