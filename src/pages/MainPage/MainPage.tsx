import Header from "components/Common/Header/Header";
import AlbumList from "components/Main/Album/AlbumList/AlbumList";
import Map from "components/Main/Map/Map";
import useAuth from "hooks/redux/useAuth";
import { Token } from "lib/Token";
import { useEffect } from "react";
import { MainContent, MainPageStyle } from "./PageStyle";
import { useHistory } from "react-router-dom";
import useAlbum from "hooks/redux/useAlbum";
import AlbumView from "components/Main/Album/AlbumView/AlbumView";
import CreateAlbumButton from "components/Main/CreateAlbumButton/CreateAlbumButton";

const Main = () => {
  const history = useHistory();
  const { authState, loadMyInfo } = useAuth();
  const { albumState } = useAlbum();

  useEffect(() => {
    if (!Token.getToken()) {
      history.push("/login");
    }
    if (!authState.myInfo) {
      loadMyInfo();
    }
  }, [loadMyInfo, authState, history]);

  return (
    <>
      <MainPageStyle>
        <Header />
        <MainContent>
          <Map albums={albumState.albums} setAlbums={() => {}} />
          <AlbumList albums={albumState.albums} />
        </MainContent>
        <CreateAlbumButton />
      </MainPageStyle>
      {albumState.albumOpen && <AlbumView />}
    </>
  );
};

export default Main;
