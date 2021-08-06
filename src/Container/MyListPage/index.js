import React from "react";
import Header from "../../Components/Header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridCard from "../../Components/GridCard";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "10vh",
  },
}));

const MyList = ({ currentUser, userProfile }) => {
  const movie = [];
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.root}>
        <Grid container className="grid" spacing={3}>
          {movie.map((data, index) => (
            <GridCard key={index} movie={data} />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default MyList;
