import styled from "styled-components";
import colors from "../../styles/shared/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 8px;
  margin-bottom: 30px;
`;

export const Text = styled.div`
  font-size: 28px;
  color: ${colors.white};
`;
