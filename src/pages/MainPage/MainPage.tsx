import Header from "components/Common/Header/Header";
import Map from "components/Main/Map/Map";
import useAuth from "hooks/redux/useAuth";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MainPageStyle } from "./PageStyle";

const Main = () => {
  const history = useHistory();
  const { authState, loadMyInfo } = useAuth();

  useEffect(() => {
    loadMyInfo();
  }, [loadMyInfo]);

  useEffect(() => {
    if (!authState.loginDone) {
      history.replace("/login");
    }
  }, [authState, history]);

  return (
    <MainPageStyle>
      <Header />
      <Map />
    </MainPageStyle>
  );
};

export default Main;
