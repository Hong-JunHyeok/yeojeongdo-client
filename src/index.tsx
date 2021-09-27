import React from "react";
import ReactDOM from "react-dom";
import Routes from "Routes";
import GlobalStyle from "styles/globalStyle";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "store/reducers";
import axios from "axios";
import createSagaMiddleware from "redux-saga";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import rootSaga from "store/sagas";

const sagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(sagaMiddleware))
    : composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancer);
// const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor} loading={null}> */}
      <GlobalStyle />
      <Routes />
      {/* </PersistGate> */}
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
