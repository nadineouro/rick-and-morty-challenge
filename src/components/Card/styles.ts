import styled, { css } from "styled-components";
import colors from "../../styles/shared/colors";
import { swing } from "../../styles/shared/animations";
import {
  mobileAndTablet,
  smallScreen,
  mediumScreen,
} from "../../styles/shared/breakpoints";

type CardProps = {
  image: string;
  active: boolean;
  simple: boolean;
  size: "small" | "large";
  bw: boolean;
};

const getActiveCardStyle = () => css`
  border-color: ${colors.neonGreen};
  box-shadow: 0 0 10px ${colors.neonGreen};
  animation: ${swing} 0.4s;
`;

const getBackgroundStyle = (image: string, bw: boolean) => css`
  background-image: url(${image});
  background-position: center;
  background-size: cover;
  ${bw &&
  css`
    filter: grayscale();
  `};
`;

export const Background = styled.div`
  width: 100%;
`;

export const CardContent = styled.div`
  width: 100%;
`;

export const Container = styled.div<CardProps>`
  ${(props) => css`
    outline: none;
    height: ${props.size === "small" ? "224px" : "80%"};
    width: ${props.size === "small" ? "224px" : "100%"};
    overflow: hidden;
    border: 2px solid ${colors.darkGray};
    border-radius: 8px;
    ${props.active && getActiveCardStyle()}
    ${!props.simple &&
    css`
      &:hover,
      &:active {
        ${getActiveCardStyle()}
        cursor: pointer;
      }
    `}
    ${Background} {
      height: ${props.simple ? "90%" : "75%"};
      ${getBackgroundStyle(props.image, props.bw)}
    }
    ${CardContent} {
      height: ${props.simple ? "10%" : "25%"};
      ${!props.simple && getBackgroundStyle(props.image, props.bw)};
    }

    ${mobileAndTablet} {
      width: ${props.size === "large" && "70%"};
      ${Background} {
        height: 70%;
      }
      ${CardContent} {
        height: 30%;
        ${getBackgroundStyle(props.image, props.bw)}
      }
    }
    ${smallScreen} {
      height: ${props.size === "large" && "190px"};
    }
    ${mediumScreen} {
      height: ${props.size === "large" && "230px"};
    }
  `};
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: 100%;
  backdrop-filter: blur(6px) brightness(25%);
  ${mobileAndTablet} {
    backdrop-filter: blur(10px) brightness(25%);
  }
`;

export const MainText = styled.strong`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  color: ${colors.white};
`;

export const SubText = styled.div`
  width: 100%;
  font-size: 12px;
  line-height: 15px;
  color: ${colors.white};
`;
