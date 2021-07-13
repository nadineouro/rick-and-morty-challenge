import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { character } from "../../mocks";
import CharacterList from ".";

const onClick = jest.fn();
const mockCharacterList = { characters: [character], onClick };

describe("CharacterList", () => {
  it("should render characterList", () => {
    render(<CharacterList {...mockCharacterList} />);
    expect(screen.getByTestId("characterList")).toBeInTheDocument();
  });
  it("should not render characterList", () => {
    render(<CharacterList {...mockCharacterList} characters={[]} />);
    expect(screen.queryByTestId("characterList")).toBeNull();
  });
  it("should trigger onClick event on click some card", () => {
    render(<CharacterList {...mockCharacterList} />);
    userEvent.click(screen.getByTestId("card"));
    expect(onClick).toBeCalledTimes(1);
  });
});
