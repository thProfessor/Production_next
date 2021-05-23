import { render, fireEvent, act, screen } from "./test-utils";

import RightSignInForm from "../components/signup/RightSignInForm";

import isEmpty from "../utility/validation/isEmpty";

describe("login", () => {
  beforeEach(() => {});

  test("isEmpty function should check for empty fields", () => {
    const validText = " ";
    expect(isEmpty(validText)).toBe(true);
  });

  test("should redirect on sign in", () => {
    const expectedEmail = "abc123@gmail.com";
    const expectedPassword = "T12@jkl123";
    render(<RightSignInForm />);
    const email = screen.getByLabelText("Email").querySelector("input");
    const password = screen.getByLabelText("Password").querySelector("input");
    const signInButton = screen.getByText("SIGN IN");

    act(() => {
      fireEvent.change(email, { target: { value: expectedEmail } });
      fireEvent.change(password, { target: { value: expectedPassword } });
      fireEvent.click(signInButton);
    });

    expect(expectedSignIn).toHaveBeenCalledTimes(1);
    expect(expectedSignIn).toHaveBeenCalledWith(
      expectedEmail,
      expectedPassword
    );
  });

  test("should show text error", () => {
    render(<RightSignInForm />);
    const email = screen.getByText("Email").querySelector("input");
    const password = screen.getByText("Password").querySelector("input");
    const signInButton = screen.getByText("SIGN IN");

    act(() => {
      fireEvent.change(email, { target: { value: "too" } });
      fireEvent.change(password, { target: { value: expectedPassword } });
      fireEvent.click(signInButton);
    });

    expect(expectedSignIn).toHaveBeenCalledTimes(1);
    expect(expectedSignIn).toHaveBeenCalledWith("too", expectedPassword);

    const errorMessage = screen.getByText("Email address is invalid");

    expect(errorMessage).toBeVisible();
  });
});
// expect(name).toBeVisible() for visible on dom
// chetsheet react testing library
// what is snapshot? for css and for small modular pieces not so
