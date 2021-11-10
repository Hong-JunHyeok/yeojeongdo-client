import styled from "@emotion/styled";
import { MAIN_COLOR } from "styles/colors";

export const AlbumViewContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  .album_header {
    width: 100%;
    height: 50px;
    position: fixed;
    position: absolute;
    &_close {
      width: 60px;
      height: 60px;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      cursor: pointer;
      color: white;
      user-select: none;
      position: absolute;
      z-index: 99999999;
    }
  }
  .album_main {
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
      .album_main_comments {
        width: 100%;
      }
      .album_main_photo {
        object-fit: contain;
      }
    }
    &_photos {
      flex: 3;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .slick-list {
        width: 600px;
        .slick-slide {
          max-height: 600px;
        }
      }
      .slick-track {
        display: flex;
        align-items: center;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      button {
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        transition: 0.3s ease-in-out;
        border: 0;
      }
      button:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
      .slick-dots {
        li {
          width: 10px;
          height: 10px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
        }
        button::before {
          content: "";
        }
        .slick-active {
          background-color: ${MAIN_COLOR};
          border-radius: 50%;
        }
      }
    }
    &_content {
      width: 400px;
      height: 100vh;
      overflow-y: auto;
      padding: 1rem 10px;
      background-color: white;
      &_info {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        & > span {
          padding-left: 1rem;
          font-weight: lighter;
        }
      }
      &_tools {
        display: flex;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        .liked {
          color: ${MAIN_COLOR};
        }
        & > button {
          flex: 1;
          border: none;
          cursor: pointer;
          background-color: white;
          padding: 1rem;
          &:hover {
            background-color: rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
  .album_profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
    }
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      object-fit: cover;
    }
    h1 {
      margin: 0;
      text-align: start;
    }
  }
`;
