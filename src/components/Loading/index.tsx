import React from "react";
import * as S from "./styles";
import loading from "../../assets/loading.svg";

const Loading: React.FC = () => {
  return (
    <S.Overlay>
      <S.Container>
        <S.Image src={loading} />
        <S.Text>Loading...</S.Text>
      </S.Container>
    </S.Overlay>
  );
};

export default Loading;
