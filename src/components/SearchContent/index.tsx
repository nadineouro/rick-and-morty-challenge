import React from "react";
import { Character } from "../../services/character/types";

import CharacterList from "../CharacterList";
import CharacterViewModal from "../CharacterViewModal";
import Pagination from "../Pagination";

import * as S from "./styles";

type Props = {
  characters: Character[];
  handleClickCard: (id?: number) => void;
  activeCharacter?: Character;
  modalOpen: boolean;
  handleClose: () => void;
  handlePageChange: (selected: number) => void;
  currentPage: number;
  totalPages: number;
};

const SearchContent: React.FC<Props> = ({
  characters,
  handleClickCard,
  activeCharacter,
  modalOpen,
  handleClose,
  handlePageChange,
  currentPage,
  totalPages,
}) => {
  return (
    <S.Container data-testid="searchContent">
      <CharacterList
        characters={characters}
        onClick={handleClickCard}
        active={activeCharacter?.id}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={handlePageChange}
      />
      <CharacterViewModal
        open={modalOpen}
        onClose={handleClose}
        character={activeCharacter}
      />
    </S.Container>
  );
};

export default SearchContent;
