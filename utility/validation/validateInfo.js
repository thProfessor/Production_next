import validator from "validator";
import isEmpty from "./isEmpty";

// validates form variables for empty, length and pattern and feeds the error object accordingly
// --> uses validator for email check
export default function validateInfo(form) {
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

  //   if (form.password2) {
  //     errors.password2 = "Password is required";
  //   } else if (form.password2 !== form.password) {
  //     errors.password2 = "Passwords do not match";
  //   }
  return errors;
}
