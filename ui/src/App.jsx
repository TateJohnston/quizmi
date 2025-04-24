import { useState } from "react";
import HomePage from "../containers/HomePage";
import MainPage from "../containers/mainPage";

function App() {
  const [count, setCount] = useState(0);
  return <MainPage />;
  // return <HomePage />;
}

export default App;
