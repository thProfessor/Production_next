import { authConstants } from "../actionTypes";

const initialState = {
  token: null,
  authenticate: false,
  message: "",
  loading: false,
  signedUp: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case authConstants.SIGNIN_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case authConstants.SIGNIN_SUCCESS:
      return (state = {
        ...state,
        token: action.payload,
        authenticate: true,
        loading: false,
        message: "",
      });

    case authConstants.SIGNIN_FAILURE:
      return (state = {
        ...state,
        token: null,
        authenticate: false,
        message: "Failed Login",
        loading: false,
      });

    default:
      return state;
  }
};
