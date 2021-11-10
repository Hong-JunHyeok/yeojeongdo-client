import styled from "@emotion/styled";

export const UserAlbumsContainer = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  display: flex;
  justify-content: space-between;
`;

export const UserAlbumList = styled.div`
  margin: 0;
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
