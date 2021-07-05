import styled from "styled-components";
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
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

export const SideContent = styled.div`
  overflow: hidden;
  width: 40%;
  height: 100%;
  border-radius: 16px 0 0 16px;
`;

export const BackgroundImage = styled.div<BackgroundPropsImage>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  height: 100%;
  opacity: 0.3;
  filter: blur(20px);
  -webkit-filter: blur(20px);
  -moz-filter: blur(20px);
  -o-filter: blur(20px);
  -ms-filter: blur(20px);
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  ${Button} {
    margin-bottom: 20px;
  }
  ${CardContainer} {
    margin-left: -25%;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 70px;
  ${PlacementDescription} {
    margin-bottom: 60px;
  }
`;
