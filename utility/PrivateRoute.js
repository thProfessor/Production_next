import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

// const PrivateRoute = (props) => {
//   const [show, setShow] = useState(false);
//   const router = useRouter();
//   getItem("jwt_token") ? setShow(true) : setShow(false);
//   if (!show) {
//     {
//       router.replace("/auth/forgotpassword");
//     }
//   }
//   return <>{show && props.children}</>;
// };

// export default PrivateRoute;
const PrivateRoute = (WrapComponent) => {
  const newcomponent = () => {
    const auth = useSelector((state) => state.auth);
    const router = useRouter();
    useEffect(() => {
      if (!auth.authenticate) router.replace("/auth/forgotpassword");
    }, []);

    return <>{auth.authenticate && <WrapComponent />}</>;
  };
  return newcomponent;
};
export default PrivateRoute;
