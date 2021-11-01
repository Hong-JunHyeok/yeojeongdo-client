import styled from "@emotion/styled";
import { MAIN_COLOR } from "styles/colors";

export const JoinFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h1 {
    font-size: 24px;
  }
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }
  & > input {
    width: 100%;
  }
  .birth {
    display: flex;
    flex-direction: column;
  }
  .flexBox {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
  .flexBox > div {
    width: 50%;
  }

  .name > input {
    width: 97.5%;
  }
  .sexButtons {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
  .sexButtons > button {
    width: 45%;
    height: 50px;
  }
  .link-to-login {
    font-weight: lighter;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    color: ${MAIN_COLOR};
  }
`;
