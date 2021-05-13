import { authConstants } from "../actionTypes";
import axios, { getCookie, setCookie } from "../helper_axios";

export const signIn = (user) => {
  console.log("calling signIn action");
  return async (dispatch) => {
    dispatch({ type: authConstants.SIGNIN_REQUEST });
    try {
      const res = await axios.post("/skilzen/v1/login/", user);
      if (res.status === 200) {
        const { token } = res.data;
        // setItem("accessToken", token);
        setCookie("accesstoken", token);
        dispatch({
          type: authConstants.SIGNIN_SUCCESS,
          payload: { token: token },
        });
        return { error: "" };
      } else {
        dispatch({
          type: authConstants.SIGNIN_FAILURE,
          payload: { message: "Invalid Login Credentials!" },
        });
        return { error: "Invalid Login Credentials!" };
      }
    } catch (err) {
      console.log("err in loging!!!!");
      dispatch({
        type: authConstants.SIGNIN_FAILURE,
        payload: { message: "Invalid Login Credentials!" },
      });
      return { error: "Invalid Login Credentials!" };
    }
  };
};
export const isAdminLogged = () => {
  // console.log("called isAdminLogged");
  return (dispatch) => {
    const token = getCookie("accessToken");
    dispatch({ type: authConstants.LOGGEDIN_REQUEST });
    if (token) {
      console.log("dispatch sucess in admin logged");
      dispatch({
        type: authConstants.LOGGEDIN_SUCCESS,
        payload: {
          token: token,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGGEDIN_FAILURE,
        payload: {
          message: "Not Logged in Before!",
        },
      });
    }
  };
};

export const signUp = (user) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.SIGNUP_REQUEST,
    });
    try {
      const res = await axios.post("/skilzen/v1/sign_up/", user);

      dispatch({
        type: authConstants.SIGNUP_SUCCESS,
      });
      return { success: "Success!" };
    } catch (err) {
      dispatch({
        type: authConstants.SIGNUP_FAILURE,
        payload: {
          message: "User already exists !",
        },
      });
      return { error: "User already exists !" };
    }
  };
};
