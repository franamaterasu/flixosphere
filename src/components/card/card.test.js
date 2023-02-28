import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Card from "./card";

const filmList = [
  {
    title: "Spiderman",
  },
];

describe("<Card />", () => {
  test("render card", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card info={filmList} />
        </BrowserRouter>
      </Provider>
    );
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });

  test("favorite icon appear when click in favorite button", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card info={filmList} />
        </BrowserRouter>
      </Provider>
    );

    const favoriteButton = screen.getByTestId("card-favorite-button");
    const favoriteIcon = screen.getByTestId("card-favorite-icon");

    fireEvent.click(favoriteButton);

    expect(favoriteIcon).toBeInTheDocument();
  });
});
