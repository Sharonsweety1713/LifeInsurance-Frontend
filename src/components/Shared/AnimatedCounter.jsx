import React from "react";
import Counter from "./Counter";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="photo-profile">{/* <img  /> */}</div>
      <div className="numbers">
        <Counter number={20} title="Policies Processed"/>
        
        <Counter number={5678} title="Satisfied Clients" />
        <Counter number={468} title="Claims Processed" />
      </div>
    </div>
  );
}
