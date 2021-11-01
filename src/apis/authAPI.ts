import axios from "axios";

interface LoginData {
  id: string;
  password: string;
}

interface JoinData {
  id: string;
  password: string;
  confirmPassword: string;
  birth: string;
  sex: string;
  name: string;
}

export const loginAPI = (loginData: LoginData) => {
  return axios.post("/auth/login", loginData);
};

export const loadMyInfoAPI = () => {
  return axios.get("/user");
};

export const joinAPI = (joinData: JoinData) => {
  return axios.post("/auth/register", joinData);
};
