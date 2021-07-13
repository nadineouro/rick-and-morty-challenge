import React from "react";
import About from "../../About";
import PlacementDescription from "../../PlacementDescription";
import { Character } from "../../../services/character/types";

import * as S from "./styles";

type Props = {
  character: Character;
};

const MainContent: React.FC<Props> = ({
  character: { name, gender, species, type, status, episode, origin, location },
}) => {
  return (
    <S.MainContent data-testid="mainContent">
      <About
        name={name}
        gender={gender}
        species={species}
        type={type}
        status={status}
        episode={episode}
      />
      <PlacementDescription
        title="Origin"
        type={origin?.type}
        name={origin?.name}
        dimension={origin?.dimension}
        residents={origin?.residents}
      />
      <PlacementDescription
        title="Location"
        type={location?.type}
        name={location?.name}
        dimension={location?.dimension}
        residents={location?.residents}
      />
    </S.MainContent>
  );
};

export default MainContent;
