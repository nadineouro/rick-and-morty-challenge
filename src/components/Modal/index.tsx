import React from "react";
import * as S from "./styles";

type Props = {
  open: boolean;
  onClose?: () => void;
};

const Modal: React.FC<Props> = ({ open, onClose = () => {}, children }) => {
  const close = React.useCallback(
    (e: any) => {
      if (!open) return;
      if (e.keyCode === 27) onClose();
    },
    [onClose, open]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [close]);

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
