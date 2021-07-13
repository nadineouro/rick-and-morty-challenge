import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from ".";

const onChange = jest.fn();

describe("Input", () => {
  it("should render input with correct value", () => {
    render(<Input value="Value" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute("value", "Value");
  });
  it("should trigger onChange event when user types", () => {
    render(<Input onChange={onChange} />);
    userEvent.type(screen.getByRole("textbox"), "test");
    expect(onChange).toBeCalledTimes("test".length);
  });
});
