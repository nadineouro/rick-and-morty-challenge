import styled from "styled-components";
import colors from "../../styles/shared/colors";
import { smallScreen } from "../../styles/shared/breakpoints";
import { mobileAndTablet, mediumScreen } from "../../styles/shared/breakpoints";
import { Button } from "../Button/styles";
import { Container as CardContainer } from "../Card/styles";
import { Container as PlacementDescription } from "../PlacementDescription/styles";
import { ModalContent as Modal } from "../Modal/styles";

type BackgroundPropsImage = {
  image: string;
};

export const Container = styled.div`
  ${smallScreen} {
    ${Modal} {
      margin: 15% auto;
      max-height: 75%;
    }
  }
  ${mediumScreen} {
    ${Modal} {
      margin: 10% auto;
      max-height: 60%;
    }
  }
`;

export const GeneralContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${colors.black};
  width: 100%;
  height: 100%;
  border-radius: 16px;

  ${mobileAndTablet} {
    flex-direction: column;
  }
  ${smallScreen} {
    max-height: 70vh;
  }
  ${mediumScreen} {
    max-height: 60vh;
  }
`;

export const SideContent = styled.div`
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

export const MainContent = styled.div`
  flex: 1;
  padding: 5%;
  overflow: auto;
  ${PlacementDescription} {
    margin-top: 5%;
  }

  ${mobileAndTablet} {
    padding: 20px;
  }
  ${smallScreen} {
    margin: 10% 0;
    ${PlacementDescription} {
      margin-top: 10%;
    }
  }
  ${mediumScreen} {
    margin: 5% 0;
  }
`;
