import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { useState } from "react";
import DetailProperty from "../pages/DetailProperty";
import Profile from "../pages/Profile.jsx";
import MyBooking from "../pages/MyBoking";

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
        {/* <Route path="/detail-property" element={<DetailProperty book userSignIn={userSignIn} setUserSignIn={setUserSignIn} />} />
        <Route path="/profile" element={<Profile userSignIn={userSignIn} setUserSignIn={setUserSignIn} />} /> */}
        {/* <Route path="/my-booking" element={<MyBooking userSignIn={userSignIn} setUserSignIn={setUserSignIn} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
