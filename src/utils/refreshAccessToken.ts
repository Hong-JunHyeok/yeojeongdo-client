import axios from "axios";

async function refreshAccessToken(refreshToken: string) {
  const response = await axios.post("/auth/token-renewal", {
    token: refreshToken,
  });

  console.log(response);
  return response.data.data;
}

export default refreshAccessToken;
