import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../../redux/actions/auth.actions";

const useForm = (validate, page) => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  if (page === "signin") {
    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        const oldUser = {
          username: form.email,
          password: form.password,
        };
        dispatch(signIn(oldUser));
      }
    }, [errors]);
  }

  if (page === "signup") {
    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        const newUser = {
          firstname: form.firstname,
          lastname: form.lastname,
          email: form.email,
          phone_number: form.mobile,
          password: form.password,
          password_confirmation: form.confirmPassword,
        };
        dispatch(signUp(newUser));
      }
    }, [errors]);
  }

  // common functions
  const formOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(form, page));
    setIsSubmitting(true);
  };

  return { formOnChange, onSubmit, form, errors };
};

export default useForm;
