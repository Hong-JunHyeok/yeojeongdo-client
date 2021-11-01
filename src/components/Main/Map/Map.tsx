import useSearch from "hooks/redux/useSearch";
import { useEffect, useState } from "react";
import {
  CustomOverlayMap,
  Map as CustomMap,
  MapMarker,
  MarkerClusterer,
} from "react-kakao-maps-sdk";
import { Album } from "types/album";

interface mapType {
  albums: Album[];
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
}

const Map = ({ albums, setAlbums }: mapType) => {
  // const [latitude, setLatitude] = useState<number>(35.6632143);
  // const [longTitude, setLongTitude] = useState<number>(128.4140176);
  const { searchMapListState, setCenterSearching } = useSearch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const mapAlbumList: Array<Album[]> = [];
  // const [mapAlbumList, setMapAlbumList] = useState<Array<Album[]>>([]);

  interface AnyObject {
    [key: string]: any;
  }

  const mapAlbumList: Array<Album[]> = [];

  // {
  //   address: 주소,
  //   albums: {
  //     Album[]
  //   }
  // }

  interface AddressItem {
    [key: string]: any[];
  }

  const a = () => {
    const addressList: AddressItem = {};
    albums.forEach(album => {
      if (!addressList[album.building.address]) {
        addressList[album.building.address] = [];
      }
      addressList[album.building.address].push(album);
    });

    // albums.forEach(album=>{
    //   addressList.forEach(address=>{})
    // })

    // addressList.forEach(addressObj => {
    //   albums.forEach(album => {
    //     if (addressObj.address === album.building.address) {
    //       addressObj.albums.push(album);
    //     }
    //   });
    // });

    for (const key in addressList) {
      console.log(key);
      console.log(addressList[key]);
    }

    // console.log(mapAlbumList);
  };
  // useEffect(() => {
  //   // eslint-disable-next-line array-callback-return
  //   a();
  // }, [setMapAlbumList]);

  return (
    <CustomMap
      center={searchMapListState.centerSearching}
      style={{
        // 지도의 크기
        flex: 3,
        height: "100%",
      }}
      level={3}
      onDragEnd={e =>
        setCenterSearching({
          lat: e.getCenter().getLat(),
          lng: e.getCenter().getLng(),
        })
      }
      onClick={a}
    >
      {/* <MarkerClusterer
        averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel={1} // 클러스터 할 최소 지도 레벨
        disableClickZoom={true} // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
        onClusterclick={(target, cluster) => {
          const markers: Album[] = [];
          cluster.getMarkers().map(marker => {
            console.log(marker.getTitle());
            return albums.map(album => {
              if (album.building.address === marker.getTitle()) {
                markers.push(album);
              }
              return 0;
            });
          });
          setAlbums(markers);
        }}
        onClustered={(target, clusters) => {
          const markers: Album[] = [];
          clusters.map(cluster =>
            cluster.getMarkers().map(marker => {
              console.log(marker.getTitle());
              return albums.map(album => {
                if (album.building.address === marker.getTitle()) {
                  markers.push(album);
                }
                return 0;
              });
            })
          );
          console.log(markers, "abc");
          // setAlbums(markers)
        }}
        styles={[{ width: "50px", height: "50px" }]}
      > */}
      {mapAlbumList.map((albums, index) => {
        console.log(albums);
        const album = albums[1];
        return (
          <CustomOverlayMap
            key={index}
            position={{
              lat: album.building.latitude,
              lng: album.building.longitude,
            }}
            id={album.building.address}
          >
            <img width="50" height="50" src={`http://${album.photo}`} alt="" />
          </CustomOverlayMap>
        );
      })}
      {searchMapListState.searchMapList &&
        searchMapListState.searchMapList.map(current => (
          <MapMarker
            position={{ lat: current.y, lng: current.x }}
            infoWindowOptions={{ className: "map_marker" }}
          >
            {current.address_name + "/" + current.place_name}
          </MapMarker>
        ))}
      {/* </MarkerClusterer> */}
    </CustomMap>
  );
};

export default Map;
