import { render, screen } from "@testing-library/react";

import { character } from "../../mocks";
import SearchContent from ".";

const func = jest.fn();

const mockSearchContent = {
  characters: [character],
  handleClickCard: func,
  handleFocusCard: func,
  modalOpen: true,
  handleClose: func,
  handlePageChange: func,
  currentPage: 1,
  totalPages: 10,
  activeCharacter: character,
};

describe("SearchContent", () => {
  it("should render searchContent and its correspondents children", () => {
    render(<SearchContent {...mockSearchContent} />);

    expect(screen.getByTestId("searchContent")).toBeInTheDocument();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
    expect(screen.getByTestId("characterList")).toBeInTheDocument();
    expect(screen.getByTestId("characterViewModal")).toBeInTheDocument();
  });
  it("should render searchContent without character view modal content", () => {
    render(
      <SearchContent {...mockSearchContent} activeCharacter={undefined} />
    );
    expect(screen.queryByTestId("modalGroup")).toBeNull();
  });
});
