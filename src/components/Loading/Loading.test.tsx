import { render, screen } from "@testing-library/react";
import loading from "../../assets/loading.svg";

import Loading from ".";

describe("Loading", () => {
  it("should render loading", () => {
    render(<Loading show />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
    expect(screen.getByTestId("loadingOverlay")).toBeInTheDocument();
  });
  it("should not render loading", () => {
    render(<Loading show={false} />);
    expect(screen.queryByTestId("loading")).toBeNull();
    expect(screen.queryByTestId("loadingOverlay")).toBeNull();
  });
  it("should display loading with correct image", () => {
    render(<Loading />);
    expect(screen.getByRole("img")).toHaveAttribute("src", loading);
  });
});
