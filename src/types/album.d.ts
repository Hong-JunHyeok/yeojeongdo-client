interface IBuilding {
  id: number;
  address: string;
  latitude: number;
  longitude: number;
}

interface Album {
  id: number;
  photo: string;
  user: User;
  createDate: Date;
  building: IBuilding;
}

interface Comment {
  content: "string";
  id: number;
  user: User;
}

export interface ViewAlbum {
  id: number;
  memo: string;
  createDate: string;
  photo: string[];
  commentNum: number;
  likeNum: number;
  user: User;
  building: IBuilding;
}
