import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Login } from "../pages/LoginRegister";
import { Register } from "../pages/LoginRegister";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import UpdateBlog from "../pages/UpdateBlog";
import Detail from "../pages/Detail";
import NewBlog from "../pages/NewBlog";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route element={<PrivateRouter />}>
          <Route path="profile" element={<Profile />} />
          <Route path="new-blog" element={<NewBlog />} />
          <Route path="update-blog/:id" element={<UpdateBlog />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
