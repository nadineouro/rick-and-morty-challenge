import styled from "styled-components";
import colors from "../../styles/shared/colors";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 100px;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    li {
      font-size: 20px;
      color: ${colors.lightGray};
      cursor: pointer;
      margin-right: 32px;
      margin-bottom: 5px;
      &:last-child {
        margin-right: 0;
      }
      &.disabled {
        img {
          filter: invert(77%) sepia(84%) saturate(11%) hue-rotate(64deg)
            brightness(92%) contrast(98%);
        }
        cursor: default;
      }
      &.active {
        color: ${colors.neonGreen};
      }
    }
  }
`;
