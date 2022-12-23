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

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Dashboard} />

        <Route path="/profile" component={Profile} />
        <Route path="/new-blog" component={NewBlog} />
        <Route path="/update-blog/:id" component={UpdateBlog} />
        <Route path="/detail" component={Detail} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
