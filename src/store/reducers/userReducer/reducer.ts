import produce from "immer";
import * as userActions from "./actions";
import { createReducer } from "typesafe-actions";
import { UserState } from "./types";

const initialState: UserState = {
  getUserInfoLoading: false,
  getUserInfoError: null,
  getUserInfoDone: false,

  getAllUserInfoLoading: false,
  getAllUserInfoError: null,
  getAllUserInfoDone: false,

  getUserFollowingsLoading: false,
  getUserFollowingsError: null,
  getUserFollowingsDone: false,

  getUserFollowersLoading: false,
  getUserFollowersError: null,
  getUserFollowersDone: false,

  getUserFollowNumberLoading: false,
  getUserFollowNumberError: null,
  getUserFollowNumberDone: false,

  userFollowLoading: false,
  userFollowError: null,
  userFollowDone: false,

  followNumbers: { followerNum: 0, followingNum: 0 },
  isFollow: false,
  userInfo: null,
  followers: 0,
  followings: 0,

  albums: [],
  getUserAlbumsLoading: false,
  getUserAlbumsError: null,
  getUserAlbumsDone: false,
};

export default createReducer<UserState>(initialState, {
  [userActions.GET_USER_INFO_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.getUserInfoLoading = true;
      draft.getUserInfoDone = false;
      draft.getUserInfoError = null;

      draft.userInfo = null;
    }),
  [userActions.GET_USER_INFO_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserInfoLoading = false;
      draft.getUserInfoDone = true;
      draft.userInfo = action.payload;
    }),
  [userActions.GET_USER_INFO_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserInfoLoading = false;
      draft.getUserInfoDone = false;
      draft.getUserInfoError = action.payload;
    }),
  [userActions.GET_USER_FOLLOWERS_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.getUserFollowersLoading = true;
      draft.getUserFollowersDone = false;
      draft.getUserFollowersError = null;
    }),
  [userActions.GET_USER_FOLLOWERS_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserFollowersLoading = false;
      draft.getUserFollowersDone = true;
      draft.followers = action.payload;
    }),
  [userActions.GET_USER_FOLLOWERS_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserFollowersLoading = false;
      draft.getUserFollowersDone = false;
      draft.getUserFollowersError = action.payload;
    }),
  [userActions.GET_USER_FOLLOWINGS_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.getUserFollowingsLoading = true;
      draft.getUserFollowingsDone = false;
      draft.getUserFollowingsError = null;
    }),
  [userActions.GET_USER_FOLLOWINGS_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserFollowingsLoading = false;
      draft.getUserFollowingsDone = true;
      draft.followings = action.payload;
    }),
  [userActions.GET_USER_FOLLOWINGS_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserFollowingsLoading = false;
      draft.getUserFollowingsDone = false;
      draft.getUserFollowingsError = action.payload;
    }),
  [userActions.GET_USER_FOLLOW_NUMBER_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.getUserFollowNumberLoading = true;
      draft.getUserFollowNumberDone = false;
      draft.getUserFollowNumberError = null;
    }),
  [userActions.GET_USER_FOLLOW_NUMBER_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserFollowNumberLoading = false;
      draft.getUserFollowNumberDone = true;
      draft.followNumbers = action.payload;
    }),
  [userActions.GET_USER_FOLLOW_NUMBER_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserFollowNumberLoading = false;
      draft.getUserFollowNumberDone = false;
      draft.getUserFollowNumberError = action.payload;
    }),
  [userActions.GET_USER_INFO_ALL_REQUEST]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserInfoLoading = true;
      draft.getUserInfoDone = false;
      draft.getUserInfoError = null;
    }),
  [userActions.USER_FOLLOW]: (state, action) =>
    produce(state, (draft) => {
      draft.userFollowDone = false;
      draft.userFollowLoading = true;
    }),
  [userActions.USER_FOLLOW_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.userFollowLoading = false;
      draft.userFollowDone = true;
      draft.followNumbers.followerNum += action.payload.change;
      draft.isFollow = action.payload.isFollow;
    }),
  [userActions.USER_FOLLOW_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.userFollowError = action.payload;
      draft.userFollowLoading = false;
      draft.userFollowDone = false;
    }),
  [userActions.INIT_USER_FOLLOW]: (state, action) =>
    produce(state, (draft) => {
      draft.isFollow = action.payload;
    }),
  [userActions.CHANGE_PROFILE]: (state, action) =>
    produce(state, (draft) => {
      if (draft.userInfo) {
        draft.userInfo.image = action.payload;
      }
    }),
  [userActions.CHANGE_NAME]: (state, action) =>
    produce(state, (draft) => {
      if (draft.userInfo) {
        draft.userInfo.name = action.payload;
      }
    }),
  [userActions.CHANGE_BIRTH]: (state, action) =>
    produce(state, (draft) => {
      if (draft.userInfo) {
        draft.userInfo.birthDay = action.payload;
      }
    }),

  [userActions.GET_USER_ALBUMS_REQUEST]: (state, action) =>
    produce(state, (draft) => {
      draft.albums = [];
      draft.getUserAlbumsLoading = true;
      draft.getUserAlbumsDone = false;
      draft.getUserAlbumsError = null;
    }),
  [userActions.GET_USER_ALBUMS_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.albums = action.payload;
      draft.getUserAlbumsLoading = false;
      draft.getUserAlbumsDone = true;
      draft.getUserAlbumsError = null;
    }),
  [userActions.GET_USER_ALBUMS_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.albums = [];
      draft.getUserAlbumsLoading = false;
      draft.getUserAlbumsDone = false;
      draft.getUserAlbumsError = action.payload;
    }),
});
