import LeftForm from "../../components/signup/LeftForm";
import RightForgotForm from "../../components/signup/RightForgotForm";
import {
  Wrapper,
  Slide,
  Background,
  StyledImage,
} from "../../components/signup/SignupComp";

function signin() {
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
            <LeftForm image="../images/forgot_password.png" />
            <RightForgotForm />
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

export default signin;
