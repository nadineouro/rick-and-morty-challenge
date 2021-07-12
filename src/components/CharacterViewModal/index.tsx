import React from "react";
import Modal from "../Modal";
import * as S from "./styles";
import Button from "../Button";
import About from "../About";
import Card from "../Card";
import PlacementDescription from "../PlacementDescription";
import { Character } from "../../services/character/types";

import useDevice from "../../utils/useDevice";
import close from "../../assets/icons/close.svg";

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
    episode,
    type,
  },
}) => {
  const { isMobileOrTablet } = useDevice();
  return (
    <S.Container>
      <Modal open={open} onClose={onClose}>
        <S.GeneralContent>
          <S.SideContent>
            <S.BackgroundImage image={image} />
            <S.Content>
              <Button onClick={onClose}>
                {isMobileOrTablet ? <img src={close} alt="fechar" /> : "Close"}
              </Button>
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
              episode={episode}
            />
            <PlacementDescription
              title="Origin"
              type={origin?.type}
              name={origin?.name}
              dimension={origin?.dimension}
              residents={origin?.residents}
            />
            <PlacementDescription
              title="Location"
              type={location?.type}
              name={location?.name}
              dimension={location?.dimension}
              residents={location?.residents}
            />
          </S.MainContent>
        </S.GeneralContent>
      </Modal>
    </S.Container>
  );
};

export default CharacterViewModal;
