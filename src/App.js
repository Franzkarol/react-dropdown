import React, { useState } from "react";
import "./style.css";
import Pannel from "./components/Pannel";
import Acordion from "./components/Acordion";

function App() {
  const [visible, setVisible] = useState(false);
  const [item, setCurrentItem] = useState({ info: "default" });
  const action = param => {
    console.log("<====param======>", param);
    setCurrentItem(param);
    setVisible(!visible);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Acordion data={item} visible={visible} />
      <Pannel action={e => action(e)} />
    </div>
  );
}

export default App;
