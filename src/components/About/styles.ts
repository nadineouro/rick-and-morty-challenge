import styled from "styled-components";
import { Title } from "../Title/styles";
import colors from "../../styles/shared/colors";

export const Container = styled.div`
  color: ${colors.lightGray};
  line-height: 20px;
  ${Title} {
    margin-bottom: 10px;
  }
`;
