import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import GlobalStyles from "../styles/global";
import "bootstrap/dist/css/bootstrap.min.css";

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

// global styles applied
// redux store client side copy provided
