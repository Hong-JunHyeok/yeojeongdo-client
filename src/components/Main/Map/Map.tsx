import useAlbum from "hooks/redux/useAlbum";
import useSearch from "hooks/redux/useSearch";
import { useCallback, useEffect, useState } from "react";
import {
  CustomOverlayMap,
  Map as CustomMap,
  MapMarker,
  MarkerClusterer,
} from "react-kakao-maps-sdk";
import { Album } from "types/album";
import { CustomOverlayMapContant } from "./mapStyles";

interface mapType {
  albums: Album[];
}

const Map = ({ albums }: mapType) => {
  // const [latitude, setLatitude] = useState<number>(35.6632143);
  // const [longTitude, setLongTitude] = useState<number>(128.4140176);
  const { searchMapListState, setCenterSearching } = useSearch();

  const [mapAlbumList, setMapAlbumList] = useState<Array<Album[]>>([]);

  interface AddressItem {
    [key: string]: Array<Album>;
  }

  const addressList: AddressItem = {};

  useEffect(() => {
    albums.forEach((album) => {
      if (!addressList[album.building.address]) {
        addressList[album.building.address] = [];
      }
      addressList[album.building.address].push(album);
    });

    for (const key in addressList) {
      setMapAlbumList((albumList) => [...albumList, addressList[key]]);
    }
  }, [albums]);

  const { getAlbum, openAlbumList, openAlbum } = useAlbum();

  const handleClickMarker = useCallback(
    (markerIdList) => {
      markerIdList[1] ? openAlbumList(markerIdList) : openAlbum();
      getAlbum(markerIdList[0]);
    },
    [openAlbumList, getAlbum, openAlbum]
  );

  return (
    <CustomMap
      center={searchMapListState.centerSearching}
      style={{
        // 지도의 크기
        flex: 3,
        width: "100%",
        height: "100%",
      }}
      level={13}
      onDragEnd={(e) =>
        setCenterSearching({
          lat: e.getCenter().getLat(),
          lng: e.getCenter().getLng(),
        })
      }
    >
      {mapAlbumList.map((albums, index) => {
        const album = albums[0];
        return (
          <CustomOverlayMap
            key={index}
            position={{
              lat: album.building.latitude,
              lng: album.building.longitude,
            }}
            id={album.building.address}
          >
            <MarkerClusterer>
              <CustomOverlayMapContant
                onClick={() =>
                  handleClickMarker(albums.map((album) => album.id))
                }
              >
                <img
                  width="50"
                  height="50"
                  src={`http://${album.photo}`}
                  alt=""
                />
                {albums.length > 1 && (
                  <div className="image-length"> {"+" + albums.length}</div>
                )}
              </CustomOverlayMapContant>
            </MarkerClusterer>
          </CustomOverlayMap>
        );
      })}

      <MarkerClusterer>
        {searchMapListState.searchMapList &&
          searchMapListState.searchMapList.map((current) => (
            <MapMarker
              position={{ lat: current.y, lng: current.x }}
              infoWindowOptions={{ className: "map_marker" }}
            >
              {current.address_name + "/" + current.place_name}
            </MapMarker>
          ))}
      </MarkerClusterer>
    </CustomMap>
  );
};

export default Map;
