import styled from "styled-components";
import colors from "../../styles/shared/colors";
import { mobileAndTablet } from "../../styles/shared/breakpoints";
import { Title } from "../Title/styles";

export const Container = styled.div`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export const Type = styled.div`
  font-size: 14px;
  color: ${colors.gray};
  ${mobileAndTablet} {
    font-size: 12px;
  }
`;

export const Name = styled.div`
  font-size: 28px;
  ${mobileAndTablet} {
    font-size: 20px;
  }
`;

export const Dimension = styled.div`
  font-size: 18px;
  color: ${colors.lightGray};
  margin-bottom: 15px;
  ${mobileAndTablet} {
    font-size: 16px;
  }
`;
