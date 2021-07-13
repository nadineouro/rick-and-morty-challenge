import { render, screen } from "@testing-library/react";

import { character } from "../../mocks";
import About from ".";

describe("About", () => {
  it("should render component about with correct information", () => {
    render(<About {...character} />);
    expect(screen.getByTestId("about")).toBeInTheDocument();
    expect(screen.getByTestId("about")).toHaveTextContent(
      "Rick Sanchez is a male human. He is alive and well. Last seen in May 31, 2020."
    );
  });
});
