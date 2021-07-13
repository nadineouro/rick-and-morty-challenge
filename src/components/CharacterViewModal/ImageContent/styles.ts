import styled from "styled-components";
import {
  mobileAndTablet,
  mediumScreen,
} from "../../../styles/shared/breakpoints";
import { Button } from "../../Button/styles";
import { Container as CardContainer } from "../../Card/styles";

type BackgroundPropsImage = {
  image: string;
};

export const ImageContent = styled.div`
  overflow: hidden;
  width: 32%;
  height: 100%;
  border-radius: 16px 0 0 16px;

  ${mobileAndTablet} {
    width: 100%;
    min-height: 70px;
    border-radius: 16px 16px 0 0;
  }
`;

export const BackgroundImage = styled.div<BackgroundPropsImage>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 100%;
  opacity: 0.3;
  filter: blur(25px);
  ${mobileAndTablet} {
    height: 70px;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32%;
  height: 100%;
  margin: 20px;
  ${Button} {
    margin-bottom: 20px;
  }
  ${CardContainer} {
    margin-left: -20%;
  }

  ${mobileAndTablet} {
    margin: 0;
    width: 100%;
    height: auto;
    top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${Button} {
      position: absolute;
      bottom: 80%;
      left: -5%;
      border: none;
    }
    ${CardContainer} {
      margin: 0;
    }
  }
  ${mediumScreen} {
    top: -130px;
  }
`;
