import React from "react";
import * as S from "./styles";
import loading from "../../assets/loading.svg";

type Props = {
  isShowing?: boolean;
};

const Loading: React.FC<Props> = ({ isShowing = true }) => {
  if (!isShowing) return null;
  return (
    <S.Overlay>
      <S.Container>
        <S.Image src={loading} />
        <S.Text>Loading</S.Text>
      </S.Container>
    </S.Overlay>
  );
};

export default Loading;
