import styled from "@emotion/styled";
import { requestFollowAPI } from "apis/userAPI";
import DefaultProfile from "assets/images/default_profile.svg";
import Button from "components/Common/Button/Button";
import useAuth from "hooks/redux/useAuth";
import useUser from "hooks/redux/useUser";
import LoadingPage from "pages/LoadingPage/LoadingPage";
import { useCallback, useReducer } from "react";

export const ProfileContainer = styled.div`
  margin: 1.5rem 0;
  display: flex;
`;

export const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url(${DefaultProfile});
`;

export const ProfileInfo = styled.section`
  .profile_name {
    text-align: center;
  }
  .profile_follow {
    display: flex;
    width: 400px;
    justify-content: center;
    &_followings {
      padding: 0 1rem;
    }
    &_followers {
      padding: 0 1rem;
    }
  }
  .request_follow {
    text-align: center;
  }
`;

function followReducer(state: any, action: any) {
  switch (action.type) {
    case "USER_FOLLOW":
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case "USER_FOLLOW_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case "USER_FOLLOW_ERROR":
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
}

const Profile: React.VFC = () => {
  const [state, dispatch] = useReducer(followReducer, {
    loading: false,
    data: null,
    error: null,
  });
  const { userState } = useUser();
  const { userInfo } = userState;

  const { authState } = useAuth();
  const { myInfo } = authState;

  const handleRequestFollow = useCallback(async () => {
    try {
      dispatch({
        type: "USER_FOLLOW",
      });
      if (userInfo) {
        const response = await requestFollowAPI(userInfo.id);
        dispatch({
          type: "USER_FOLLOW_SUCCESS",
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: "USER_FOLLOW_ERROR",
        payload: error,
      });
    }
  }, [userInfo]);

  const { loading: followLoading } = state;

  // TODO: Follow Toggle데이터 분리

  return (
    <>
      <ProfileContainer>
        {userState.getUserInfoLoading ? (
          <LoadingPage />
        ) : (
          <>
            <ProfileImage />
            <ProfileInfo>
              <h1 className="profile_name">{userInfo?.name}</h1>
              <div className="profile_follow">
                <p className="profile_follow_followings">
                  팔로잉 : {userState.followNumbers.followingNum}
                </p>
                <p className="profile_follow_followers">
                  팔로워 : {userState.followNumbers.followerNum}
                </p>
              </div>
              {userInfo?.id !== myInfo?.id && (
                <div className="request_follow">
                  <Button onClick={handleRequestFollow}>
                    {followLoading ? "로딩중 ..." : "팔로우"}
                  </Button>
                </div>
              )}
            </ProfileInfo>
          </>
        )}
      </ProfileContainer>
    </>
  );
};

export default Profile;
