import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Provider } from "react-redux";

import { useStore } from "../redux/store";

const ReduxRenderer = ({ children }) => {
  const initialReduxState = {};
  const store = useStore(initialReduxState);
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui, options) => {
  render(ui, {
    wrapper: ReduxRenderer,
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };
