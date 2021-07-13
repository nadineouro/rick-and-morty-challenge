import { character } from "../../mocks";

export const onClick = jest.fn();

export const mockCharacterList = {
  characters: [character],
  onClick,
};
