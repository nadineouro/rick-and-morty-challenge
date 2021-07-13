import { render, screen } from "@testing-library/react";

import { mockImageContent } from "./mocks";
import ImageContent from ".";

describe("ImageContent", () => {
  it("should render all image content components", () => {
    render(<ImageContent {...mockImageContent} />);
    expect(screen.getByTestId("imageContent")).toBeInTheDocument();
    expect(screen.getByTestId("backgroundImage")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
