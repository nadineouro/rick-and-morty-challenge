import React from "react";
import * as S from "./styles";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return <S.Input {...props} />;
};

export default Input;
