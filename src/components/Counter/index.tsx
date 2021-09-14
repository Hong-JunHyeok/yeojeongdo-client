import { useObserver } from "mobx-react";
import useStore from "hooks/useStore";

const Counter = () => {
  const { counter } = useStore();

  const increase = () => {
    counter.increase();
  };

  const decrease = () => {
    counter.decrease();
  };

  return useObserver(() => (
    <div>
      <h1>{counter.number}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  ));
};

export default Counter;
