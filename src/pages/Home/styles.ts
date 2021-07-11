import styled from "styled-components";
import { Input } from "../../components/Input/styles";
import { Logo } from "../../components/Logo/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${Logo} {
    margin: 30px 0 70px;
  }
`;

export const InputGroup = styled.form`
  display: flex;
  flex-direction: row;
  ${Input} {
    margin-right: 16px;
  }
`;
