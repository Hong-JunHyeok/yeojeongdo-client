import { LoadingPageLayout } from "./PageStyle";
import Logo from "assets/images/logo.svg";

const LoadingPage = () => {
  return (
    <LoadingPageLayout>
      <img src={Logo} alt="" />
      <h1>로딩 중...</h1>
    </LoadingPageLayout>
  );
};

export default LoadingPage;
