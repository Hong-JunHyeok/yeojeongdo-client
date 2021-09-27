import AdsForm from "components/Auth/AdsForm/AdsForm";
import JoinForm from "components/Auth/JoinForm/JoinForm";
import { JoinPageLayout } from "./PageStyle";

const JoinPage = () => {
  return (
    <JoinPageLayout>
      <AdsForm />
      <JoinForm />
    </JoinPageLayout>
  );
};

export default JoinPage;
