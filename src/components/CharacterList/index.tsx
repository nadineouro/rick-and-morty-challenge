import React from "react";
import { Character } from "../About";
import Card from "../Card";

import * as S from "./styles";

type Props = {
  characters: Character[];
};

const CharacterList: React.FC<Props> = ({ characters }) => {
  if (!characters || !characters.length) return null;
  return (
    <S.Container>
      {characters.map(({ id, image, name, species }) => (
        <Card key={id} image={image} mainText={name} subText={species} />
      ))}
    </S.Container>
  );
};

export default CharacterList;
