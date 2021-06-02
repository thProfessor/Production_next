import styled from "styled-components";
import { fontFamily, minimal } from "../../styles/pallete";

export const Typography = styled.h1`
  color: ${(props) => props.color};
  font-family: ${fontFamily.font};
  font-weight: ${(props) => props.weight * 100}px;
  font-size: ${(props) => props.size}px;
`;

export const StyledButton = styled.button`
  border: 2px solid ${(props) => props.borderColor};
  border-radius: ${(props) => props.radius}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fontFamily.font};
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
