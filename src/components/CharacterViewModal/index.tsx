import React from "react";
import Modal from "../Modal";
import * as S from "./styles";
import { Character } from "../../services/character/types";

import ImageContent from "./ImageContent";
import MainContent from "./MainContent";

type Props = {
  open: boolean;
  onClose?: () => void;
  character: Character;
};

const CharacterViewModal: React.FC<Props> = ({ open, onClose, character }) => {
  return (
    <S.Container data-testid="characterViewModal">
      <Modal open={open} onClose={onClose}>
        <S.ModalGroup>
          <ImageContent
            image={character.image}
            mainText={character.name}
            subText={character.species}
          />
          <MainContent character={character} />
        </S.ModalGroup>
      </Modal>
    </S.Container>
  );
};

export default CharacterViewModal;
