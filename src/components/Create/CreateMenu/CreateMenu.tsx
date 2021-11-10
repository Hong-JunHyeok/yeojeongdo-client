import Form from "components/Common/Form/Form";
import useCreate from "hooks/redux/useCreate";
import useInput from "hooks/useInput";
import { createRef, useCallback, useEffect, useMemo } from "react";
import { useState } from "react";
import {
  CreateMenuContainer,
  CreateMenuImageView,
  CreateMenuMainView,
} from "./createMenuStyles";

import Slider from "react-slick";
import { toast } from "react-toastify";
import autosize from "autosize";
import MenuHeader from "components/Common/Header/MenuHeader/MenuHeader";
import useAlbum from "hooks/redux/useAlbum";
import { useHistory } from "react-router";

const CreateMenu = () => {
  const { markerState, createAlbum } = useCreate();
  const selectedMarker = markerState.selectedMarker;
  const [memo, onChangeMemo] = useInput("");
  const [file, setFile] = useState<any[]>();
  const [preview, setPreview] = useState<string[]>([]);
  const memoRef = createRef<HTMLTextAreaElement>();
  const { resetAlbum } = useAlbum();
  const [createAlbumDone, setCreateAlbumDone] = useState<boolean>(false);

  const submit = useCallback(() => {
    if (
      !memo.trim() ||
      !file ||
      !selectedMarker?.x ||
      !selectedMarker?.y ||
      !selectedMarker?.address_name
    ) {
      console.log(
        selectedMarker,
        !memo.trim(),
        !file,

        !selectedMarker?.x || !selectedMarker?.y
      );
      toast.error("누락된 값이 있습니다.");
      return;
    }
    const form = new FormData();
    selectedMarker && form.append("address", selectedMarker.address_name);
    selectedMarker && form.append("latitude", selectedMarker.y.toString());
    selectedMarker && form.append("longitude", selectedMarker.x.toString());
    form.append("memo", memo);

    file.forEach((file: any) => {
      form.append("files", file);
    });

    createAlbum(form);
    setCreateAlbumDone(true);
  }, [file, memo, createAlbum, selectedMarker]);

  const handleFileInput = useCallback(e => {
    const imageFileExtensions = [
      "image/apng",
      "image/bmp",
      "image/gif",
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/svg+xml",
      "image/tiff",
      "image/webp",
      "image/x-icon",
    ];
    const filesInArr: any[] = Array.from(e.target.files);
    let isValidImageType: boolean = true;

    filesInArr.forEach(imageFile => {
      isValidImageType = imageFileExtensions.includes(imageFile.type);
    });
    if (!isValidImageType) {
      toast.error("지원하지 않는 확장자입니다.");
      return;
    }

    if (filesInArr.length !== 0) {
      setFile(filesInArr);

      setPreview([
        ...filesInArr.map(file => {
          return URL.createObjectURL(file);
        }),
      ]);
    }
  }, []);

  const settings = useMemo(
    () => ({
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
    }),
    []
  );

  useEffect(() => {
    if (memoRef.current) {
      autosize(memoRef.current);
    }
  }, [memoRef]);

  useEffect(() => {
    if (markerState.createAlbumDone && !markerState.createAlbumLoading) {
      window.location.href = "/";
    }
  }, [markerState]);

  return (
    <CreateMenuContainer>
      <MenuHeader />
      <Form
        className="create-contant"
        hasSubmit
        submitText="작성하기"
        onSubmit={submit}
      >
        <CreateMenuMainView>
          <CreateMenuImageView>
            <label htmlFor="albumFile" className="file-input-label">
              <div className="image-preview-container">
                {!file ? (
                  <strong className="upload-require">
                    이미지를 업로드해주세요.
                  </strong>
                ) : (
                  <div className="slider">
                    <Slider {...settings}>
                      {preview[0] &&
                        preview.map(view => <img src={view} alt="" />)}
                    </Slider>
                    <div className="image-length">{"+" + preview.length}</div>
                  </div>
                )}
              </div>
            </label>
            <input
              type="file"
              multiple
              id="albumFile"
              className="file-input"
              onChange={handleFileInput}
            />
          </CreateMenuImageView>
          <p>{selectedMarker?.address_name}</p>
        </CreateMenuMainView>

        <textarea
          ref={memoRef}
          className="memo-input"
          value={memo}
          onChange={onChangeMemo}
          placeholder="사진과 함께 남길 말을 작성해주세요. . ."
        />
      </Form>
    </CreateMenuContainer>
  );
};

export default CreateMenu;
