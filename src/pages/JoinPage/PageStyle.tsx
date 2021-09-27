import styled from "@emotion/styled";

export const JoinPageLayout = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: calc(100vh - 90vh);
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
