import React from "react";
import Logo from "../components/Logo";
import * as S from "./styles";
import Input from "../components/Input";
import Button from "../components/Button";
import CharacterViewModal from "../components/CharacterViewModal";

const image = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";

const placementMock = {
  type: "Planet",
  name: "Earth (Replacement Dimension)",
  dimension: "Replacement Dimension",
  residents: 54,
};

const Home: React.FC<any> = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  return (
    <S.Container>
      <Logo />
      <S.InputGroup>
        <Input placeholder="Search characteres" />
        <Button onClick={() => setModalOpen(true)}>Search</Button>
        <CharacterViewModal
          open={modalOpen}
          character={{
            name: "Rick Sanchez",
            species: "Human",
            image,
            origin: placementMock,
            location: placementMock,
          }}
          onClose={() => setModalOpen(false)}
        />
      </S.InputGroup>
    </S.Container>
  );
};

export default Home;
