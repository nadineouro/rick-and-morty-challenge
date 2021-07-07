import React from "react";
import Modal from "../Modal";
import * as S from "./styles";
import Button from "../Button";
import About from "../About";
import Card from "../Card";
import PlacementDescription from "../PlacementDescription";

type Placement = {
  type?: string;
  name?: string;
  dimension?: string;
  residents?: number;
};

export type Episode = {
  air_date: string;
};

type Character = {
  name: string;
  species: string;
  type: string;
  image: string;
  origin: Placement;
  location: Placement;
  gender: string;
  status: string;
  episodes: Episode[];
};

type Props = {
  open: boolean;
  onClose?: () => void;
  character: Character;
};

const CharacterViewModal: React.FC<Props> = ({
  open,
  onClose,
  character: {
    name,
    species,
    image,
    origin,
    location,
    gender,
    status,
    episodes,
    type,
  },
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <S.Container>
        <S.SideContent>
          <S.BackgroundImage image={image} />
          <S.Content>
            <Button onClick={onClose}>Close</Button>
            <Card
              image={image}
              mainText={name}
              subText={species}
              size="large"
              simple
            />
          </S.Content>
        </S.SideContent>
        <S.MainContent>
          <About
            name={name}
            gender={gender}
            species={species}
            type={type}
            status={status}
            episodes={episodes}
          />
          <PlacementDescription
            title="Origin"
            type={origin.type}
            name={origin.name}
            dimension={origin.dimension}
            residents={origin.residents}
          />
          <PlacementDescription
            title="Location"
            type={location.type}
            name={location.name}
            dimension={location.dimension}
            residents={location.residents}
          />
        </S.MainContent>
      </S.Container>
    </Modal>
  );
};

export default CharacterViewModal;
