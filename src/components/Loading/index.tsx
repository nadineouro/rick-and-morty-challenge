import React from "react";
import * as S from "./styles";
import loading from "../../assets/loading.svg";

type Props = {
  show?: boolean;
};

const Loading: React.FC<Props> = ({ show = true }) => {
  if (!show) return null;
  return (
    <S.Overlay data-testid="loadingOverlay">
      <S.Container data-testid="loading">
        <S.Image src={loading} alt="loading" />
        <S.Text>Loading</S.Text>
      </S.Container>
    </S.Overlay>
  );
};

export default Loading;
