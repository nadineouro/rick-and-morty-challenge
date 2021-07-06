import styled from "styled-components";
import { Container as Card } from "../Card/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 70px 0;
  ${Card} {
    margin: 20px;
  }
`;
