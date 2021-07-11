import React from "react";
import Title from "../Title";
import * as S from "./styles";
import people from "../../assets/icons/people.svg";
import { Resident } from "../../services/character/types";

import useDevice from "../../utils/useDevice";

type Props = {
  title: string;
  type?: string;
  name?: string;
  dimension?: string;
  residents?: Resident[];
};

const PlacementDescription: React.FC<Props> = ({
  title,
  type,
  name,
  dimension,
  residents,
}) => {
  const { isMobileOrTablet } = useDevice();
  if (isMobileOrTablet && (!type || !name || !dimension)) return null;
  return (
    <S.Container>
      <Title>{title}</Title>
      <S.Type>{type || "Unknown Planet"}</S.Type>
      <S.Name>{name || "Unknown"}</S.Name>
      <S.Dimension>{dimension || "Unknown"}</S.Dimension>
      {!!residents?.length && (
        <S.Residents>
          <S.Icon src={people} />
          {residents.length} residents
        </S.Residents>
      )}
    </S.Container>
  );
};

export default PlacementDescription;
