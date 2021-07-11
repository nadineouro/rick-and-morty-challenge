import React from "react";
import * as S from "./styles";
import logo from "../../assets/logo.svg";

type Props = {
  onClick?: () => void;
};

const Logo: React.FC<Props> = ({ onClick }) => (
  <S.Logo src={logo} alt="logo" onClick={onClick} />
);

export default Logo;
