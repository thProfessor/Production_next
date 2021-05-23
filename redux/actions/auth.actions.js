import { authConstants } from "../actionTypes";
import AdminService from "../../AdminServices/AdminService";
import { setItem } from "../../utility/localStorageControl";

export const signIn = (user) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.SIGNIN_REQUEST,
    });
    try {
      const res = await AdminService.signInUser(user);
      console.log(res);
      const { token } = res;
      setItem("accessToken", token);
      return dispatch({
        type: authConstants.SIGNIN_SUCCESS,
        payload: token,
      });
    } catch (err) {
      return dispatch({
        type: authConstants.SIGNIN_FAILURE,
        payload: { message: err },
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
      const res = await AdminService.signUpUser(user);
      console.log(res);
      return dispatch({
        type: authConstants.SIGNUP_SUCCESS,
      });
    } catch (err) {
      return dispatch({
        type: authConstants.SIGNUP_FAILURE,
        payload: {
          message: { message: err },
        },
      });
    }
  };
};
