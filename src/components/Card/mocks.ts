import colors from "../../styles/shared/colors";
import { image } from "../../mocks";

export const mockCard = {
  image,
  mainText: "Main Text",
  subText: "Sub Text",
};

export const cardActiveLayout = `
  border-color: ${colors.neonGreen};
  box-shadow: 0 0 10px ${colors.neonGreen};
`;

export const cardSmallLayout = `
  height: 224px;
  width: 224px;
`;

export const cardLargeLayout = `
  height: 80%;
  width: 100%;
`;

export const bwLayout = `filter: grayscale();`;

export const bgLayout = `background-image: url(${image})`;

export const bgSimpleLayout = `height: 90%`;

export const cardSimpleLayout = `height: 10%`;
