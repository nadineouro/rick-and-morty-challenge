import React from "react";
import Title from "../Title";

import * as S from "./styles";
import { getDescription } from "./helpers";
import { Character } from "../../services/character/types";

export type Props = Pick<
  Character,
  "name" | "status" | "gender" | "species" | "episode" | "type"
>;

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
