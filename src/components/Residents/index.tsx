import React from "react";
import people from "../../assets/icons/people.svg";
import { Resident } from "../../services/character/types";
import * as S from "./styles";

type Props = {
  residents?: Resident[];
};

const Residents: React.FC<Props> = ({ residents }) => {
  if (!residents?.length) return null;
  return (
    <S.Residents data-testid="residents">
      <S.Icon src={people} />
      {residents.length} residents
    </S.Residents>
  );
};

export default Residents;
