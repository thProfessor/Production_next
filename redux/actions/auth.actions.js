import { authConstants } from "../actionTypes";
import AdminService from "../../AdminServices/AdminService";
import { setItem } from "../../utility/localStorageControl";

export const signIn = (user) => async (dispatch) => {
  dispatch({
    type: authConstants.SIGNIN_REQUEST,
  });
  try {
    const res = await AdminService.signInUser(user);
    console.log(res);
    const { token } = res.data;
    setItem("accessToken", token);
    dispatch({
      type: authConstants.SIGNIN_SUCCESS,
      payload: token,
    });
  } catch (err) {
    dispatch({
      type: authConstants.SIGNIN_FAILURE,
      payload: err.response.data[0],
    });
  }
};

export const signUp = (user) => async (dispatch) => {
  dispatch({
    type: authConstants.SIGNUP_REQUEST,
  });
  try {
    const res = await AdminService.signUpUser(user);
    console.log(res);
    dispatch({
      type: authConstants.SIGNUP_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: authConstants.SIGNUP_FAILURE,
      payload: err.response.data[0],
    });
  }
};
