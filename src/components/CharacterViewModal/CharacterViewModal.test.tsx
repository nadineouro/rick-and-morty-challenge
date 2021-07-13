import { render, screen } from "@testing-library/react";

import { mockCharacterViewModal } from "./mocks";
import CharacterViewModal from ".";

describe("CharacterViewModal", () => {
  it("should render characterViewModal and its correspondents children", () => {
    render(<CharacterViewModal {...mockCharacterViewModal} />);

    expect(screen.getByTestId("characterViewModal")).toBeInTheDocument();
    expect(screen.getByTestId("imageContent")).toBeInTheDocument();
    expect(screen.getByTestId("mainContent")).toBeInTheDocument();
  });
});
