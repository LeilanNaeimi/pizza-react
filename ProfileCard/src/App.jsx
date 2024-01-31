import { useState } from "react";
import "./App.css";
import Avatar from "./Avatar";
import Info from "./Info";
import SkillList from "./SkillList";

function App() {
  return (
    <div className="cart">
      <Avatar />
      <div className="data">
        <Info />
        <SkillList />
      </div>
    </div>
  );
}

export default App;
