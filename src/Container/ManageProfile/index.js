import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Logo from "../../Components/Logo";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../../Redux/slices/profileSlice";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    background: "#111",
    color: "#fff",
    height: "100vh",
  },
  mainConatiner: {
    paddingTop: "22vh",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "200px",
    height: "200px",
    cursor: "pointer",
  },
  manageButton: {
    border: "3px solid rgb(140,140,140)",
    color: "rgb(140,140,140)",
    fontSize: "28px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10vh",
    cursor: "pointer",
  },
}));

const ManageProfile = () => {
  const classes = useStyles();
  const { allProfile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = (img, profile) => {
    dispatch(setUserProfile({ image: img, profile: profile }));
    history.push("/movie");
  };
  return (
    <div className={classes.root}>
      <Logo />
      <Grid
        container
        className={classes.mainConatiner}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid className={classes.row} container item lg={5}>
          <Typography align="center" variant="h3" gutterBottom>
            Who's Watching ?
          </Typography>
        </Grid>
        <Grid container item lg={8} sm={8} className={classes.row}>
          {allProfile.map((data, index) => (
            <Grid
              item
              lg={3}
              className={classes.row}
              sm={12}
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => handleClick(data.image, data.profile)}
            >
              <img className={classes.img} src={data.image} alt="" />
              <Typography align="center" variant="h6" gutterBottom>
                {data.profile}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.row} item lg={8}>
          <Grid container item className={classes.manageButton} lg={3}>
            <Typography
              align="center"
              onClick={() => history.push("/editpro1")}
              variant="h6"
              gutterBottom
            >
              Manage profile
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageProfile;
// https://i.ibb.co/ZGwhrNH/iu-2.jpg
// https://i.ibb.co/JpdSW1q/iu-4.jpg
// https://i.ibb.co/vvK8FX6/iu-3.jpg
// https://i.ibb.co/WKrPzZd/iu.jpg
