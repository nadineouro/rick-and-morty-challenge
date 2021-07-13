import React from "react";
import { useApolloClient } from "@apollo/client";
import { GET_CHARACTERS } from "../../services/character/query";
import { Character, CharactersArgs } from "../../services/character/types";
const useHome = () => {
  const client = useApolloClient();

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [characters, setCharacters] = React.useState<Character[]>();
  const [activeCharacter, setActiveCharacter] = React.useState<Character>();
  const [inputSearch, setInputSearch] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>();
  const [totalPages, setTotalPages] = React.useState<number>(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputSearch(e.target.value);

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
    const variables: CharactersArgs = { page, filter: { name: inputSearch } };

    setCharacters(undefined);
    setLoading(true);

    const { data: { characters } = {} } = await client.query({
      query: GET_CHARACTERS,
      variables,
      errorPolicy: "ignore",
    });

    const { results, info: { pages = 0 } = {} } = characters || {};
    if (pages !== totalPages) setTotalPages(pages);
    if (results) setCurrentPage(page);
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

  return {
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
  };
};

export default useHome;
