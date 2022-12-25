import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { BlogForm } from "../components/BlogForm";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../contexts/BlogContextProvider";
import { toastSuccessNotify } from "../helpers/toastNotify";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import blogPng from "../assets/blok.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    padding: 13,
    height: 200,
    width: 200,
    backgroundColor: "#046582",
  },
  blogImg: {
    width: 200,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 3,
  },
  submit: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
  },
  title: {
    fontSize: 35,
    fontFamily: "Girassol",
    color: "#046582",
  },
}));
const UpdateBlog = ({ match }) => {
  const { currentUser } = useAuth();
  const blog = {
    author: currentUser.email,
    title: "",
    content: "",
    get_comment_count: 0,
    get_like_count: 0,
    image: "",
    published_date: Date.now(),
  };
  const { getOneBlog, updateBlog } = useBlog();
  const navigate = useNavigate();
  const classes = useStyles();
  const result = getOneBlog(match.params.id);

  const res = result ? result[0] : { title: "", content: "", image: "" };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={blogPng} alt="blog" className={classes.blogImg} />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.title}>
          ── Update Blog ──
        </Typography>
        <BlogForm />
      </div>
    </Container>
  );
};

export default UpdateBlog;
