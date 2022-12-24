import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import UpdateBlog from "../pages/UpdateBlog";
import Detail from "../pages/Detail";
import NewBlog from "../pages/NewBlog";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Dashboard} />

        <PrivateRouter path="/profile" component={Profile} />
        <PrivateRouter path="/new-blog" component={NewBlog} />
        <PrivateRouter path="/update-blog/:id" component={UpdateBlog} />
        <PrivateRouter path="/detail" component={Detail} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
