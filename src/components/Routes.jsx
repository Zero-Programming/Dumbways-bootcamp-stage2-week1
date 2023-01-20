import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { useState } from "react";

export default function RoutesPage() {
  const [userSignIn, setUserSignIn] = useState({
    isLogin: false,
    userName: "",
    password: "",
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home userSignIn={userSignIn} setUserSignIn={setUserSignIn} />} />
      </Routes>
    </BrowserRouter>
  );
}
