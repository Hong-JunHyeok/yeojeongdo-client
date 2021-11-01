import Search from "../Search/Search";
import { MenuHeaderContainer, MenuHeaderContant } from "./MenuHeaderStyles";

const MenuHeader = () => {
  return (
    <MenuHeaderContainer>
      <MenuHeaderContant>
        <Search />
      </MenuHeaderContant>
    </MenuHeaderContainer>
  );
};

export default MenuHeader;
