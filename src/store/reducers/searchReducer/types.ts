import { LatLng } from "../createReducer/types";

export interface SearchState {
  searchMapList: searchMapListType[];
  automaticSearchList: searchMapListType[];
  searchValue: string[];
  centerSearching: LatLng;
  isSearchModal: boolean;
}

export interface searchMapListType {
  /**
   * 장소 ID
   */
  id: string;

  /**
   * 장소명, 업체명
   */
  place_name: string;

  /**
   * 카테고리 이름
   * 예) 음식점 > 치킨
   */
  category_name: string;

  /**
   * 중요 카테고리만 그룹핑한 카테고리 그룹 코드
   * 예) FD6
   */
  category_group_code: CategoryGroupCode;

  /**
   * 중요 카테고리만 그룹핑한 카테고리 그룹명
   * 예) 음식점
   */
  category_group_name: string;

  /**
   * 전화번호
   */
  phone: string;

  /**
   * 전체 지번 주소
   */
  address_name: string;

  /**
   * 전체 도로명 주소
   */
  road_address_name: string;

  /**
   * X 좌표값 혹은 longitude
   */
  x: number;

  /**
   * Y 좌표값 혹은 latitude
   */
  y: number;

  /**
   * 장소 상세페이지 URL
   */
  place_url: string;

  /**
   * 중심좌표까지의 거리(x,y 파라미터를 준 경우에만 존재). 단위 meter
   */
  distance: string;
}

export enum CategoryGroupCode {
  /**
   * 코드 미부여
   */
  BLANK = "",

  /**
   * 대형마트
   */
  MT1 = "MT1",

  /**
   * 편의점
   */
  CS2 = "CS2",

  /**
   * 어린이집, 유치원
   */
  PS3 = "PS3",

  /**
   * 학교
   */
  SC4 = "SC4",

  /**
   * 학원
   */
  AC5 = "AC5",

  /**
   * 주차장
   */
  PK6 = "PK6",

  /**
   * 주유소, 충전소
   */
  OL7 = "OL7",

  /**
   * 지하철역
   */
  SW8 = "SW8",

  /**
   * 은행
   */
  BK9 = "BK9",

  /**
   * 문화시설
   */
  CT1 = "CT1",

  /**
   * 중개업소
   */
  AG2 = "AG2",

  /**
   * 공공기관
   */
  PO3 = "PO3",

  /**
   * 관광명소
   */
  AT4 = "AT4",

  /**
   * 숙박
   */
  AD5 = "AD5",

  /**
   * 음식점
   */
  FD6 = "FD6",

  /**
   * 카페
   */
  CE7 = "CE7",

  /**
   * 병원
   */
  HP8 = "HP8",

  /**
   * 약국
   */
  PM9 = "PM9",
}
