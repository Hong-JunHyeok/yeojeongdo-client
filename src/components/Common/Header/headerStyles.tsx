import styled from "@emotion/styled";
import { MAIN_COLOR } from "styles/colors";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  background-color: ${MAIN_COLOR};
  position: fixed;
  left: 0;
  top: 0;
  gap: 15px;
  z-index: 9999;
  .header-title {
    font-size: 16px;
    flex: 1;
  }
  .header-options {
    display: flex;
    list-style: none;
    flex: 5;
    justify-content: space-between;
    align-items: center;
    li {
      margin-right: 1rem;
    }
    & > .logout {
      cursor: pointer;
    }
  }
`;
