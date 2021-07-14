import React from "react";
import { Character } from "../../services/character/types";
import Card from "../Card";

import * as S from "./styles";

type Props = {
  characters: Character[];
  active?: number;
  onClick: (id?: number) => void;
  onFocus: (id?: number) => void;
};

const CharacterList: React.FC<Props> = ({
  characters,
  onClick,
  active,
  onFocus,
}) => {
  if (!characters || !characters.length) return null;
  return (
    <S.Container data-testid="characterList" aria-label="List of Characters">
      {characters.map(({ id, image, name, species, status }) => (
        <S.ListItem key={id}>
          <Card
            key={id}
            id={id}
            image={image}
            mainText={name}
            subText={species}
            active={active === id}
            bw={status === "Dead"}
            onClick={onClick}
            onFocus={onFocus}
            data-testid="card"
          />
        </S.ListItem>
      ))}
    </S.Container>
  );
};

export default CharacterList;
