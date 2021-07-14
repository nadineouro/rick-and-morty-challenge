import React from "react";
import * as S from "./styles";
import logo from "../../assets/logo.svg";

type Props = {
  onClick?: () => void;
  title?: string;
};

const Logo: React.FC<Props> = ({ onClick, title }) => {
  const handleKeyDown = (e: any) => {
    if (!onClick) return;
    if (e.keyCode === 13) onClick();
  };

  return (
    <S.Logo
      src={logo}
      alt="Logo"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      title={title}
    />
  );
};

export default Logo;
