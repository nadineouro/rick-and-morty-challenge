import React from "react";
import * as S from "./styles";

type Props = {
  open: boolean;
  onClose?: () => void;
};

const Modal: React.FC<Props> = ({ open, onClose = () => {}, children }) => (
  <S.Overlay open={open} onClick={onClose}>
    <S.ModalContent onClick={(e) => e.stopPropagation()}>
      {children}
    </S.ModalContent>
  </S.Overlay>
);

export default Modal;
