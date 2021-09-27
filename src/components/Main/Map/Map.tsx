import { useEffect, useState } from "react";
import { StyledMap } from "./mapStyles";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const Map = () => {
  const [latitude, setLatitude] = useState<number>(35.6632143);
  const [longTitude, setLongTitude] = useState<number>(128.4140176);
  const [markers, setMarkers] = useState<any>([]);
  const ms: any = [];
  const ps: any = [];
  var clickLine: any;

  useEffect(() => {
    if ("geolocation" in navigator) {
      /* 위치정보 사용 가능 */
      navigator.geolocation.getCurrentPosition(position => {
        setLatitude(position.coords.latitude);
        setLongTitude(position.coords.longitude);
      });
    } else {
      /* 위치정보 사용 불가능 */
      alert(
        "죄송합니다. 저희 서비스를 이용하실 수 없습니다. (브라우저 버전을 업그레이드 해보세요)"
      );
    }
  }, []);

  const addMarker = async (map: any, position: any) => {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: position,
    });
    marker.setMap(map);

    setMarkers([...markers, marker]);
    ms.push(marker);
    kakao.maps.event.addListener(marker, "click", function () {
      console.log(markers);
    });
    ps.push(position);
    console.log(markers, ms);
    clickLine = new kakao.maps.Polyline({
      map: map, // 선을 표시할 지도입니다
      path: ps, // 선을 구성하는 좌표 배열입니다 클릭한 위치를 넣어줍니다
      strokeWeight: 10, // 선의 두께입니다
      strokeColor: "dimgray", // 선의 색깔입니다
      strokeOpacity: 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
      strokeStyle: "solid", // 선의 스타일입니다
    });
  };

  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(latitude, longTitude),
      level: 3,
    };

    let map = new kakao.maps.Map(container, options);
    const clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 1, // 클러스터 할 최소 지도 레벨
      calculator: [5, 10],
      styles: [
        {
          // calculator 각 사이 값 마다 적용될 스타일을 지정한다
          width: "100px",
          height: "100px",
          background: "rgba(51, 204, 255, .8)",
          borderRadius: "0px",
          backgroundImage:
            "url(data:image/jpeg;base64,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)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffff",
          textAlign: "center",
          fontWeight: "bold",
          lineHeight: "31px",
          fontSize: "32px",
        },
        {
          // calculator 각 사이 값 마다 적용될 스타일을 지정한다
          width: "100px",
          height: "100px",
          background: "#7a5b18cc",
          borderRadius: "0px",
          backgroundImage:
            "url(http://img.danawa.com/prod_img/500000/359/393/img/12393359_1.jpg?shrink=360:360&_v=20201006102055)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#000",
          textAlign: "center",
          fontWeight: "bold",
          lineHeight: "31px",
          fontSize: "32px",
        },
      ],
    });

    console.log(map);
    kakao.maps.event.addListener(map, "click", function (mouseEvent: any) {
      var latlng = mouseEvent.latLng;

      addMarker(map, latlng).then(() => clusterer.addMarkers(ms));
      console.log(markers);
    });
  }, [latitude, longTitude]);

  return (
    <>
      <StyledMap id="map"></StyledMap>
    </>
  );
};

export default Map;
