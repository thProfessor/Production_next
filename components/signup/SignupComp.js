import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { Checkbox, Select } from "@material-ui/core";
import { fontFamily, minimal, primary, secondary } from "../../styles/pallete";
import { mobile, tablet } from "../../styles/mediaQuerries";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.rowGap || 17}px;
  padding-bottom: 20px;
  ${mobile} {
    max-width: 450px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  column-gap: ${(props) => (props.columnGap ? props.columnGap : 6)}em;
  row-gap: ${(props) => props.rowGap || 17}px;
  flex-direction: ${(props) => props.direction};
  ${tablet} {
    flex-direction: column;
  }
`;
export const MobileInput = styled.div`
  display: flex;
  column-gap: 0;
  width: 100%;
  .MuiSvgIcon-root {
    margin-top: 9px;
  }
  .MuiSelect-select.MuiSelect-select {
    padding-bottom: 0px;
    margin-bottom: -13px;
  }
  .MuiInput-underline:first-child:before {
    border-bottom: 2px solid ${secondary.greenSecondary} !important;
  }
  .MuiInput-underline:first-child:hover:before {
    border-bottom: 2px solid ${secondary.greenSecondary} !important;
  }
`;

export const Input = styled(TextField)`
  max-width: ${(props) => props.width * 230}px;
  width: 100%;
  .MuiInputBase-root {
    color: ${(props) => props.formgrey};
    font-family: ${fontFamily.font};
  }
  .MuiFormLabel-root {
    color: ${(props) => props.formdark};
    font-family: ${fontFamily.font};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.formdark};
    font-family: ${fontFamily.font};
  }
  .MuiInput-underline:after {
    transform: scaleX(1);
    border-color: ${(props) =>
      props.valid ? secondary.greenSecondary : "#CDDBEA"};
  }
  ${tablet} {
    max-width: 460px;
  }
`;
export const CheckBox = styled(Checkbox)`
  .MuiSvgIcon-root {
    fill: ${(props) => props.color};
  }
  .MuiTypography-body1 {
    font-size: 12px;
    font-family: ${fontFamily.font};
    color: ${primary.checkbox};
    font-weight: 400;
  }
`;

export const StyledImage = styled.img`
  height: auto;
  width: ${(props) => props.width}px;
  ${mobile} {
    width: ${(props) => (props.width === "103" ? "25%" : "70%")};
    margin: 25px auto;
  }
`;

export const Slide = styled.div`
  background: ${minimal.white};
  box-shadow: 0px 56px 68px rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  ${tablet} {
    padding: 20px;
  }
`;
export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${tablet} {
    height: 100%;
  }
`;

export const Error = styled.p`
  color: ${primary.cherry};
  font-size: 12px;
`;
