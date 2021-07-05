import React from "react";
import * as S from "./styles";

type Props = {
  image: string;
  mainText: string;
  subText: string;
  simple?: boolean;
  size?: "small" | "large";
};

const Card: React.FC<Props> = ({
  image,
  mainText,
  subText,
  simple = false,
  size = "small",
}) => {
  return (
    <S.Container active={false} simple={simple} size={size}>
      <S.Image src={image} alt="img" />
      <S.CardContent>
        <S.MainText>{mainText}</S.MainText>
        <S.SubText>{subText}</S.SubText>
      </S.CardContent>
    </S.Container>
  );
};

export default Card;
