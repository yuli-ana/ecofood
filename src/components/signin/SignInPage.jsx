import NavBar from "../shared/Navbar";
import SignInForm from "./SignInForm";
import { Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles({
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
});

const SignInPage = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={6}>
        <img
          className={classes.image}
          src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
          alt=""
        />
      </Grid>
      <Grid
        item
        xs={6}
        container
        spacing={6}
        justify="center"
        alignContent="center"
      >
        <Grid item xs={10}>
          <Avatar className={classes.lockIcon}>
            <LockIcon />
          </Avatar>
          <SignInForm />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignInPage;
