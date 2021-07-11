import styled from "styled-components";
import colors from "../../styles/shared/colors";
import { mobileAndTablet } from "../../styles/shared/breakpoints";

type ModalProps = {
  open: boolean;
};

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 90%;
  background-color: ${colors.white};
  border-radius: 16px;
  ${mobileAndTablet} {
    width: 90%;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;

export const Overlay = styled.div<ModalProps>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  ${ModalContent} {
    display: ${(props) => (props.open ? "block" : "none")};
  } ;
`;
