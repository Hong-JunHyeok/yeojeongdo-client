import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LoginPage from "pages/LoginPage/LoginPage";
import JoinPage from "pages/JoinPage/JoinPage";
import Main from "pages/MainPage/MainPage";
import { useEffect } from "react";
import useAuth from "hooks/redux/useAuth";

const Routes = () => {
  const { loadMyInfo } = useAuth();

  useEffect(() => {
    loadMyInfo();
  }, [loadMyInfo]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
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
