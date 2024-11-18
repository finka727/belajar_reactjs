import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import User from "./User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
