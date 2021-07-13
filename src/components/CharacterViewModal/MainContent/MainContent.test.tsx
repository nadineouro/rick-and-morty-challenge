import { render, screen } from "@testing-library/react";

import { character } from "../../../mocks";
import MainContent from ".";

describe("MainContent", () => {
  it("should render all main content components", () => {
    render(<MainContent character={character} />);

    expect(screen.getByTestId("mainContent")).toBeInTheDocument();
    expect(screen.getByTestId("about")).toBeInTheDocument();
    expect(
      screen.getByTestId("placementDescriptionOrigin")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("placementDescriptionLocation")
    ).toBeInTheDocument();
  });
});
