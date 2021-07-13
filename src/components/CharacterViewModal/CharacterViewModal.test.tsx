import { render, screen } from "@testing-library/react";

import { character } from "../../mocks";
import CharacterViewModal from ".";

const mockCharacterViewModal = { open: true, onClose: () => {}, character };

describe("CharacterViewModal", () => {
  it("should render characterViewModal and its correspondents children", () => {
    render(<CharacterViewModal {...mockCharacterViewModal} />);

    expect(screen.getByTestId("characterViewModal")).toBeInTheDocument();
    expect(screen.getByTestId("imageContent")).toBeInTheDocument();
    expect(screen.getByTestId("mainContent")).toBeInTheDocument();
  });
  it("should not render characterViewModal content", () => {
    render(
      <CharacterViewModal {...mockCharacterViewModal} character={undefined} />
    );
    expect(screen.queryByTestId("modalGroup")).toBeNull();
  });
});
