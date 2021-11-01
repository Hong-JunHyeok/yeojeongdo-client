import MenuHeader from "components/Common/Header/MenuHeader/MenuHeader";
import useAlbum from "hooks/redux/useAlbum";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Album } from "types/album";
import AlbumItem from "../AlbumItem/AlbumItem";
import { AlbumListContainer } from "./albumListStyles";

const AlbumList: React.VFC<{ albums: Album[] }> = ({ albums }) => {
  const { getAlbums, albumState } = useAlbum();
  const [lastId, setLastId] = useState<number>(10);
  const [ref, inView] = useInView();

  useEffect(() => {
    getAlbums(0);
  }, [getAlbums]);

  useEffect(() => {
    if (inView && !albumState.loadAlbumsLoading) {
      getAlbums(lastId);
      setLastId((prev) => prev + 10);
    }
  }, [inView, getAlbums, lastId, albumState.loadAlbumsLoading]);

  return (
    <AlbumListContainer>
      <MenuHeader />
      {albums.map((album, index) => (
        <React.Fragment key={album.id}>
          {/* {albums.length - 1 === index ? (
            <AlbumItem album={album} albumRef={ref} />
          ) : ( */}
          <AlbumItem album={album} />
          {/* )} */}
        </React.Fragment>
      ))}
    </AlbumListContainer>
  );
};

export default AlbumList;
