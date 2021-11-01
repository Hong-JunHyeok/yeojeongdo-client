import styled from "@emotion/styled";
import { MAIN_COLOR } from "styles/colors";

export const HeaderContainer = styled.header`
  background-color: ${MAIN_COLOR};
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  gap: 15px;
  .header-title {
    font-size: 16px;
  }
  .header-search {
    display: flex;
    justify-content: center;
  }
  .header-options {
    display: flex;
    list-style: none;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    li {
      cursor: pointer;
      margin-right: 1rem;
    }
    & > .logout {
      cursor: pointer;
    }
  }
`;
