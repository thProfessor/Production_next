import React from "react";
import styled from "styled-components";
import { StyledImage, Wrapper } from "./SignupComp";

function LeftForm({ image }) {
  return (
    <LeftContainer>
      <Wrapper direction="column">
        <StyledImage
          width="103"
          src="../images/logo.png"
          alt="logo"
          style={{ position: "absolute", top: "35px", left: "28px" }}
        />
        <StyledImage
          width="445.89"
          src={image}
          alt="desk"
          style={{ transform: "translateY(10%)" }}
        />
      </Wrapper>
    </LeftContainer>
  );
}

export default LeftForm;

const LeftContainer = styled.div`
  background: #fff8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px 35px;
  position: relative;
  border-radius: 20px;
`;
