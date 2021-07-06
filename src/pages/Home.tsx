import React from "react";
import Logo from "../components/Logo";
import * as S from "./styles";
import Input from "../components/Input";
import Button from "../components/Button";
import CharacterViewModal from "../components/CharacterViewModal";
import Loading from "../components/Loading";
import CharacterList from "../components/CharacterList";

const image = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";

const placementMock = {
  type: "Planet",
  name: "Earth (Replacement Dimension)",
  dimension: "Replacement Dimension",
  residents: 54,
};

const Home: React.FC<any> = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [characters, setCharacters] = React.useState<any>();

  const character = {
    id: 1,
    name: "Rick Sanchez",
    species: "Human",
    type: "",
    image,
    origin: placementMock,
    location: placementMock,
    gender: "Male",
    status: "Alive",
    episodes: [{ air_date: "May 31, 2020" }],
  };

  const handleClickSearch = () => {
    setCharacters(undefined);
    setLoading(true);
    setTimeout(() => {
      const chars = Array(12)
        .fill("")
        .map(() => character);
      setCharacters(chars);
      setLoading(false);
    }, 1000);
  };

  return (
    <S.Container>
      {loading && <Loading />}
      <Logo />
      <S.InputGroup>
        <Input placeholder="Search characteres" />
        <Button onClick={handleClickSearch}>Search</Button>
      </S.InputGroup>
      <CharacterList characters={characters} />
      <CharacterViewModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        character={character}
      />
    </S.Container>
  );
};

export default Home;
