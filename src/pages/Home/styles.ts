import styled from "styled-components";
import { Input } from "../../components/Input/styles";
import { Logo } from "../../components/Logo/styles";

import { mobileAndTablet } from "../../styles/shared/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${Logo} {
    margin: 30px 0 50px;
  }
`;

export const InputGroup = styled.form`
  display: flex;
  flex-direction: row;
  max-width: 80%;
  justify-content: center;
  ${Input} {
    margin-right: 16px;
    ${mobileAndTablet} {
      margin-right: 8px;
      max-width: 65%;
    }
  }
`;
