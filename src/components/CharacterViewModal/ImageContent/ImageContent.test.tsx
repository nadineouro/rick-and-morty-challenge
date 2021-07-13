import { render, screen } from "@testing-library/react";

import { image } from "../../../mocks";
import ImageContent from ".";

const mockImageContent = { image, mainText: "Rick Sanchez", subText: "Human" };

describe("ImageContent", () => {
  it("should render all image content components", () => {
    render(<ImageContent {...mockImageContent} />);
    expect(screen.getByTestId("imageContent")).toBeInTheDocument();
    expect(screen.getByTestId("backgroundImage")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
