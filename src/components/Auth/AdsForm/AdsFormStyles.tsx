import styled from "@emotion/styled";

export const AdsContainer = styled.div`
  width: 496px;
  height: 595px;
  display: flex;
  flex-direction: column;
`;

export const AdContext = styled.div`
  width: 100%;
  display: flex;
  & > img {
    width: 225px;
    height: 276px;
  }
  & > div {
    width: 240px;
    margin-left: 16px;
  }
  div > h1 {
    font-size: 24px;
    margin: 0;
    margin-bottom: 12px;
  }
  div > a {
    font-size: 12px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const AdRoyalty = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
