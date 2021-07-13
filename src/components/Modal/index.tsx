import React from "react";
import * as S from "./styles";

type Props = {
  open: boolean;
  onClose?: () => void;
};

const Modal: React.FC<Props> = ({ open, onClose = () => {}, children }) => {
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <S.Overlay open={open} onClick={onClose} data-testid="modalOverlay">
      <S.ModalContent onClick={(e) => e.stopPropagation()} data-testid="modal">
        {children}
      </S.ModalContent>
    </S.Overlay>
  );
};

export default Modal;
