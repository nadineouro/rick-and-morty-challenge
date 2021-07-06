import styled from "styled-components";
import colors from "../../styles/shared/colors";

type ContainerProps = {
  src: string;
  alt: string;
  active: boolean;
  simple: boolean;
  size: "small" | "large";
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: flex-end;
  width: ${(props) => (props.size === "small" ? 224 : 400)}px;
  height: ${(props) => (props.size === "small" ? 224 : 400)}px;
  border: 2px solid
    ${(props) => (props.active ? colors.neonGreen : colors.darkGray)};
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 8px;
`;

// export const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 8px 8px 0 0;
// `;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  backdrop-filter: blur(10px);
`;

export const MainText = styled.strong`
  width: 100%;
  font-size: 20px;
  color: ${colors.white};
`;

export const SubText = styled.div`
  width: 100%;
  font-size: 12px;
  color: ${colors.white};
`;
