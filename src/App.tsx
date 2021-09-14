import Counter from "components/Counter";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      여정도
      <Counter />
      <Link to="/other">다른페이지</Link>
    </div>
  );
}

export default App;
