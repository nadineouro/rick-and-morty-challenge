import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { image } from "../../mocks";

import {
  mockCard,
  cardActiveLayout,
  cardSmallLayout,
  cardLargeLayout,
  bwLayout,
  bgLayout,
  bgSimpleLayout,
  cardSimpleLayout,
} from "./mocks";
import Card from ".";

const onClick = jest.fn();

describe("Card", () => {
  it("should render card with correct content", () => {
    render(<Card {...mockCard} />);
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByTestId("mainText")).toHaveTextContent("Main Text");
    expect(screen.getByTestId("subText")).toHaveTextContent("Sub Text");
    expect(screen.getByTestId("mainBackground")).toHaveStyle(bgLayout);
  });
  it("should render card with custom content background", () => {
    render(<Card {...mockCard} image={image} />);
    expect(screen.getByTestId("cardContent")).toHaveStyle(bgLayout);
  });
  it("should render card with simple layout", () => {
    render(<Card {...mockCard} simple />);
    const cardContent = screen.getByTestId("cardContent");

    expect(cardContent).not.toHaveStyle(bgLayout);
    expect(screen.getByTestId("mainBackground")).toHaveStyle(bgSimpleLayout);
    expect(cardContent).toHaveStyle(cardSimpleLayout);
    expect(screen.getByTestId("card")).not.toHaveStyle(cardActiveLayout);
  });
  it("should render card with active layout", () => {
    render(<Card {...mockCard} active />);
    expect(screen.getByTestId("card")).toHaveStyle(cardActiveLayout);
  });
  it("should render card with small layout", () => {
    render(<Card {...mockCard} size="small" />);
    expect(screen.getByTestId("card")).toHaveStyle(cardSmallLayout);
  });
  it("should render card with large layout", () => {
    render(<Card {...mockCard} size="large" />);
    expect(screen.getByTestId("card")).toHaveStyle(cardLargeLayout);
  });
  it("should render card with black and white layout (background content and main image)", () => {
    render(<Card {...mockCard} bw />);
    expect(screen.getByTestId("mainBackground")).toHaveStyle(bwLayout);
    expect(screen.getByTestId("cardContent")).toHaveStyle(bwLayout);
  });
  it("should trigger onClick event on click card", () => {
    render(<Card {...mockCard} onClick={onClick} />);
    userEvent.click(screen.getByTestId("cardContent"));
    expect(onClick).toBeCalledTimes(1);
  });
});
