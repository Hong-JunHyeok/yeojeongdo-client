import useCreate from "hooks/redux/useCreate";
import useSearch from "hooks/redux/useSearch";
import { Map, MapMarker } from "react-kakao-maps-sdk";

interface coord2RegionCodeCallback {
  address_name: string;
  x: number;
  y: number;
}

const CreaterMap = () => {
  const { setMarker, markerState, selectMarker } = useCreate();
  const { searchMapListState, setCenterSearching } = useSearch();

  const searchAddrFromCoords = () => {
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.coord2RegionCode(
      markerState.LatLng.lng,
      markerState.LatLng.lat,
      (result: Array<coord2RegionCodeCallback>) =>
        selectMarker({
          address_name: result[0].address_name,
          x: result[0].x,
          y: result[0].y,
        })
    );
  };
  return (
    <Map
      center={searchMapListState.centerSearching}
      style={{
        // 지도의 크기
        flex: "3 1 0%",
        height: "100%",
      }}
      level={3}
      onClick={(_t, mouseEvent: any) => {
        setMarker({
          lat: mouseEvent.latLng.getLat(),
          lng: mouseEvent.latLng.getLng(),
        });
        searchAddrFromCoords();
      }}
      onDragEnd={(e) => {
        setCenterSearching({
          lat: e.getCenter().getLat(),
          lng: e.getCenter().getLng(),
        });
      }}
    >
      {markerState.LatLng && (
        <MapMarker
          position={markerState.LatLng}
          onDragEnd={(mouseEvent: any) => {
            searchAddrFromCoords();
            setMarker({
              lat: mouseEvent.getPosition().Ma,
              lng: mouseEvent.getPosition().La,
            });
          }}
          draggable={true}
        ></MapMarker>
      )}
      {searchMapListState.searchMapList &&
        searchMapListState.searchMapList.map((current) => (
          <MapMarker
            onClick={() => {
              selectMarker(current);
            }}
            position={{ lat: current.y, lng: current.x }}
          />
        ))}
    </Map>
  );
};

export default CreaterMap;
