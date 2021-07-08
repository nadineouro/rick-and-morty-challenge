import React from "react";
import Logo from "../components/Logo";
import * as S from "./styles";
import Input from "../components/Input";
import Button from "../components/Button";
import CharacterViewModal from "../components/CharacterViewModal";
import Loading from "../components/Loading";
import CharacterList from "../components/CharacterList";

import { useApolloClient } from "@apollo/client";
import { GET_CHARACTERS } from "../services/character/query";
import { Character, CharactersArgs } from "../services/character/types";

const Home: React.FC<any> = () => {
  const client = useApolloClient();

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [characters, setCharacters] = React.useState<any>();
  const [activeCharacter, setActiveCharacter] = React.useState<Character>();
  const [inputSearch, setInputSearch] = React.useState<string>("");

  const handleInputChange = (e: any) => setInputSearch(e.target.value);

  const handleClose = () => {
    setActiveCharacter(undefined);
    setModalOpen(false);
  };

  const handleClickCard = (id?: number) => {
    const currCharacter = characters.find(
      (character: Character) => character.id === id
    );
    setActiveCharacter(currCharacter);
    setModalOpen(true);
  };

  const handleSubmitSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const variables: CharactersArgs = {
      page: 1,
      filter: { name: inputSearch },
    };

    setCharacters(undefined);
    setLoading(true);

    const { data: { characters } = {} } = await client.query({
      query: GET_CHARACTERS,
      variables,
      errorPolicy: "ignore",
    });

    const { results } = characters || {};

    setCharacters(results);
    setLoading(false);
  };

  return (
    <S.Container>
      {loading && <Loading />}
      <Logo />
      <S.InputGroup onSubmit={handleSubmitSearch}>
        <Input
          value={inputSearch}
          onChange={handleInputChange}
          placeholder="Search characteres"
        />
        <Button type="submit">Search</Button>
      </S.InputGroup>
      <CharacterList
        characters={characters}
        onClick={handleClickCard}
        active={activeCharacter?.id}
      />
      {activeCharacter && (
        <CharacterViewModal
          open={modalOpen}
          onClose={handleClose}
          character={activeCharacter}
        />
      )}
    </S.Container>
  );
};

export default Home;
