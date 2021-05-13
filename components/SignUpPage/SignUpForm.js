// import React, { useEffect, useState } from "react";
// import validator from "validator";

// import { TextField, makeStyles, CircularProgress } from "@material-ui/core";
// import Notification from "./Notification.js";

// import { useSelector, useDispatch, shallowEqual } from "react-redux";

// import {
//   isAdminLogged,
//   signIn,
//   signUp,
// } from "../../redux/actions/auth.actions";

// const useStyles = makeStyles((theme) => ({
//   rootSignUp: {
//     "& > *": {
//       marginTop: theme.spacing(2),
//       marginBottom: theme.spacing(2),
//       width: "45%",
//     },
//     "& > .signup__btn": {
//       marginTop: "inherit",
//       marginBottom: "inherit",
//       width: "inherit",
//     },
//   },
//   fullWidth: {
//     width: "100%",
//   },
//   rightInputField: {
//     marginLeft: "10%",
//   },
//   rootSetProfile: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1, 0),
//     },
//     '& label[for="skillsSelect"]': {
//       marginBottom: "-5px",
//     },
//     "& #dp": {
//       textAlign: "center",
//       marginBottom: "20px",
//       cursor: "pointer",
//     },
//   },
//   rootDatePicker: {
//     display: "flex",
//     gridGap: "10px",
//   },
//   for_auth_div: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "left",
//     flexWrap: "wrap",
//     width: "100%",
//   },
//   for_auth_btn: {
//     width: "100%",
//     background: "transparent",
//     color: "#848383",
//     height: "42px",
//     borderRadius: "10px",
//     border: "#b6b2b2 solid 1px",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     paddingTop: "6px",
//     display: "flex",
//     flexDirection: "row",
//     flexWrap: "nowrap",
//     "&:hover": {
//       border: "#ec1f28 solid 1px",
//     },
//   },
//   for_auth_fb_icons: {
//     margin: "0px 2px",
//     fontSize: "25px",
//     color: "#3838e9",
//   },
//   for_auth_gh_icons: {
//     margin: "0px 2px",
//     fontSize: "25px",
//     color: "black",
//   },
//   for_auth_icons: {
//     margin: "0px 2px",
//     fontSize: "25px",
//   },
//   for_hr_line: {
//     width: "100%",
//   },
//   for_already_registerd: {
//     width: "100%",
//     color: "#848383",
//   },
//   for_Login_redirect: {
//     color: " #ec1f28 !important",
//     textDecoration: "underline !important",
//     fontSize: "15px",
//     marginTop: "2px",
//     marginLeft: "3px",
//   },
//   whiteLoading: {
//     color: "#fff !important",
//     width: "20px !important",
//     height: "20px !important",
//   },
//   redLoading: {
//     color: "#ec1f28 !important",
//     width: "20px !important",
//     height: "20px !important",
//   },
//   for_btn_margin: {
//     margin: "15px 15px",
//   },
//   for_signup_font: {
//     fontSize: "1rem",
//     fontFamily: "Roboto",
//     fontWeight: "400",
//     lineHeight: "1.5",
//     letterSpacing: "0.00938em",
//   },
// }));

// const SignUp_and_SetProfile = ({ location }) => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);

//   useEffect(() => {
//     console.log("signuped updating");
//     dispatch(isAdminLogged());
//     return () => {
//       console.log("unmounting");
//     };
//   }, [auth.signedUp]);

//   const SignUp1 = () => {
//     const [form, setForm] = useState({
//       fname: "",
//       lname: "",
//       email: "",
//       password: "",
//       confirm: "",
//       mobile: "",
//     });
//     const [notify, setnotify] = useState({
//       message: "",
//       type: "",
//       isOpen: false,
//     });
//     const [btnHovered, setHovered] = useState(false);

//     const onChange = (e) => {
//       setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const SignUp = async () => {
//       const newUser = {
//         email: form.email,
//         phone_number: form.mobile,
//         password: form.password,
//         password_confirmation: form.confirm,
//       };

