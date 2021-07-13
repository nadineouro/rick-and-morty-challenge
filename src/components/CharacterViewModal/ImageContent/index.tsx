import React from "react";
import * as S from "./styles";
import Button from "../../Button";
import Card from "../../Card";
import close from "../../../assets/icons/close.svg";
import useDevice from "../../../utils/useDevice";

type Props = {
  image: string;
  onClose?: () => void;
  mainText: string;
  subText: string;
};

const ImageContent: React.FC<Props> = ({
  image,
  mainText,
  subText,
  onClose,
}) => {
  const { isMobileOrTablet } = useDevice();
  return (
    <S.ImageContent data-testid="imageContent">
      <S.BackgroundImage data-testid="backgroundImage" image={image} />
      <S.Content>
        <Button onClick={onClose}>
          {isMobileOrTablet ? <img src={close} alt="close" /> : "Close"}
        </Button>
        <Card
          image={image}
          mainText={mainText}
          subText={subText}
          size="large"
          simple
        />
      </S.Content>
    </S.ImageContent>
  );
};

export default ImageContent;
