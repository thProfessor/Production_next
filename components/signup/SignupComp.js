import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { Checkbox } from "@material-ui/core";
import { fontFamily, minimal, primary } from "../../styles/pallete";

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
  column-gap: 50px;
  flex-direction: ${(props) => props.direction};
`;
export const Input = styled(TextField)`
  min-width: ${(props) => props.width * 230}px;
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
    border-color: ${(props) => props.formdark};
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
  min-width: ${(props) => props.width * 110}px;
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
`;

export const Slide = styled.div`
  background: ${minimal.white};
  box-shadow: 0px 56px 68px rgba(0, 0, 0, 0.07);
  border-radius: 20px;
`;
export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
