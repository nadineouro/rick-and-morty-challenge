import styled from "styled-components";
import colors from "../../styles/shared/colors";
import { swing } from "../../styles/shared/animations";

export const Button = styled.button`
  padding: 10px 20px;
  border: 2px solid ${colors.white};
  border-radius: 8px;
  color: ${colors.white};
  background: transparent;
  cursor: pointer;
  &:hover {
    animation: ${swing} 0.4s;
    border-color: ${colors.neonGreen};
    color: ${colors.neonGreen};
  }
`;
