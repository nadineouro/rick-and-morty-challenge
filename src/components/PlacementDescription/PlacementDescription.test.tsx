import { render, screen } from "@testing-library/react";

import { mockPlacementDescription } from "./mocks";
import PlacementDescription from ".";

describe("PlacementDescription", () => {
  it("should render PlacementDescription with correct properties", () => {
    render(<PlacementDescription {...mockPlacementDescription} />);
    expect(
      screen.getByTestId("placementDescriptionOrigin")
    ).toBeInTheDocument();
    expect(screen.getByTestId("title")).toHaveTextContent("Origin");
    expect(screen.getByTestId("locationType")).toHaveTextContent("Planet");
    expect(screen.getByTestId("locationName")).toHaveTextContent(
      "Earth (C-137)"
    );
    expect(screen.getByTestId("locationDimension")).toHaveTextContent(
      "Dimension C-137"
    );
  });
});
