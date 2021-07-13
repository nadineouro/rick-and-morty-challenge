import { render, screen } from "@testing-library/react";

import { mockSearchContent } from "./mocks";
import SearchContent from ".";

describe("SearchContent", () => {
  it("should render searchContent and its correspondents children", () => {
    render(<SearchContent {...mockSearchContent} />);

    expect(screen.getByTestId("searchContent")).toBeInTheDocument();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
    expect(screen.getByTestId("characterList")).toBeInTheDocument();
    expect(screen.getByTestId("characterViewModal")).toBeInTheDocument();
  });
  it("should render searchContent without character view modal", () => {
    render(
      <SearchContent {...mockSearchContent} activeCharacter={undefined} />
    );

    expect(screen.queryByTestId("characterViewModal")).toBeNull();
  });
});
