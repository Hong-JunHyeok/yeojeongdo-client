interface FollowNumbers {
  followerNum: number;
  followingNum: number;
}

export interface UserState {
  getUserInfoLoading: boolean;
  getUserInfoError: null;
  getUserInfoDone: boolean;

  getAllUserInfoLoading: boolean;
  getAllUserInfoError: null;
  getAllUserInfoDone: boolean;

  getUserFollowingsLoading: boolean;
  getUserFollowingsError: null;
  getUserFollowingsDone: boolean;

  getUserFollowersLoading: boolean;
  getUserFollowersError: null;
  getUserFollowersDone: boolean;

  getUserFollowNumberLoading: boolean;
  getUserFollowNumberError: null;
  getUserFollowNumberDone: boolean;

  followNumbers: FollowNumbers;
  userInfo: User | null;
  followers: number;
  followings: number;
}
