import styled from "styled-components";
import colors from "../../styles/shared/colors";
import { mobileAndTablet } from "../../styles/shared/breakpoints";
import { ellipsis } from "../../styles/shared/animations";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(25px);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Image = styled.img`
  border-radius: 8px;
  margin-bottom: 30px;
  border: 2px solid ${colors.darkGray};
`;

export const Text = styled.div`
  font-size: 28px;
  color: ${colors.white};
  ${mobileAndTablet} {
    font-size: 18px;
  }
  :after {
    display: inline-block;
    vertical-align: bottom;
    overflow: hidden;
    animation: ${ellipsis} 3s infinite;
    content: "...";
    color: ${colors.white};
  }
`;
