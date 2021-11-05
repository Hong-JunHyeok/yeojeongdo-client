import MenuHeader from "components/Common/Header/MenuHeader/MenuHeader";
import useAlbum from "hooks/redux/useAlbum";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Album } from "types/album";
import AlbumItem from "../AlbumItem/AlbumItem";
import { AlbumListContainer } from "./albumListStyles";

interface mapType {
  albums: Album[];
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
}

const AlbumList = ({ albums, setAlbums }: mapType) => {
  const { getAlbums, albumState, toggleAlbums } = useAlbum();
  const [lastId, setLastId] = useState<number>(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    getAlbums(0);
  }, [getAlbums]);

  const { albumsOpen } = albumState;

  useEffect(() => {
    if (inView && !albumState.loadAlbumsLoading) {
      if (lastId !== 1) {
        getAlbums(lastId);
      }
    }
  }, [inView]);

  useEffect(() => {
    setLastId(() => albums[albums.length - 1]?.id);
  }, [albums]);

  return (
    <AlbumListContainer>
      <div>
        <MenuHeader />
        {albums.map((album, index) => (
          <React.Fragment key={album.id}>
            {albums.length - 1 === index ? (
              <AlbumItem album={album} albumRef={ref} />
            ) : (
              <AlbumItem album={album} />
            )}
          </React.Fragment>
        ))}
      </div>
    </AlbumListContainer>
  );
};

export default AlbumList;
