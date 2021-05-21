import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/actions/auth.actions";

const useForm = (validate, page) => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
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
    const [form, setForm] = useState({
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    });

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

    setErrors(validate(form));
    setIsSubmitting(true);
  };

  return { formOnChange, onSubmit, form, errors };
};

export default useForm;
