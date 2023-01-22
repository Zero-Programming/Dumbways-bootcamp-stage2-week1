import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { useState } from "react";
import DetailProperty from "../pages/DetailProperty";
import Profile from "../pages/Profile.jsx";
import MyBooking from "../pages/MyBoking";
import Invoice from "../pages/Invoice";
import listData from "../components/Data";

export default function RoutesPage() {
  const [userSignIn, setUserSignIn] = useState({
    isLogin: false,
    userName: "",
    password: "",
    listAs: "",
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home userSignIn={userSignIn} setUserSignIn={setUserSignIn} />} />
        <Route path="/detail-property/:id" element={<DetailProperty book userSignIn={userSignIn} setUserSignIn={setUserSignIn} listData={listData} />} />
        <Route path="/profile" element={<Profile userSignIn={userSignIn} setUserSignIn={setUserSignIn} />} />
        <Route path="/my-booking/:id" element={<MyBooking userSignIn={userSignIn} setUserSignIn={setUserSignIn} />} />
        <Route path="/history/" element={<Invoice userSignIn={userSignIn} setUserSignIn={setUserSignIn} />} />
      </Routes>
    </BrowserRouter>
  );
}
