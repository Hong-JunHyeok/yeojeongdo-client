import styled from "@emotion/styled";
import { MAIN_COLOR } from "styles/colors";

export const CreateAlbumButtonContainer = styled.button`
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 99999;
  padding: 0.5rem 1rem;
  background-color: ${MAIN_COLOR};
  color: white;
  border: none;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: ease-in 0.2s;
  &:hover {
    filter: brightness(90%);
  }
`;
