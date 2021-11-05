import styled from "@emotion/styled";

export const AlbumListContainer = styled.div`
  & > h1 {
    width: 100%;
  }
  margin: 0;
  /* flex: 2; */
  height: 100%;
  text-align: center;
  list-style: none;
  max-height: 100%;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;

  .toggle {
    position: absolute;
  }
`;
