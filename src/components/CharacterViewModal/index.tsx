import React from "react";
import Modal from "../Modal";
import * as S from "./styles";
import Button from "../Button";
import Card from "../Card";
import PlacementDescription from "../PlacementDescription";

type Placement = {
  type?: string;
  name?: string;
  dimension?: string;
  residents?: number;
};

type Character = {
  name: string;
  species: string;
  image: string;
  origin: Placement;
  location: Placement;
};

type Props = {
  open: boolean;
  onClose?: () => void;
  character: Character;
};

const CharacterViewModal: React.FC<Props> = ({
  open,
  onClose,
  character: { name, species, image, origin, location },
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <S.Container>
        <S.SideContent>
          <S.BackgroundImage image={image} />
          <S.Content>
            <Button onClick={onClose}>Close</Button>
            {/* <Card
              image={image}
              mainText={name}
              subText={species}
              size="large"
            /> */}
          </S.Content>
        </S.SideContent>
        <S.MainContent>
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
