import styled from "@emotion/styled";

export const AlbumListContainer = styled.div`
  & > h1 {
    width: 100%;
  }
  margin: 0;
  padding: 15px;
  flex: 2;
  height: 100%;
  text-align: center;
  list-style: none;
  max-height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
