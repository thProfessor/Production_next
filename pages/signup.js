import LeftForm from "../components/signup/LeftForm";
import RightForm from "../components/signup/RightForm";
import {
  Wrapper,
  Slide,
  Background,
  StyledImage,
} from "../components/signup/SignupComp";

function signup() {
  return (
    <>
      <Background>
        <StyledImage
          src="./images/vector/large.png"
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
            <LeftForm />
            <RightForm />
          </Wrapper>
        </Slide>
        <StyledImage
          src="./images/vector/small.png"
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

export default signup;
