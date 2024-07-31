import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("Should load Header Component with a login btn", () => {
  render(
    // we need to wrap header component in BrowserRouter because our header component contains <Link> in it
    // also we have redux state in our app and used useSelector in Header component
    // therefore we need to wrap it in Provider and pass store to make jest test Header component
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const btn = screen.getByRole("button");

  expect(btn).toBeInTheDocument();
});

it("Should load Header Component with a cart value 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const val = screen.getByText("0");
  expect(val).toBeInTheDocument();
});

it("Should Change login btn to logout onCLick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  // FireEvent use to trigger any even - like onClick etc
  fireEvent.click(loginBtn);
  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});