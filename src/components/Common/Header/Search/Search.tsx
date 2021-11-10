import Form from "components/Common/Form/Form";
import Input from "components/Common/Input/Input";
import useCreate from "hooks/redux/useCreate";
import useSearch from "hooks/redux/useSearch";
import useInput from "hooks/useInput";
import { useCallback, useEffect } from "react";
import { SearchContainer, SearchList, SearchListItem } from "./searchStyles";

const Search = () => {
  const {
    searchMap,
    searchMapListState,
    setCenterSearching,
    setSearchModal,
    searchAutomatic,
  } = useSearch();
  const valueList = searchMapListState.searchValue;
  const isModal = searchMapListState.isSearchModal;
  const [value, onChangeValue, setValue] = useInput(valueList[0]);
  const { selectMarker } = useCreate();

  useEffect(
    (searchedValue?: string) => {
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(
        searchedValue ? searchedValue : value,
        (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            searchAutomatic(data);
          }
        }
      );
      // !searchMapListState.isSearchModal && setSearchModal(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value]
  );

  const submit = useCallback(
    (searchedValue?: string) => {
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(
        searchedValue ? searchedValue : value,
        (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            searchMap(data, searchedValue ? searchedValue : value);
          }
        }
      );
      setSearchModal(true);
      setCenterSearching({
        lat: searchMapListState.automaticSearchList[0].y,
        lng: searchMapListState.automaticSearchList[0].x,
      });
      selectMarker({
        lat: searchMapListState.automaticSearchList[0].y,
        lng: searchMapListState.automaticSearchList[0].x,
        address_name: searchMapListState.automaticSearchList[0].address_name,
      });
    },
    [
      searchMapListState.automaticSearchList,
      value,
      searchMap,
      setSearchModal,
      setCenterSearching,
      selectMarker,
    ]
  );
  //검색창을 클릭하지 않았을 시 검색 모달을 닫는 로직
  const closeModal = useCallback(
    (e: any) => {
      const clicked = e.target.closest(".input");
      clicked == null && setSearchModal(false);
    },
    [setSearchModal]
  );
  // useEffect를 이용해 이벤트 중첩을 방지
  useEffect(() => {
    window.addEventListener("click", closeModal);
    return () => {
      window.addEventListener("click", closeModal);
    };
  }, [closeModal]);

  return (
    <SearchContainer>
      <Form
        className={isModal ? "open-search input" : "input"}
        hasSubmit
        submitText="검색"
        onSubmit={submit}
      >
        <Input
          value={value}
          onChange={onChangeValue}
          onClick={() => setSearchModal(true)}
          placeholder="검색할 내용을 입력해 주세요"
        />
      </Form>
      {isModal && (
        <SearchList>
          {value !== ""
            ? searchMapListState.automaticSearchList.map(current => (
                <SearchListItem
                  onClick={() => {
                    setCenterSearching({ lat: current.y, lng: current.x });
                    submit(value);
                    setSearchModal(false);
                  }}
                >
                  <div>
                    <p className="title">{current.place_name}</p>
                    <p className="subtitle">{current.address_name}</p>
                  </div>
                </SearchListItem>
              ))
            : valueList.map(current => (
                <SearchListItem
                  onClick={() => {
                    submit(current);
                    setValue(current);
                  }}
                >
                  <div>
                    <p>{current}</p>
                  </div>
                </SearchListItem>
              ))}
        </SearchList>
      )}
    </SearchContainer>
  );
};

export default Search;
