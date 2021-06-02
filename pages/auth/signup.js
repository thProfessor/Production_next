import PopupContainer from "../../components/globalUi/Popup";
import LeftForm from "../../components/signup/LeftForm";
import RightForm from "../../components/signup/RightForm";
import {
  Wrapper,
  Slide,
  Background,
  StyledImage,
} from "../../components/signup/SignupComp";
import PrivateRoute from "../../utility/PrivateRoute";
function signup() {
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
            <LeftForm image="../images/Signup_newuser1.png" />
            <RightForm />
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

// export default PrivateRoute(signup);
export default PopupContainer(signup);
