import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { withVegLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should test RestaurantCard with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText("Great Indian Khichdi by EatFit");

  //Assertion
  expect(resName).toBeInTheDocument();
});
