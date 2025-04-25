import { useState } from "react";
import HomePage from "../containers/HomePage";
import MainPage from "../containers/MainPage";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <MainPage />
      {/* <HomePage />; */}
    </div>
  );
}

export default App;
