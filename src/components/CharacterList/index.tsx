import React from "react";
import { Character } from "../../services/character/types";
import Card from "../Card";

import * as S from "./styles";

type Props = {
  characters: Character[];
  active?: number;
  onClick: (id?: number) => void;
};

const CharacterList: React.FC<Props> = ({ characters, onClick, active }) => {
  if (!characters || !characters.length) return null;
  return (
    <S.Container>
      {characters.map(({ id, image, name, species, status }) => (
        <Card
          key={id}
          id={id}
          image={image}
          mainText={name}
          subText={species}
          active={active === id}
          bw={status === "Dead"}
          onClick={onClick}
        />
      ))}
    </S.Container>
  );
};

export default CharacterList;
