import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { image } from "../../mocks";
import colors from "../../styles/shared/colors";

import Card from ".";

const mockCard = { image, mainText: "Main Text", subText: "Sub Text" };

const mockLayout = {
  active: `border-color: ${colors.neonGreen}; box-shadow: 0 0 10px ${colors.neonGreen};`,
  small: `height: 224px; width: 224px;`,
  large: `height: 80%; width: 100%;`,
  blackAndWhite: `filter: grayscale();`,
  background: `background-image: url(${image})`,
  simpleBackground: `height: 90%`,
  simple: `height: 10%`,
};

const onClick = jest.fn();

describe("Card", () => {
  it("should render card with correct content", () => {
    render(<Card {...mockCard} />);
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByTestId("mainText")).toHaveTextContent("Main Text");
    expect(screen.getByTestId("subText")).toHaveTextContent("Sub Text");
    expect(screen.getByTestId("mainBackground")).toHaveStyle(
      mockLayout.background
    );
  });
  it("should render card with custom content background", () => {
    render(<Card {...mockCard} image={image} />);
    expect(screen.getByTestId("cardContent")).toHaveStyle(
      mockLayout.background
    );
  });
  it("should render card with simple layout", () => {
    render(<Card {...mockCard} simple />);
    const cardContent = screen.getByTestId("cardContent");

    expect(cardContent).not.toHaveStyle(mockLayout.background);
    expect(screen.getByTestId("mainBackground")).toHaveStyle(
      mockLayout.simpleBackground
    );
    expect(cardContent).toHaveStyle(mockLayout.simple);
    expect(screen.getByTestId("card")).not.toHaveStyle(mockLayout.active);
  });
  it("should render card with active layout", () => {
    render(<Card {...mockCard} active />);
    expect(screen.getByTestId("card")).toHaveStyle(mockLayout.active);
  });
  it("should render card with small layout", () => {
    render(<Card {...mockCard} size="small" />);
    expect(screen.getByTestId("card")).toHaveStyle(mockLayout.small);
  });
  it("should render card with large layout", () => {
    render(<Card {...mockCard} size="large" />);
    expect(screen.getByTestId("card")).toHaveStyle(mockLayout.large);
  });
  it("should render card with black and white layout (background content and main image)", () => {
    render(<Card {...mockCard} bw />);
    expect(screen.getByTestId("mainBackground")).toHaveStyle(
      mockLayout.blackAndWhite
    );
    expect(screen.getByTestId("cardContent")).toHaveStyle(
      mockLayout.blackAndWhite
    );
  });
  it("should trigger onClick event on click card", () => {
    render(<Card {...mockCard} onClick={onClick} />);
    userEvent.click(screen.getByTestId("cardContent"));
    expect(onClick).toBeCalledTimes(1);
  });
});
