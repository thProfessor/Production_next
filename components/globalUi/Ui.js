import styled from "styled-components";
import { fontFamily, minimal, primary } from "../../styles/pallete";
import { mobile, tablet } from "../../styles/mediaQuerries";
import { FormLabel, TextField } from "@material-ui/core";

export const Typography = styled.h1`
  color: ${(props) => props.color};
  font-family: ${fontFamily.font};
  font-weight: ${(props) => props.weight * 100};
  font-size: ${(props) => props.size || 18}px;
`;

export const StyledButton = styled.button`
  border: 2px solid ${primary.lightCherry};
  border-radius: ${(props) => props.radius}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fontFamily.font};
  font-weight: 500;
  font-size: 14px;
  width: ${(props) => props.width * 110}px;
  cursor: pointer;
  background: transparent;
  padding: 0.8em 1em;
  & :hover {
    background: ${primary.lightCherry};
    color: ${minimal.white};
    box-shadow: 1px 4px 10px rgba(242, 106, 126, 0.32);
  }
  & :active {
    background: ${primary.lightCherry};
    color: ${minimal.white};
    box-shadow: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  column-gap: ${(props) => (props.columnGap ? props.columnGap : 6)}em;
  row-gap: ${(props) => props.rowGap || 17}px;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  flex:${props=>props.flex}
  ${tablet} {
    flex-direction: column;
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
    span.MuiFormLabel-asterisk{
      color:${primary.cherry}
    }
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
