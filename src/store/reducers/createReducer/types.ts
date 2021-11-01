import { searchMapListType } from "../searchReducer/types";

export interface LatLng {
  lat: number;
  lng: number;
}

export interface CreateState {
  LatLng: LatLng;
  selectedMarker?:
    | searchMapListType
    | { address_name: string; x: number; y: number };

  createAlbumLoading: boolean;
  createAlbumError: null;
  createAlbumDone: boolean;
}
