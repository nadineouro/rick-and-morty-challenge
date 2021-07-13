import styled from "styled-components";
import {
  mobileAndTablet,
  smallScreen,
  mediumScreen,
} from "../../../styles/shared/breakpoints";
import { Container as PlacementDescription } from "../../PlacementDescription/styles";

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
