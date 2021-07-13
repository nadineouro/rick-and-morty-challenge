import React from "react";
import * as S from "./styles";

const Title: React.FC = ({ children }) => (
  <S.Title data-testid="title">{children}</S.Title>
);

export default Title;
