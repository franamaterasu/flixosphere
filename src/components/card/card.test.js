import { render, screen, waitFor, fireEvent } from "@testing-library/react";
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

  test("favorite icon appear when click in favorite button and delete button appears", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card info={filmList} />
        </BrowserRouter>
      </Provider>
    );

    const favoriteButton = screen.getByTestId("card-add-favorite-button");

    fireEvent.click(favoriteButton);

    await waitFor(() => {
      const favoriteIcon = screen.getByTestId("card-favorite-icon");

      expect(favoriteIcon).toBeInTheDocument();
    });

    await waitFor(() => {
      const deleteFavoriteButton = screen.getByTestId(
        "card-delete-favorite-button"
      );

      expect(deleteFavoriteButton).toBeInTheDocument();
    });
  });
});
