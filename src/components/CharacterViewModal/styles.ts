import styled from "styled-components";
import colors from "../../styles/shared/colors";
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
`;

export const SideContent = styled.div`
  overflow: hidden;
  width: 32%;
  height: 100%;
  border-radius: 16px 0 0 16px;
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
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 70px;
  ${PlacementDescription} {
    margin-top: 60px;
  }
`;
