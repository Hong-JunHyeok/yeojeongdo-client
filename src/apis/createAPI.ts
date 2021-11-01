import axios from "axios";

export const createAlbum = (data: any) => {
  return axios.post("/album", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
