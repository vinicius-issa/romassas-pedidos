import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.scss";

export default function App() {
  const t1 = process.env.REACT_APP_TEST;
  const t2 = process.env.TEST;
  return (
    <Routes>
      <Route path="/" element={<div>Root</div>} />
      <Route path="/login" element={<div>Login</div>} />
      <Route path="/*" element={<div>Essa página não existe</div>} />
    </Routes>
  );
}
