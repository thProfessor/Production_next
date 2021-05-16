import LeftForm from "../../components/signup/LeftForm";
import RightForgotForm2 from "../../components/signup/RightForgotForm2";
import {
  Wrapper,
  Slide,
  Background,
  StyledImage,
} from "../../components/signup/SignupComp";

function forgotpassword2() {
  return (
    <>
      <Background>
        <StyledImage
          src="../images/vector/large.png"
          alt="vector"
          style={{
            position: "absolute",
            zIndex: "-1",
            bottom: "0px",
            left: "0px",
          }}
        />
        <Slide>
          <Wrapper direction="row">
            <LeftForm image="../images/forgot_password2.png" />
            <RightForgotForm2 />
          </Wrapper>
        </Slide>
        <StyledImage
          src="../images/vector/small.png"
          alt="vector"
          style={{
            position: "absolute",
            zIndex: "-1",
            top: "0px",
            right: "0px",
          }}
        />
      </Background>
    </>
  );
}

export default forgotpassword2;
