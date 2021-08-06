import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Logo from "../../Components/Logo";
import EditIcon from "../../Components/Editoption";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    background: "#111",
    color: "#fff",
    height: "100vh",
  },
  mainConatiner: {
    paddingTop: "20vh",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  manageButton: {
    color: "#333",
    background: "#fff",
    fontSize: "28px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10vh",
    cursor: "pointer",
  },
}));

const EditManageProfile = () => {
  const classes = useStyles();
  const { allProfile } = useSelector((state) => state.profile);
  const history = useHistory();
  const handleClick = (img, data, docid) => {};
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
            Manage Profiles:
          </Typography>
        </Grid>
        <Grid container item lg={9} sm={8} className={classes.row}>
          {allProfile.map((data, index) => (
            <Grid
              item
              lg={3}
              className={classes.row}
              sm={12}
              key={index}
              id="editmainimage"
              onClick={() => handleClick(data.image, data.profile)}
            >
              <EditIcon class={classes.img} src={data.image} />
              <Typography align="center" variant="h6" gutterBottom>
                {data.profile}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.row} item lg={8}>
          <Grid container item className={classes.manageButton} lg={1}>
            <Typography
              align="center"
              variant="h6"
              onClick={() => history.push("/manage")}
              gutterBottom
            >
              Done
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default EditManageProfile;
