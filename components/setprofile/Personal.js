import { Checkbox, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select } from "@material-ui/core";
import React from "react";
import { primary } from "../../styles/pallete";
import { StyledButton, Wrapper } from "../globalUi/Ui";
import { Input } from "../globalUi/Ui";
import { MobileInput } from "../signup/SignupComp";

const Personal = ({formOnChange,form,navigation}) => {
  return (
    <Wrapper direction="row">
      <div style={{width:"20%"}}>
        <div style={{background:primary.formgrey,borderRadius:'50%',width:'200px',height:'200px'}}></div>
      </div>
      <Wrapper direction="column" width="-webkit-fill-available">
        <Wrapper direction="row">
        <Wrapper direction="column" width="48%">
          <Input
            onChange={formOnChange}
            name="firstname"
            // value={form.firstname}
            formdark={primary.formdark}
            formgrey={primary.formgrey}
            width="2"
            label="First Name"
            type="text"
            required
          />
          <Input
            onChange={formOnChange}
            name="email"
            // value={form.firstname}
            formdark={primary.formdark}
            formgrey={primary.formgrey}
            width="2"
            label="Email Id"
            type="email"
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
              name="mobile"
              // value={form.mobile}
              formdark={primary.formdark}
              formgrey={primary.formgrey}
              width="2"
              label="Mobile Number"
              type="number"
              required
            />
          </MobileInput>
          {/* <br /> */}
          <FormControl component="fieldset" required >
            <FormLabel style={{paddingTop:'15px',fontSize:16,color:primary.formdark}} component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="gender1" value={form.gender} onChange={()=>{}}>
              <FormControlLabel value="male" control={<Checkbox checked={form.gender==='male'} />} label="Male" />
              <FormControlLabel value="female" control={<Checkbox checked={form.gender==='female'} />} label="Female" />
              <FormControlLabel value="other" control={<Checkbox checked={form.gender==='other'} />} label="Other" />
            </RadioGroup>
          </FormControl>
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
        <Wrapper direction="row" justifyContent="flex-end" >
          <StyledButton radius="38" width="2" color={primary.lightCherry} onClick={navigation.next} >NEXT</StyledButton>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Personal;
