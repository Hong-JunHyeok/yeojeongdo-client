import styled from "@emotion/styled";
import { MAIN_COLOR } from "styles/colors";

export const LoginContainer = styled.div`
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
  .link-to-join {
    font-weight: lighter;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    color: ${MAIN_COLOR};
  }
`;
