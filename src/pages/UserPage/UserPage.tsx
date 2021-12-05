import Header from "components/Common/Header/Header";
import AlbumView from "components/Main/Album/AlbumView/AlbumView";
import UserAlbums from "components/User/Profile/UserAlbums/UserAlbums";
import useAlbum from "hooks/redux/useAlbum";
import useUser from "hooks/redux/useUser";
import { useEffect } from "react";
import { useParams } from "react-router";
import { UserPageContainer } from "./PageStyle";

const UserPage = () => {
  const params = useParams<{ userIdx?: string | undefined }>();

  const { albumState } = useAlbum();
  const { userState, getUserInfoAll } = useUser();
  const { userInfo } = userState;

  useEffect(() => {
    getUserInfoAll(Number(params.userIdx));
  }, [getUserInfoAll, params.userIdx]);

  return (
    <>
      <UserPageContainer>
        <Header />
        {userInfo && <UserAlbums />}
        {albumState.albumOpen && <AlbumView />}
      </UserPageContainer>
    </>
  );
};

export default UserPage;
