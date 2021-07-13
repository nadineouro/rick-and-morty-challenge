import React from "react";
import Title from "../Title";
import Residents from "../Residents";

import { Resident } from "../../services/character/types";
import useDevice from "../../utils/useDevice";

import * as S from "./styles";

type Props = {
  title: string;
  type?: string;
  name?: string;
  dimension?: string;
  residents?: Resident[];
};

const PlacementDescription: React.FC<Props> = ({
  title,
  type = "Unknown Planet",
  name = "Unknown",
  dimension = "Unknown",
  residents,
}) => {
  const { isMobileOrTablet } = useDevice();

  const missingProps = [type, name, dimension].some((prop) =>
    prop?.includes("Unknown")
  );
  if (isMobileOrTablet && missingProps) return null;

  return (
    <S.Container data-testid={`placementDescription${title}`}>
      <Title>{title}</Title>
      <S.Type data-testid='locationType'>{type}</S.Type>
      <S.Name data-testid='locationName'>{name}</S.Name>
      <S.Dimension data-testid='locationDimension'>{dimension}</S.Dimension>
      <Residents residents={residents} />
    </S.Container>
  );
};

export default PlacementDescription;
