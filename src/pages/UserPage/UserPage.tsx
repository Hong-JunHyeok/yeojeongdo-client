import Header from "components/Common/Header/Header";
import Profile from "components/User/Profile/Profile";
import useUser from "hooks/redux/useUser";
import { useCallback, useEffect, useReducer } from "react";
import { useParams } from "react-router";
import { requestFollowAPI } from "apis/userAPI";
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
        {userInfo && <Profile />}
      </UserPageContainer>
    </>
  );
};

export default UserPage;
