import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import logo from "../../assets/logo.svg";
import Logo from ".";

const onClick = jest.fn();

describe("Logo", () => {
  it("should render logo with correct image", () => {
    render(<Logo />);
    const img = screen.getByRole("img");

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", logo);
  });
  it("should trigger onClick event", () => {
    render(<Logo onClick={onClick} />);
    userEvent.click(screen.getByRole("img"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
