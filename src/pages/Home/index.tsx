import React from "react";

import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import SearchContent from "../../components/SearchContent";

import * as S from "./styles";
import useHome from "./hooks";

const Home: React.FC = () => {
  const {
    loading,
    handleClickLogo,
    handleSubmitSearch,
    inputSearch,
    handleInputChange,
    characters,
    currentPage,
    handleClickCard,
    activeCharacter,
    modalOpen,
    handleClose,
    handlePageChange,
    totalPages,
  } = useHome();
  return (
    <S.Container>
      <Loading show={loading} />
      <Logo onClick={handleClickLogo} />
      <S.InputGroup onSubmit={handleSubmitSearch}>
        <Input
          value={inputSearch}
          onChange={handleInputChange}
          placeholder="Search characteres"
        />
        <Button type="submit">Search</Button>
      </S.InputGroup>
      {characters && currentPage && (
        <SearchContent
          characters={characters}
          handleClickCard={handleClickCard}
          activeCharacter={activeCharacter}
          modalOpen={modalOpen}
          handleClose={handleClose}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </S.Container>
  );
};

export default Home;
