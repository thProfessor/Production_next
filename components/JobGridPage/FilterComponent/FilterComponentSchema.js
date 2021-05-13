import { GoCheck } from "react-icons/go";
import styled, { keyframes } from "styled-components";

export const FilterHead = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`;
export const CheckBox2 = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 2px;
  width: 1em;
  height: 1em;
  cursor: pointer;
`;

export const FilterOption = styled.h6`
  font: 1em "Gordita";
  color: rgb(89, 89, 89);
  font-weight: ${(props) => props.fontWeight};
`;

export const GoCheck2 = styled(GoCheck)`
  opacity: ${(props) => props.opacity};
  font-size: 1em;
  padding: 0;
  color: #fff;
  vertical-align: top;
`;
