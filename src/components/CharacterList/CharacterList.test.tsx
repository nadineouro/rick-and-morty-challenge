import { render, screen } from "@testing-library/react";

import { character } from "../../mocks";
import CharacterList from ".";

const onClick = jest.fn();
const onFocus = jest.fn();
const mockCharacterList = { characters: [character], onClick, onFocus };

describe("CharacterList", () => {
  it("should render characterList", () => {
    render(<CharacterList {...mockCharacterList} />);
    expect(screen.getByTestId("characterList")).toBeInTheDocument();
  });
  it("should not render characterList", () => {
    render(<CharacterList {...mockCharacterList} characters={[]} />);
    expect(screen.queryByTestId("characterList")).toBeNull();
  });
});
