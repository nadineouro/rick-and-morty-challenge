import React from "react";
import * as S from "./styles";

type Props = {
  image: string;
  mainText: string;
  subText: string;
  simple?: boolean;
  size?: "small" | "large";
  active?: boolean;
  bw?: boolean;
  id?: number;
  onClick?: (id?: number) => void;
  onFocus?: (id?: number) => void;
};

const Card: React.FC<Props> = ({
  id,
  image,
  mainText,
  subText,
  simple = false,
  size = "small",
  active = false,
  bw = false,
  onClick,
  onFocus,
}) => {
  const handleClick = () => onClick && onClick(id);

  const handleFocus = () => onFocus && onFocus(id);

  const handleKeyDown = (e: any) => {
    if (!onClick) return;
    if (e.keyCode === 13) onClick(id);
  };

  return (
    <S.Container
      image={image}
      active={active}
      simple={simple}
      size={size}
      bw={bw}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      tabIndex={0}
      data-testid="card"
    >
      <S.Background data-testid="mainBackground" />
      <S.CardContent data-testid="cardContent">
        <S.TextContent>
          <S.MainText data-testid="mainText">{mainText}</S.MainText>
          <S.SubText data-testid="subText">{subText}</S.SubText>
        </S.TextContent>
      </S.CardContent>
    </S.Container>
  );
};

export default Card;