//       const res = await dispatch(signUp(newUser));

//       if (res.success) {
//         setnotify({
//           message: "SignedUp successfully ",
//           isOpen: true,
//           type: "success",
//         });
//         setTimeout(() => {
//           setnotify({ message: "", isOpen: false, type: "" });
//         }, 3000);
//         const res1 = await dispatch(
//           signIn({
//             username: form.email,
//             password: form.password,
//           })
//         );
//         // if(res1.success){
//         //   history.push(location?.state?.from||'/');
//         // }
//       } else {
//         setnotify({ message: auth.message, isOpen: true, type: "error" });
//         setTimeout(() => {
//           setnotify({ message: "", isOpen: false, type: "" });
//         }, 3000);
//       }
//     };

//     return (
//       <div className="internship__container__centered">
//         <div className="internship__content__card p-5 signup__container">
//           <img
//             className="mb-5"
//             src={logo}
//             style={{ width: "30%" }}
//             alt="skilzen logo"
//           />
//           <h3 className="text-center mb-4">Join us!</h3>
//           <form className={classes.rootSignUp} noValidate autoComplete="off">
//             <TextField
//               label="First Name"
//               name="fname"
//               value={form.fname}
//               onChange={onChange}
//               variant="outlined"
//               size="small"
//               fullWidth
//             />
//             <TextField
//               className={classes.rightInputField}
//               label="Last Name"
//               name="lname"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={form.lname}
//               onChange={onChange}
//             />
//             <TextField
//               className={classes.fullWidth}
//               size="small"
//               label="Email Address"
//               name="email"
//               value={form.email}
//               onChange={onChange}
//               variant="outlined"
//               fullWidth
//             />
//             <TextField
//               className={classes.fullWidth}
//               size="small"
//               label="Contact Number"
//               name="mobile"
//               value={form.mobile}
//               onChange={onChange}
//               variant="outlined"
//               fullWidth
//             />
//             <TextField
//               size="small"
//               label="Password"
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={onChange}
//               variant="outlined"
//             />
//             <TextField
//               className={classes.rightInputField}
//               size="small"
//               label="Confirm Password"
//               type="password"
//               name="confirm"
//               value={form.confirm}
//               onChange={onChange}
//               variant="outlined"
//             />

//             <div className={classes.for_already_registerd}>
//               <p>
//                 Already have an account?{" "}
//                 <a href="/login" className={classes.for_Login_redirect}>
//                   Login here!
//                 </a>
//               </p>
//             </div>
//             <div className="signup__btn d-flex justify-content-end">
//               <button
//                 className="apply_btn card_btn signInBtn"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   if (!validator.isEmail((form.email + "").toLowerCase())) {
//                     setnotify({
//                       message: "Wrong Format of Email address!",
//                       isOpen: true,
//                       type: "error",
//                     });
//                     setTimeout(() => {
//                       setnotify({ message: "", isOpen: false, type: "" });
//                     }, 3000);
//                   } else if (!(form.password === form.confirm)) {
//                     setnotify({
//                       message: "Passwords not match!",
//                       isOpen: true,
//                       type: "error",
//                     });
//                     setTimeout(() => {
//                       setnotify({ message: "", isOpen: false, type: "" });
//                     }, 3000);
//                   } else {
//                     SignUp();
//                   }
//                 }}
//                 onMouseEnter={(e) => {
//                   setHovered(true);
//                 }}
//                 onMouseLeave={(e) => {
//                   setHovered(false);
//                 }}
//               >
//                 Sign Up{" "}
//                 {auth.loading && (
//                   <CircularProgress
//                     className={
//                       btnHovered
//                         ? `${classes.redLoading}`
//                         : `${classes.whiteLoading}`
//                     }
//                   />
//                 )}
//               </button>
//             </div>
//           </form>
//           {notify.isOpen && <Notification notify={notify} />}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="Login__Signup">
//       <SignUp1 />
//     </div>
//   );
// };

// export default SignUp_and_SetProfile;
