import axios from "axios";

export const userInfoAPI = (userIdx: number) => {
  return axios.get(`/user`, {
    params: {
      idx: userIdx,
    },
  });
};

export const followNumberAPI = (userIdx: number) => {
  return axios.get(`/follow/numbers/${userIdx}`);
};

export const followersAPI = (userIdx: number) => {
  return axios.get(`/user/followers/${userIdx}`);
};

export const followingsAPI = (userIdx: number) => {
  return axios.get(`/user/followings/${userIdx}`);
};

export const requestFollowAPI = (userIdx: number) => {
  return axios.patch(`/follow/${userIdx}`);
};
