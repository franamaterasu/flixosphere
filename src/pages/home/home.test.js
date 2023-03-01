import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Home from "./home";

const items = [
  {
    title: "Spiderman",
  },
];

describe("<Home />", () => {
  test("render home", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home items={items} />
        </BrowserRouter>
      </Provider>
    );

    const home = screen.getByTestId("home");
    expect(home).toBeInTheDocument();
  });
});
