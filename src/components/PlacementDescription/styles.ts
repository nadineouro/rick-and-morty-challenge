import styled from "styled-components";
import colors from "../../styles/shared/colors";
import { Title } from "../Title/styles";

export const Container = styled.div`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export const Type = styled.div`
  font-size: 14px;
  color: ${colors.gray};
`;

export const Name = styled.div`
  font-size: 28px;
`;

export const Dimension = styled.div`
  font-size: 18px;
  color: ${colors.lightGray};
  margin-bottom: 15px;
`;

export const Residents = styled.div`
  font-size: 14px;
  color: ${colors.gray};
`;

export const Icon = styled.img`
  margin-right: 10px;
`;
