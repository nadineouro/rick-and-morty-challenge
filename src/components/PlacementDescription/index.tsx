import React from "react";
import Title from "../Title";
import * as S from "./styles";
import people from "../../assets/icons/people.svg";

type Props = {
  title: string;
  type?: string;
  name?: string;
  dimension?: string;
  residents?: number;
};

const PlacementDescription: React.FC<Props> = ({
  title,
  type,
  name,
  dimension,
  residents,
}) => {
  return (
    <S.Container>
      <Title>{title}</Title>
      <S.Type>{type || "Unknown Planet"}</S.Type>
      <S.Name>{name || "Unknown"}</S.Name>
      <S.Dimension>{dimension || "Unknown"}</S.Dimension>
      {residents && (
        <S.Residents>
          <S.Icon src={people} />
          {residents} residents
        </S.Residents>
      )}
    </S.Container>
  );
};

export default PlacementDescription;
