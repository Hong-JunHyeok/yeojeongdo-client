import { counter } from "stores/counterStore";
import { user } from "stores/userStore";

const useStore = () => {
  return { counter, user };
};

export default useStore;
