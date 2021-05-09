import Lists from "../components/lists";
import { getPosts } from "../redux/actions/postActions";
import { initializeStore } from "../redux/store";

export default function post() {
  return <Lists />;
}

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  await dispatch(getPosts());

  return { props: { initialReduxState: reduxStore.getState() } };
}
