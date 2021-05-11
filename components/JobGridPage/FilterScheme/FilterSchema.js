/* editing the show more items link */

import styled, { keyframes } from "styled-components";

export const UnderlineSpan = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
export const ReadMoreLink = styled.a`
  cursor: pointer;
  color: black;
  font-size: 14px;
  font-family: "Inter";
  margin-bottom: 10px;
`;

export const FilterDiv = styled.div`
  background: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0;
  border-radius: 10px;
  padding: 0 20px;
  border: 0.5px solid #e2e2e2;
`;

const bounce = keyframes`
 0% {opacity: 0%;}
  50%{opacity:50%}
  100%{opacity: 100%}
`;

export const AnimateDiv = styled.div`
  animation: ${bounce} 1s;
`;

export const CollegeSectionFilters = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  margin: 1.75rem 10px 0 0;
  flex: 0.8;
`;

export const SchemeHead = styled.p`
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;
  font: 1em "Gordita";
  font-weight: 600;
  padding: 13px 0;
  cursor: pointer;
  margin: 0;
`;
