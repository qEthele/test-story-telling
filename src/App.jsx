import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Scene1 from "./pages/Scene1";
import Scene2 from "./pages/Scene2";
import Scene3 from "./pages/Scene3";
import Scene4 from "./pages/Scene4";
import Scene5 from "./pages/Scene5";

function App() {
  const [count, setCount] = useState(0);
  const getScene1 = document.getElementById("scene1");
  const getScene2 = document.getElementById("scene2");
  const getScene3 = document.getElementById("scene3");
  const getScene4 = document.getElementById("scene4");

  useEffect(() => {
    switch (count) {
      case 1:
        setTimeout(() => getScene1.remove(), 500);
        break;
      case 2:
        setTimeout(() => getScene2.remove(), 500);
        break;
      case 3:
        setTimeout(() => getScene3.remove(), 500);
        break;
      case 4:
        setTimeout(() => getScene4.remove(), 500);
        break;

      default:
        break;
    }
  }, [count]);

  return (
    <div className="App">
      <div
        onClick={() => {
          setCount(count + 1);
        }}
        className={count === 0 ? "fadeIn" : "fadeOut"}
        id="scene1"
      >
        <Scene1 />
      </div>
      <div
        onClick={() => {
          setCount(count + 1);
        }}
        className={count === 1 ? "fadeIn" : "fadeOut"}
        id="scene2"
        style={{
          display: "flex",
          position: "absolute",
          zIndex: count === 1 ? "1" : "-2",
        }}
      >
        <Scene2 />
      </div>
      <div
        onClick={() => {
          setCount(count + 1);
        }}
        className={count === 2 ? "fadeIn" : "fadeOut"}
        id="scene3"
        style={{
          display: "flex",
          position: "absolute",
          zIndex: count === 2 ? "1" : "-3",
        }}
      >
        <Scene3 />
      </div>
      <div
        onClick={() => {
          setCount(count + 1);
        }}
        className={count === 3 ? "fadeIn" : "fadeOut"}
        id="scene4"
        style={{
          display: "flex",
          position: "absolute",
          zIndex: count === 3 ? "1" : "-4",
        }}
      >
        <Scene4 />
      </div>
      <div
        className={count === 4 ? "fadeIn" : "fadeOut"}
        id="scene4"
        style={{
          display: "flex",
          position: "absolute",
          zIndex: count === 4 ? "1" : "-5",
        }}
      >
        <Scene5 />
      </div>
    </div>
  );
}

export default App;
