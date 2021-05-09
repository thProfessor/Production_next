import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import GlobalStyles from "../styles/global";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
