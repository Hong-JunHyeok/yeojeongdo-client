import { userAlbumsAPI } from "apis/albumAPI";
import AlbumItem from "components/Main/Album/AlbumItem/AlbumItem";
import useUser from "hooks/redux/useUser";
import Map from "components/Main/Map/Map";
import React, { useCallback, useEffect, useState } from "react";
import { Album } from "types/album";
import { UserAlbumsContainer, UserAlbumList } from "./userAlbumsStyles";
import MenuHeader from "components/Common/Header/MenuHeader/MenuHeader";
import { useInView } from "react-intersection-observer";
import Profile from "components/User/Profile/Profile";

const UserAlbums: React.FunctionComponent = () => {
  const {
    userState: { userInfo, albums, getUserAlbumsLoading },
    getUserAlbums,
  } = useUser();

  const [ref, inView] = useInView();
  const [lastId, setLastId] = useState(0);

  // const getUserAlbum = useCallback(async () => {
  //   if (userInfo?.id) {
  //     try {
  //       setLoading(true);
  //       const resposne = await userAlbumsAPI(userInfo?.id, 0);

  //       setData(resposne.data.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //     }
  //   }
  // }, [userInfo?.id]);

  useEffect(() => {
    userInfo && getUserAlbums(userInfo.id, 0);
  }, [getUserAlbums, userInfo]);

  useEffect(() => {
    if (inView && getUserAlbumsLoading) {
      if (lastId !== 1) {
        userInfo && getUserAlbums(userInfo.id, lastId);
      }
    }
  }, [inView]);

  if (getUserAlbumsLoading) {
    <>로딩 중...</>;
  }

  return (
    <>
      <UserAlbumsContainer>
        <Map albums={albums} />
        <UserAlbumList>
          <MenuHeader />
          <Profile />
          {albums.map((album, index) => (
            <React.Fragment key={album.id}>
              {albums.length - 1 === index ? (
                <AlbumItem album={album} albumRef={ref} />
              ) : (
                <AlbumItem album={album} />
              )}
            </React.Fragment>
          ))}
        </UserAlbumList>
      </UserAlbumsContainer>
    </>
  );
};

export default UserAlbums;
