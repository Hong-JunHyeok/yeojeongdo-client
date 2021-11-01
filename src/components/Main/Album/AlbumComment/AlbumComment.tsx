import useAlbum from "hooks/redux/useAlbum";
import autosize from "autosize";
import {
  CommentInputContainer,
  CommentItemContainer,
  CommentListContainer,
} from "./albumCommentStyles";
import DefaultProfile from "assets/images/default_profile.svg";
import { createRef, useCallback, useEffect, useState, VFC } from "react";
import ReactLoading from "react-loading";
import useInput from "hooks/useInput";
import useAuth from "hooks/redux/useAuth";

interface IAlbumCommentProps {
  commentInputRef: any;
}

const AlbumComment: VFC<IAlbumCommentProps> = ({ commentInputRef }) => {
  const { albumState, getComments, createComment, deleteComment, editComment } =
    useAlbum();
  const { authState } = useAuth();

  const editCommentRef = createRef<HTMLTextAreaElement>();

  const [editNumber, setEditNumber] = useState<number>();
  const [commentInput, onChangeCommentInput, setCommentInput] = useInput("");
  const [isToggleMode, setIsToggleMode] = useState<boolean>(false);
  const [editCommentText, onChangeEditCommentText, setEditCommentText] =
    useInput("");
  const toggleEditMode = useCallback((mode: "OPEN" | "CLOSE") => {
    if (mode === "OPEN") {
      setIsToggleMode(true);
    } else if (mode === "CLOSE") {
      setIsToggleMode(false);
    } else {
      throw new Error(`유효하지 않은 전달값입니다.`);
    }
  }, []);

  const handleCreateComment = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (commentInput.trim() && event.keyCode === 13 && !event.shiftKey) {
        interface ICreateCommentData {
          comment: string;
          id: number;
        }
        const data: ICreateCommentData = {
          comment: commentInput,
          id: albumState.album!.id,
        };

        createComment(data);
      }
    },
    [createComment, commentInput, albumState.album]
  );

  const handleDeleteComment = useCallback(
    (commentId: number) => {
      deleteComment(commentId);
    },
    [deleteComment]
  );

  const handleEditComment = useCallback(
    (commentId: number) => {
      const data = { id: commentId, comment: editCommentText };
      editComment(data);
    },
    [editCommentText, editComment]
  );

  useEffect(() => {
    //* 댓글 생성 후 댓글리스트 렌더링
    if (albumState.createCommentDone && albumState.album?.id) {
      getComments(albumState.album.id);
      setCommentInput("");
    }
  }, [
    albumState.createCommentDone,
    setCommentInput,
    getComments,
    albumState.album?.id,
  ]);

  useEffect(() => {
    //* 댓글 삭제 후 댓글리스트 렌더링
    if (albumState.deleteCommentDone && albumState.album?.id) {
      getComments(albumState.album.id);
    }
  }, [albumState.deleteCommentDone, albumState.album?.id, getComments]);

  useEffect(() => {
    //* 댓글 수정 후 수정모드 토글
    if (albumState.editCommentDone && albumState.album?.id) {
      toggleEditMode("CLOSE");
      getComments(albumState.album.id);
    }
  }, [
    toggleEditMode,
    albumState.album?.id,
    albumState.editCommentDone,
    getComments,
  ]);

  useEffect(() => {
    if (commentInputRef.current) {
      autosize(commentInputRef.current);
    }
  }, [commentInputRef]);

  useEffect(() => {
    if (editCommentRef.current) {
      autosize(editCommentRef.current);
    }
  }, [editCommentRef]);

  useEffect(() => {
    if (albumState.album?.id) {
      getComments(albumState.album?.id);
    }
  }, [albumState.album?.id, getComments]);

  return (
    <>
      {albumState.createCommentLoading ||
      albumState.deleteCommentLoading ||
      albumState.editCommentLoading ? (
        <h1>로딩 중...</h1>
      ) : (
        <CommentListContainer>
          {albumState.comments?.map((comment) => (
            <CommentItemContainer key={comment.id}>
              <span className="comment_userName">{comment.user.name}</span>
              {isToggleMode &&
              authState.myInfo?.id === comment.user.id &&
              comment.id === editNumber ? (
                <>
                  <textarea
                    ref={editCommentRef}
                    className="edit_textarea"
                    placeholder="수정할 텍스트를 입력하세요."
                    value={editCommentText}
                    onChange={onChangeEditCommentText}
                  />
                  <div className="edit_buttons">
                    <button
                      className="edit_buttons_edit"
                      onClick={() => handleEditComment(comment.id)}
                    >
                      수정하기
                    </button>
                    <button
                      onClick={() => toggleEditMode("CLOSE")}
                      className="edit_buttons_cancel"
                    >
                      취소
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="comment_content">{comment.content}</p>
                  {authState.myInfo?.id === comment.user.id && (
                    <div className="edit_buttons">
                      <button
                        onClick={() => {
                          toggleEditMode("OPEN");
                          setEditNumber(comment.id);
                          setEditCommentText(comment.content);
                        }}
                        className="edit_buttons_edit"
                      >
                        수정
                      </button>
                      <button onClick={() => handleDeleteComment(comment.id)}>
                        삭제
                      </button>
                    </div>
                  )}
                </>
              )}
            </CommentItemContainer>
          ))}
        </CommentListContainer>
      )}
      <CommentInputContainer>
        <img
          src={albumState.album?.user.image || DefaultProfile}
          alt=""
          className="profile"
        />
        <textarea
          ref={commentInputRef}
          className="comment_input"
          placeholder="댓글을 입력하세요."
          value={commentInput}
          onChange={onChangeCommentInput}
          onKeyDown={handleCreateComment}
        />
      </CommentInputContainer>
    </>
  );
};

export default AlbumComment;
