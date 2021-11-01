import styled from "@emotion/styled";

export const AlbumItemContainer = styled.div`
  width: 100%;
  display: flex;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  & > .header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header > img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > h4 {
      margin: 0;
      text-align: start;
    }
    & > p {
      text-align: start;
      margin: 0;
    }
    & > img {
      margin-left: auto;
      width: 31px;
      height: 31px;
    }
    .thumnail {
      width: 100%;
      height: 500px;
      object-fit: contain;
    }
  }
`;
