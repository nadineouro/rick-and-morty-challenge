import { createGlobalStyle } from "styled-components";
import background from "../assets/background.svg";
import colors from "./shared/colors";

export default createGlobalStyle`
  * {
    margin: 0 auto;
    box-sizing: border-box;
  }
  
  body {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-color: black;
    color: ${colors.white};
    font-family: "Nunito", sans-serif;
    font-size: 16px;
    font-weight: 400;
    strong {
      font-weight: 700;
    }
  }
`;
