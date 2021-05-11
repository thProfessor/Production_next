import SignUp_and_SetProfile from "../components/SignUpPage/SignUpForm";
import { isAdminLogged } from "../redux/actions/auth.actions";
import { initializeStore } from "../redux/store";

export default function signup() {
  return <SignUp_and_SetProfile />;
}

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  await dispatch(isAdminLogged());

  return { props: { initialReduxState: reduxStore.getState() } };
}
