import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from ".";

const onClick = jest.fn();

describe("Button", () => {
  it("should render button with correct content", () => {
    render(<Button>Simple Button</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent("Simple Button");
  });
  it("should trigger onClick event when click button", () => {
    render(<Button onClick={onClick}>Simple Button</Button>);
    userEvent.click(screen.getByRole("button"));
    expect(onClick).toBeCalledTimes(1);
  });
});
