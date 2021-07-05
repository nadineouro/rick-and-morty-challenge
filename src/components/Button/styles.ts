import styled from "styled-components";
import colors from "../../styles/shared/colors";

export const Button = styled.button`
  padding: 10px 20px;
  border: 2px solid ${colors.white};
  border-radius: 8px;
  color: ${colors.white};
  background: transparent;
  cursor: pointer;
  &:hover {
    border-color: ${colors.neonGreen};
    color: ${colors.neonGreen};
  }
`;
