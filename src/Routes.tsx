import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage/LoginPage";
import JoinPage from "pages/JoinPage/JoinPage";
import Main from "pages/MainPage/MainPage";
import useAuth from "hooks/redux/useAuth";
import { useEffect } from "react";
import LoadingPage from "pages/LoadingPage/LoadingPage";
import CreatePage from "pages/CreatePage/CreatetPage";
import UserPage from "pages/UserPage/UserPage";

const Routes = () => {
  const {
    loadMyInfo,
    authState: { loginLoading, loadMyInfoLoading },
  } = useAuth();

  useEffect(() => {
    if (!(window.location.pathname === "/login")) {
      loadMyInfo();
    }
  }, [loadMyInfo]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/create">
          <CreatePage />
        </Route>
        <Route exact path="/user/:userIdx">
          <UserPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/join">
          <JoinPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
