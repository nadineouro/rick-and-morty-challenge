import styled from "styled-components";
import colors from "../../styles/shared/colors";
import { smallScreen } from "../../styles/shared/breakpoints";
import { mobileAndTablet, mediumScreen } from "../../styles/shared/breakpoints";

import { ModalContent as Modal } from "../Modal/styles";

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

export const ModalGroup = styled.div`
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
