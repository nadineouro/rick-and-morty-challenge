import { keyframes } from "styled-components";

export const ellipsis = keyframes`
  0%,
  100% {
    width: 0px;
  }
  50% {
    width: 25px;
  }
`;

export const swing = keyframes`
  0%,
  100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(1deg);
  }
  50% {
    transform: rotate(-1deg);
  }
`;
