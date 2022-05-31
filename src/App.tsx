import React from "react";
import "./App.scss";

export default function App() {
  const t1 = process.env.REACT_APP_TEST;
  const t2 = process.env.TEST;
  return (
    <div className="teste">
      <h1>My React Boilerplate</h1>
      <h2>{`${t1}-${t2}`}</h2>
    </div>
  );
}
