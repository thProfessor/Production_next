import { useState } from "react";
import { primary } from "../../styles/pallete";
import {
  Input,
  StyledButton,
  StyledForm,
  Wrapper,
  Formheading,
} from "./SignupComp";
import { useRouter } from "next/router";

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
    <Wrapper direction="column" style={{ paddingRight: "35px" }}>
      <Formheading
        size="42"
        color={primary.cherry}
        weight="6"
        style={{ margin: "40px 0" }}
      >
        Let us help!
      </Formheading>
      <Formheading
        size="32"
        color={primary.formDarkGrey}
        weight="6"
        style={{ margin: "35px 0 20px" }}
      >
        Forgot Password
      </Formheading>
      <Formheading
        size="12"
        color={primary.cherry}
        weight="4"
        style={{ margin: "0 auto 20px" }}
      >
        Mention your Registered Email/mobile number to get the verification
        code.
      </Formheading>
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

        <Formheading
          size="14"
          color={primary.cherry}
          weight="4"
          style={{ margin: "10px auto" }}
        >
          OR
        </Formheading>

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
          borderColor={primary.cherry}
          onClick={onSubmit}
          style={{ marginTop: "20px" }}
        >
          SEND
        </StyledButton>
        <Formheading
          size="10"
          color={primary.formgrey}
          weight="4"
          style={{
            display: "flex",
            marginBottom: "20px",
          }}
        >
          Check you Email/Text to get the code
        </Formheading>
      </StyledForm>
    </Wrapper>
  );
}

export default RightForm;
