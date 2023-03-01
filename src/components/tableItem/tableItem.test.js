import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import TableItem from "./tableItem";

const item = [
  {
    id: "0001",
    title: "Spiderman",
    overview:
      "I'm baby cardigan same live-edge, craft beer vinyl selfies snackwave affogato literally DSA actually air plant fingerstache subway tile asymmetrical.",
  },
];

describe("<TableItem />", () => {
  afterEach(async () => {
    await cleanup();
  });

  test("render tableItem", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TableItem info={item} />
        </BrowserRouter>
      </Provider>
    );

    const tableItem = screen.getByTestId("table-item");
    expect(tableItem).toBeInTheDocument();
  });
});
