import { render, screen } from "@testing-library/react";

import people from "../../assets/icons/people.svg";
import Residents from ".";

const mockResidents = { residents: [{ id: 1 }, { id: 2 }] };

describe("Residents", () => {
  it("should render Residents with correct people number", () => {
    render(<Residents {...mockResidents} />);
    const residents = screen.getByTestId("residents");

    expect(residents).toBeInTheDocument();
    expect(residents).toHaveTextContent("2 residents");
  });
  it("should not render Residents", () => {
    render(<Residents />);
    expect(screen.queryByTestId("residents")).toBeNull();
  });
  it("should render Residents with correct icon", () => {
    render(<Residents {...mockResidents} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", people);
  });
});
