import styled from "styled-components";
import colors from "../../styles/shared/colors";
import { mobileAndTablet, mediumScreen } from "../../styles/shared/breakpoints";
import { Button } from "../Button/styles";
import { Container as CardContainer } from "../Card/styles";
import { Container as PlacementDescription } from "../PlacementDescription/styles";

type BackgroundPropsImage = {
  image: string;
};

export const Container = styled.div`
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
`;

export const SideContent = styled.div`
  overflow: hidden;
  width: 32%;
  height: 100%;
  border-radius: 16px 0 0 16px;

  ${mobileAndTablet} {
    width: 100%;
    height: 12%;
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
    height: 15%;
    margin-top: -45%;
    ${Button} {
      position: absolute;
      top: 50%;
      border: none;
    }
    ${CardContainer} {
      margin: auto;
      margin-top: 20%;
    }
  }

  ${mediumScreen} {
    margin-top: -35%;
    ${Button} {
      top: 180%;
    }
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 70px;
  ${PlacementDescription} {
    margin-top: 60px;
  }

  ${mobileAndTablet} {
    position: absolute;
    top: 100px;
    width: 100%;
    padding: 20px;

    ${PlacementDescription} {
      margin-top: 40px;
    }
  }

  ${mediumScreen} {
    top: 30%;
  }
`;
