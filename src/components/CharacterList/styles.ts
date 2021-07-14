import styled from "styled-components";
import { mobileAndTablet } from "../../styles/shared/breakpoints";
import { Container as Card } from "../Card/styles";

export const Container = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 70px 0;
  ${Card} {
    margin: 12px;
  }
  ${mobileAndTablet} {
    margin: 40px 0;
  }
`;
