import { CreatePageStyle, CreatePageContent } from "./PageStyle";
import Header from "components/Common/Header/Header";
import CreaterMap from "components/Create/CreaterMap/CreaterMap";
import CreateMenu from "components/Create/CreateMenu/CreateMenu";

const CreatePage = () => {
  return (
    <>
      <CreatePageStyle>
        <Header />
        <CreatePageContent>
          <CreaterMap />
          <CreateMenu />
        </CreatePageContent>
      </CreatePageStyle>
    </>
  );
};

export default CreatePage;
