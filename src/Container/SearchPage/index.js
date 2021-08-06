import React from "react";
import Header from "../../Components/Header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridCard from "../../Components/GridCard";
import Footer from "../../Components/Footer";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "10vh",
  },
}));
const SearchPage = () => {
  const classes = useStyles();
  const { searchItems } = useSelector((state) => state.search);
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={3}>
          {searchItems?.results?.map((data, index) => (
            <GridCard key={index} movie={data} />
          ))}
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
