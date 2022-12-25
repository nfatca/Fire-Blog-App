import React from "react";

import { makeStyles } from "@mui/styles";
import { useBlog } from "../contexts/BlogContextProvider";
import { Grid, Typography } from "@material-ui/core";
import BlogCard from "../components/BlogCard";
import loadingGif from "../assets/loading.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  title: {
    fontFamily: "Girassol",
    textAlign: "center",
    color: "#046582",
  },
  mainRoot: {
    marginTop: 70,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const { currentBlogs } = useBlog();

  return (
    <div className={classes.mainRoot}>
      <Typography className={classes.title} variant="h3" noWrap>
        ──── Dashboard ────
      </Typography>
      <>
        <Grid
          container
          className={classes.root}
          spacing={5}
          justifyContent="center"
        >
          {currentBlogs === undefined ? (
            <img src={loadingGif} alt="loading" />
          ) : currentBlogs ? (
            currentBlogs?.map((item, id) => (
              <Grid key={id} item>
                <BlogCard post={item} />
              </Grid>
            ))
          ) : (
            <h3>No data available.</h3>
          )}
        </Grid>
      </>
    </div>
  );
};

export default Dashboard;
