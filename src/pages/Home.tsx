import React from "react";
import { useApolloClient } from "@apollo/client";

import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import Loading from "../components/Loading";
import SearchContent from "../components/SearchContent";

import { GET_CHARACTERS } from "../services/character/query";
import { Character, CharactersArgs } from "../services/character/types";

import * as S from "./styles";

const Home: React.FC = () => {
  const client = useApolloClient();

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [characters, setCharacters] = React.useState<Character[]>();
  const [activeCharacter, setActiveCharacter] = React.useState<Character>();
  const [inputSearch, setInputSearch] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>();
  const [totalPages, setTotalPages] = React.useState<number>(1);

  const handleInputChange = (e: any) => setInputSearch(e.target.value);

  const handleClose = () => {
    setActiveCharacter(undefined);
    setModalOpen(false);
  };

  const handleClickCard = (id?: number) => {
    const currCharacter = characters?.find(
      (character: Character) => character.id === id
    );
    setActiveCharacter(currCharacter);
    setModalOpen(true);
  };

  const searchCharacters = async (page: number) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    const variables: CharactersArgs = { page, filter: { name: inputSearch } };

    setCharacters(undefined);
    setLoading(true);

    const { data: { characters } = {} } = await client.query({
      query: GET_CHARACTERS,
      variables,
      errorPolicy: "ignore",
    });

    const { results, info: { pages = 1 } = {} } = characters || {};

    if (pages !== totalPages) setTotalPages(pages);
    setCharacters(results);
    setLoading(false);
  };

  const handleSubmitSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await searchCharacters(1);
  };

  const handlePageChange = (selected: number) => searchCharacters(selected + 1);

  const handleClickLogo = () => {
    setCharacters(undefined);
    setCurrentPage(undefined);
    setInputSearch("");
  };

  return (
    <S.Container>
      {loading && <Loading />}
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
