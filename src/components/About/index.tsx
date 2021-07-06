import React from "react";
import Title from "../Title";
import { Episode } from "../CharacterViewModal";

import * as S from "./styles";
import { getDescription } from "./helpers";

export type Props = {
  name: string;
  gender: string;
  species: string;
  status: string;
  episodes: Episode[];
  type: string;
};

const About: React.FC<Props> = (props) => {
  const description = getDescription(props);
  return (
    <S.Container>
      <Title>About</Title>
      {description}
    </S.Container>
  );
};

export default About;
