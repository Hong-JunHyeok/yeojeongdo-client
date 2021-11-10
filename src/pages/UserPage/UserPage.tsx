import Header from "components/Common/Header/Header";
import UserAlbums from "components/User/Profile/UserAlbums/UserAlbums";
import useUser from "hooks/redux/useUser";
import { useEffect } from "react";
import { useParams } from "react-router";
import { UserPageContainer } from "./PageStyle";

const UserPage = () => {
  const params = useParams<{ userIdx?: string | undefined }>();

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
      </UserPageContainer>
    </>
  );
};

export default UserPage;
