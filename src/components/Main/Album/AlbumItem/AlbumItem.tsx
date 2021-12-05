import useAlbum from "hooks/redux/useAlbum";
import { AlbumItemContainer } from "./albumItemStyles";
import DefaultProfile from "assets/images/default_profile.svg";
import TimeCounting from "time-counting";
import { Ref, useCallback } from "react";
import { Album } from "types/album";
import { useHistory } from "react-router";

interface AlbumItemProps {
  album: Album;
  albumRef?: Ref<any>;
}

const AlbumItem: React.VFC<AlbumItemProps> = ({ album, albumRef }) => {
  const history = useHistory();
  const { openAlbum, getAlbum } = useAlbum();

  const handlePushUserProfile = useCallback(
    (
      event: React.MouseEvent<HTMLImageElement, MouseEvent>,
      userIdx: number
    ) => {
      event.stopPropagation();
      history.push(`/user/${userIdx}`);
    },
    [history]
  );

  const handleClickAlbum = useCallback(() => {
    openAlbum();
    getAlbum(album.id);
  }, [openAlbum, getAlbum, album.id]);

  return (
    <AlbumItemContainer onClick={handleClickAlbum} ref={albumRef}>
      <div className="header">
        <img src={`${album.photo}`} alt="" className="thumnail" />
      </div>
      <div className="content">
        <div className="user">
          <h4 className="userName">{album.user.name}</h4>
          <img
            src={album.user.image ? `${album.user.image}` : DefaultProfile}
            alt=""
            className="profile"
            onClick={(event) => handlePushUserProfile(event, album.user.id)}
          />
        </div>
        <p>{TimeCounting(album.createDate, { lang: "ko" })}</p>
        <p>📍{album.building.address}</p>
      </div>
    </AlbumItemContainer>
  );
};

export default AlbumItem;
