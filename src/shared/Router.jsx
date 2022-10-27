import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "../pages/Create";
import Home from "../pages/Home";
import HomeDetail from "../pages/HomeDetail";
import LogIn from "../pages/LogIn";
import Mypage from "../pages/Mypage";
import MypageDetail from "../pages/MypageDetail";
import SignUp from "../pages/SignUp";




const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create/add" element={<Create />} />
                <Route path="/home_detail/:id" element={<HomeDetail />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/sign_up" element={<SignUp />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/my_detail/:id" element={<MypageDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
