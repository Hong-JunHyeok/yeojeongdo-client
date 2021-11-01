import useAlbum from "hooks/redux/useAlbum";
import { AlbumViewContainer } from "./albumViewStyles";
import { createRef, useCallback, useEffect, useMemo, useState } from "react";
import AlbumComment from "../AlbumComment/AlbumComment";
import Slider from "react-slick";
import { getLikeUsers } from "apis/albumAPI";
import { toast } from "react-toastify";
import useAuth from "hooks/redux/useAuth";

const AlbumView = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { authState } = useAuth();
  const { albumState, closeAlbum, likeAlbum, likeIncrement, likeDecrement } =
    useAlbum();
  const commentInputRef = createRef<HTMLInputElement | null>();

  const settings = useMemo(
    () => ({
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
    }),
    []
  );

  const album = albumState.album;

  const handleAlbumLike = useCallback(
    (albumId: number | undefined) => {
      if (albumId) {
        if (isLiked) {
          likeDecrement();
          setIsLiked(false);
        } else {
          likeIncrement();
          setIsLiked(true);
        }
        likeAlbum(albumId);
      }
    },
    [likeAlbum, likeIncrement, likeDecrement, isLiked]
  );

  const handleFocusComment = useCallback(() => {
    if (commentInputRef.current) {
      commentInputRef.current.focus();
    }
  }, [commentInputRef]);

  useEffect(() => {
    if (album?.id) {
      interface LikeUserInterface {
        id: number;
        profileImg: string;
      }
      getLikeUsers(album?.id)
        .then((response) => {
          const likeList = response.data.data as LikeUserInterface[];
          if (authState.myInfo?.id) {
            likeList.forEach((likeUser) => {
              if (likeUser.id === authState.myInfo?.id) {
                setIsLiked(true);
                return false;
              }
              setIsLiked(false);
            });
          }
        })
        .catch((error) => toast.error(error.response.data));
    }
  }, [album?.id, authState.myInfo?.id]);

  if (albumState.loadAlbumLoading) {
    return null;
  }

  return (
    <>
      <AlbumViewContainer>
        <header className="album_header">
          <div className="album_header_close" onClick={closeAlbum}>
            &times;
          </div>
        </header>
        <main className="album_main">
          <div className="album_main_photos">
            <Slider {...settings}>
              {album?.photo.map((image) => (
                <img src={`http://${image}`} alt="" />
              ))}
            </Slider>
          </div>
          <div className="album_main_content">
            <h3>{album?.memo}</h3>
            <div className="album_main_content_info">
              <span className="comment">댓글 : {album?.commentNum}</span>
              <span className="like">좋아요 :{album?.likeNum}</span>
            </div>
            <div className="album_main_content_tools">
              <button
                className={`like ${isLiked && "liked"}`}
                onClick={() => handleAlbumLike(album?.id)}
              >
                좋아요
              </button>
              <button className="comment" onClick={handleFocusComment}>
                댓글달기
              </button>
            </div>
            <AlbumComment commentInputRef={commentInputRef} />
          </div>
        </main>
      </AlbumViewContainer>
    </>
  );
};

export default AlbumView;
