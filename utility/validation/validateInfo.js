import validator from "validator";
import isEmpty from "./isEmpty";

// validates form variables for empty, length and pattern and feeds the error object accordingly
// --> uses validator for email check
export default function validateInfo(form, page) {
  let errors = {};

  if (isEmpty(form.email)) {
    errors.email = "Email required";
  } else if (!validator.isEmail(form.email)) {
    errors.email = "Email address is invalid";
  }
  if (isEmpty(form.password)) {
    errors.password = "Password is required";
  } else if (form.password.length < 8) {
    errors.password = "Password needs to be 8 characters or more";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
      form.password
    )
  ) {
    errors.password =
      "at least one upper case English letter, one lower case English letter, one number and one special character";
  }

  if (page === "signup") {
    if (isEmpty(form.firstname)) {
      errors.firstname = "First Name is Required";
    }
    if (isEmpty(form.lastname)) {
      errors.lastname = "Last Name is Required";
    }
    if (isEmpty(form.mobile)) {
      errors.mobile = "mobile number reuired";
    } else if (!(form.mobile.length > 9 && form.mobile.length < 12)) {
      errors.mobile = "mobile number should be 10 or 11 characters";
    }
    if (isEmpty(form.confirmPassword)) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (form.confirmPassword !== form.password) {
      errors.confirmPassword = "Passwords do not match";
    }
  }

  if (page === "forgotPassword2") {
    if (isEmpty(form.code)) {
      errors.code = "code is required";
    } else if (form.code.length !== 4) {
      errors.code = "should be of 4 characters";
    }
  }
  return errors;
}
