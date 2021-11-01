import React from "react";
import ReactDOM from "react-dom";
import Routes from "Routes";
import GlobalStyle from "styles/globalStyle";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "store/reducers";
import axios from "axios";
import createSagaMiddleware from "redux-saga";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import rootSaga from "store/sagas";
import { Token } from "lib/Token";
import refreshAccessToken from "utils/refreshAccessToken";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(sagaMiddleware))
    : composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axios.defaults.headers["Authorization"] = ``;

axios.interceptors.request.use(
  async config => {
    const userToken = Token.getToken();
    const accessToken = userToken?.accessToken;
    config.headers = {
      Authorization: accessToken ? `Bearer ${accessToken}` : null,
      Accept: "application/json",
    };
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      console.log("토큰 만료");
      originalRequest._retry = true;
      const { refreshToken } = Token.getToken();

      const newTokenData = await refreshAccessToken(refreshToken);
      Token.setToken(newTokenData);

      const userInfoToken = Token.getToken();
      if (userInfoToken) {
        originalRequest.headers["Authorization"] =
          "Bearer " + userInfoToken.accessToken;
      }
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
