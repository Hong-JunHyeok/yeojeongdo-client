import User from "components/User";
import { observer } from "mobx-react";

const Other = () => {
  return (
    <div>
      <User />
    </div>
  );
};
export default observer(Other);
