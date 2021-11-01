import styled from "@emotion/styled";
import { MAIN_COLOR } from "styles/colors";

export const CreateMenuContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 10px black;
  #albumFile {
    display: none;
  }

  .memo-input {
    margin: 1rem 0;
    resize: none;
    height: 100%;
    color: #777;
    border: 0;
    font-size: 18px;
    outline: none;
  }
  .create-contant {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;

export const CreateMenuMainView = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  p {
    font-size: 15px;
    font-weight: bold;
  }
`;

export const CreateMenuImageView = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 150px;
  height: 150px;
  .image-preview-container {
    width: 100%;
    height: 100%;
    font-weight: 500;
    .upload-require {
      background-color: lightgray;
      height: 100%;
      display: flex;
      justify-content: center;
      font-size: 12px;
      align-items: center;
    }
    .slider {
      width: 100%;
      img {
        height: 150px;
        overflow: hidden;
        object-fit: cover;
      }
      .image-length {
        position: relative;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        border-radius: 6.5px;
        width: 25px;
        height: 15px;
        font-size: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 0 auto;
        bottom: 25px;
        left: 5px;
      }
    }
  }
  .file-input {
    visibility: hidden;
  }
  .file-input-label {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
