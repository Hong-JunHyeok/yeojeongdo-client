import Search from "components/Common/Header/Search/Search";
import useAuth from "hooks/redux/useAuth";
import { useHistory } from "react-router";
import { HeaderContainer, HeaderContent } from "./headerStyles";
import { useCallback } from "react";

const Header = () => {
  const history = useHistory();
  const { authState, logout } = useAuth();

  const pushMainPage = useCallback(() => {
    history.push("/");
  }, [history]);

  const handleOnUserProfile = useCallback(
    (userId: number) => {
      history.push(`/user/${userId}`);
    },
    [history]
  );

  const handleLogout = useCallback(() => {
    logout();
    window.location.replace("/login");
  }, [logout]);

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <h1 className="header-title" onClick={pushMainPage}>
            여정도
          </h1>
          {/* <div className="header-search">
          <Search />
        </div> */}
          <ul className="header-options">
            {authState.myInfo && (
              <>
                <li onClick={() => handleOnUserProfile(authState.myInfo!.id)}>
                  {authState.myInfo!.name}님 환영합니다
                </li>
                <li className="logout" onClick={handleLogout}>
                  로그아웃
                </li>
              </>
            )}
          </ul>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};

export default Header;
