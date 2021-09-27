import styled from "@emotion/styled";

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
`;
