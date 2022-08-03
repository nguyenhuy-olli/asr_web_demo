import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./Layouts/Header"
import AudioPlayer from "./Components/AudioPlayer";
import Result from "./Components/Result";

import "./index.css";

function App() {
  const [res, setRes] = useState(null);

  const pushRes = res => {
    setRes(res);
  }

  return (
    <>
      <Header />
      <AudioPlayer pushRes={pushRes} />
      <Result res={res} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);
