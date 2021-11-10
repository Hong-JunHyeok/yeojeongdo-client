import { Album } from "types/album";

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

  userFollowLoading: boolean;
  userFollowError: null;
  userFollowDone: boolean;

  followNumbers: FollowNumbers;
  userInfo: User | null;
  isFollow: boolean;
  followers: number;
  followings: number;

  albums: Album[];

  getUserAlbumsLoading: boolean;
  getUserAlbumsError: null;
  getUserAlbumsDone: boolean;
}
