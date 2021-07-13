import { render, screen } from "@testing-library/react";

import Title from ".";

describe("Title", () => {
  it("should render title with correct text", () => {
    render(<Title>Title</Title>);
    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Title");
  });
  it("should have spaced layout", () => {
    render(<Title>Title</Title>);
    expect(screen.getByTestId("title")).toHaveStyle(`letter-spacing: 10px`);
  });
});
