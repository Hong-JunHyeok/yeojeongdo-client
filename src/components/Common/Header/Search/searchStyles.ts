import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  z-index: 9;
  form {
    min-height: 100%;
    flex-direction: row;
    align-items: center;
    box-shadow: none;
    padding: 0;
    flex: 1;
    background-color: white;
    box-shadow: none;
    /* border: 1px solid black; */
    input {
      margin: 0;
      flex: 2;
      border: 0;
    }
    input:focus {
      border: 0;
    }
    button {
      background-color: white;
      color: black;
      border: 0;
    }
  }
  .open-search {
    border-radius: 10px 10px 0 0;
  }
`;

export const SearchList = styled.div`
  display: flex;
  position: absolute;
  top: 52px;
  width: 100%;
  z-index: 10;
  flex-direction: column;
  background-color: white;
  border: 1px solid #989898;
`;

export const SearchListItem = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: bold;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
    }
    .subtitle {
      font-size: 0.5rem;
      color: gray;
      font-weight: 500;
    }
  }
  div:hover {
    background-color: whitesmoke;
  }
`;
