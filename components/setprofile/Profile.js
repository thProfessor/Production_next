import {  MenuItem, Select } from "@material-ui/core";
import React from "react";
import { primary } from "../../styles/pallete";
import { StyledButton, Wrapper } from "../globalUi/Ui";
import { Input } from "../globalUi/Ui";
import { MobileInput } from "../signup/SignupComp";

const Profile = ({formOnChange,form,navigation}) => {
  console.log(formOnChange);
  return (
    
      <Wrapper direction="column" width="-webkit-fill-available">
        <Wrapper direction="row">
          <Wrapper direction="column" width="48%">
            <Input
              onChange={formOnChange}
              name="position"
              // value={form.firstname}
              formdark={primary.formdark}
              formgrey={primary.formgrey}
              width="2"
              label="Position"
              type="text"
              required
            />
            <textarea  rows="4" cols="50" />
          </Wrapper>
          <Wrapper direction="column" width="48%">
            <Input
              onChange={formOnChange}
              name="lastname"
              // value={form.firstname}
              formdark={primary.formdark}
              formgrey={primary.formgrey}
              width="2"
              label="Last Name"
              type="text"
              required
            />
            <Input
              onChange={formOnChange}
              name="dob"
              // value={form.firstname}
              formdark={primary.formdark}
              formgrey={primary.formgrey}
              width="2"
              label="Date of Birth"
              type="date"
              required
            />
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
                name="location"
                // value={form.mobile}
                formdark={primary.formdark}
                formgrey={primary.formgrey}
                width="2"
                label="Current Location"
                type="texy"
                required
              />
            </MobileInput>
          </Wrapper>
        </Wrapper>
        <Wrapper direction="row" justifyContent="space-between">
          <StyledButton radius="38" width="2" color={primary.lightCherry} onClick={navigation.previous} >
            BACK
          </StyledButton>
          <StyledButton radius="38" width="2" color={primary.lightCherry} onClick={navigation.next} >
            NEXT
          </StyledButton>
        </Wrapper>
      </Wrapper>
  );
};

export default Profile;
