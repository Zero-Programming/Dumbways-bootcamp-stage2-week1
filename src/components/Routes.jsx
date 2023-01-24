import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { useState } from "react";
import DetailProperty from "../pages/DetailProperty";
import Profile from "../pages/Profile.jsx";
import MyBooking from "../pages/MyBoking";
import Invoice from "../pages/Invoice";
import listData from "../components/Data";
import HomeOwner from "../pages/HomeOwner";
import AddProperty from "../pages/AddProperty";
import PrivateRoute from "./PrivateRoute";

export default function RoutesPage() {
  const [userSignIn, setUserSignIn] = useState({
    isLogin: false,
    userName: "",
    password: "",
    listAs: "",
  });

  const DataUser = (JSON.parse(localStorage.getItem("UserSignUp")))

  console.log(DataUser.listAs)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home userSignIn={userSignIn} setUserSignIn={setUserSignIn} />} />
        <Route path="/detail-property/:id" element={<DetailProperty book userSignIn={userSignIn} setUserSignIn={setUserSignIn} listData={listData} />} />
        <Route path="/profile" element={<Profile userSignIn={userSignIn} setUserSignIn={setUserSignIn} />} />
        <Route path="/my-booking/:id" element={<MyBooking userSignIn={userSignIn} setUserSignIn={setUserSignIn} />} />
        <Route path="/history/" element={<Invoice userSignIn={userSignIn} setUserSignIn={setUserSignIn} />} />
        <Route path="/home-owner" element={<HomeOwner userSignIn={userSignIn} setUserSignIn={setUserSignIn} listData={listData} />} />
        <Route element={<PrivateRoute />}>
          <Route path="/add-property" element={<AddProperty userSignIn={userSignIn} setUserSignIn={setUserSignIn} listData={listData} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
