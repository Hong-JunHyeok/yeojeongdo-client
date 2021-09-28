import useAuth from "hooks/redux/useAuth";
import { useCallback, useEffect } from "react";
import { HeaderContainer } from "./headerStyles";

const Header = () => {
  const { authState, logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
    window.location.replace("/login");
  }, [logout]);

  return (
    <>
      <HeaderContainer>
        <h1 className="header-title">여정도</h1>
        <ul className="header-options">
          <li>{authState.myInfo?.name}님 환영합니다</li>
          <li className="logout" onClick={handleLogout}>
            로그아웃
          </li>
        </ul>
      </HeaderContainer>
    </>
  );
};

export default Header;
