import { Token } from "lib/Token";
import isEmpty from "./isEmptyObject";

function checkLogin() {
  const tokenData = Token.getToken();
  if (isEmpty(tokenData)) {
    return false;
  }

  const { accessToken, refreshToken } = tokenData!;
}

export default checkLogin;
