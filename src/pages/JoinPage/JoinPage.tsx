import AdsForm from "components/Auth/AdsForm/AdsForm";
import JoinForm from "components/Auth/JoinForm/JoinForm";
import useAuth from "hooks/redux/useAuth";
import LoadingPage from "pages/LoadingPage/LoadingPage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { JoinPageLayout } from "./PageStyle";

const JoinPage = () => {
  const history = useHistory();

  const {
    authState: { joinDone, joinLoading },
  } = useAuth();

  useEffect(() => {
    if (joinDone) {
      history.push("/login");
    }
  }, [joinDone, history, joinLoading]);

  if (joinLoading) return <LoadingPage />;

  return (
    <JoinPageLayout>
      <AdsForm />
      <JoinForm />
    </JoinPageLayout>
  );
};

export default JoinPage;
