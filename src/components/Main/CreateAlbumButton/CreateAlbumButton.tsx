import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { CreateAlbumButtonContainer } from "./createAlbumButtonStyles";

const CreateAlbumButton = () => {
  const history = useHistory();

  const pushCreateAlbumPage = useCallback(() => {
    history.push("/create");
  }, [history]);

  return (
    <>
      <CreateAlbumButtonContainer onClick={pushCreateAlbumPage}>
        앨범 생성하기
      </CreateAlbumButtonContainer>
    </>
  );
};

export default CreateAlbumButton;
