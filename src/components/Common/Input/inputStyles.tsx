import styled from "@emotion/styled";
import { MAIN_COLOR } from "styles/colors";

export const InputContainer = styled.input`
  border: 1px solid black;
  outline: none;
  height: 50px;
  padding: 0 9px 0 9px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: bold;
  transition: ease-in-out 0.2s;
  &:focus {
    border: 1px solid ${MAIN_COLOR};
  }
`;
