interface TokenData {
  accessToken: string;
  refreshToken: string;
}

export class Token {
  static getToken(): TokenData {
    const tokenData = localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token")!)
      : null;

    return tokenData;
  }
  static setToken(tokenData: TokenData) {
    localStorage.setItem("token", JSON.stringify(tokenData));
  }
  static removeToken() {
    localStorage.removeItem("token");
  }
}
