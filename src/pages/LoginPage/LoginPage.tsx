import AdsForm from "components/Auth/AdsForm/AdsForm";
import LoginForm from "components/Auth/LoginForm/LoginForm";
import useAuth from "hooks/redux/useAuth";
import LoadingPage from "pages/LoadingPage/LoadingPage";
import { useHistory } from "react-router";
import { LoginPageLayout } from "./PageStyle";

const LoginPage = () => {
  const { authState } = useAuth();
  const { replace } = useHistory();

  console.log(authState);

  if (authState.loadMyInfoLoading && !authState.loadMyInfoDone) {
    return <LoadingPage />;
  }

  if (authState.loadMyInfoDone) {
    replace("/");
  }

  return (
    <LoginPageLayout>
      <LoginForm />
      <AdsForm />
    </LoginPageLayout>
  );
};
export default LoginPage;
