import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { Checkbox, Select } from "@material-ui/core";
import { fontFamily, minimal, primary,secondary } from "../../styles/pallete";
import { mobile, tablet } from "../../styles/mediaQuerries";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 17px;
  max-width: 450px;
  padding-bottom: 20px;
`;
export const Formheading = styled.h1`
  color: ${(props) => props.color};
  font-family: ${fontFamily.font};
  font-weight: ${(props) => props.weight * 100}px;
  font-size: ${(props) => props.size}px;
`;
export const Wrapper = styled.div`
  display: flex;
  column-gap:${props=>props.columnGap||50}px;
  row-gap:17px;
  flex-direction: ${(props) => props.direction};
  ${tablet} {
    flex-direction: column;
  }
`;
export const MobileInput = styled.div`
  display:flex;
  column-gap:0;
  width:100%;
  .MuiSvgIcon-root{
    margin-top:9px;
  }
  .MuiSelect-select.MuiSelect-select{
    padding-bottom: 0px;
    margin-bottom: -13px;
  }
  .MuiInput-underline:first-child:before{
    border-bottom:2px solid ${secondary.greenSecondary} !important;
  }
  .MuiInput-underline:first-child:hover:before{
    border-bottom:2px solid ${secondary.greenSecondary} !important;
  }
  
`

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
    transform:scaleX(1);
    border-color: ${(props) => props.valid?secondary.greenSecondary:secondary.cherrySecondary};
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

export const StyledButton = styled.button`
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gordita";
  font-weight: 500;
  font-size: 14px;
  max-width: ${(props) => props.width * 110}px;
  cursor: pointer;
  background: transparent;
  padding: 0.8em 0;
  & :hover {
    background: ${(props) => props.borderColor};
    color: ${minimal.white};
  }
  & :active {
    background: ${(props) => props.borderColor};
    color: ${minimal.white};
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
