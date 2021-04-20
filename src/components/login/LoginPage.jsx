import Login from "./Login";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  image: {
    height: "100vh",
    width: "100%",
    objectFit: "cover",
    display: "block",
  },
  lockIcon: {
    background: "deeppink",
    margin: "0 auto",
  },
  exitButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
  },
  btnColor: {
    color: "#000",
  },
  btnBack: {
    textAlign: "center",
    fontSize: "12px",
  },
});

const LoginPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
            alt=""
          />
        </Grid>
        <Grid container item xs={6} justify="center" alignContent="center">
          <Login />
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
