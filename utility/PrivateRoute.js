import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

// Higher orfer component wrapper to stop client side unauthorized navigation
const PrivateRoute = (WrapComponent) => {
  const newcomponent = () => {
    const auth = useSelector((state) => state.auth);
    const router = useRouter();
    // checks for authentication in redux
    // when authenticated --> open the requested page (route.query)
    // when not authenticated --> redirect
    useEffect(() => {
      if (!auth.authenticate) router.replace("/auth/forgotpassword");
    }, []);

    return <>{auth.authenticate && <WrapComponent />}</>;
  };
  return newcomponent;
};
export default PrivateRoute;
