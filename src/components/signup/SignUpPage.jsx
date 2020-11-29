import NavBar from "../shared/Navbar";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ArrowForward from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(10),
  },
  center: {
    minHeight: "100vh",
  },
}));

const SignUpPage = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Grid
        container
        justify="center"
        alignContent="center"
        className={classes.center}
      >
        <Grid item className={classes.margin}>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/accounts/signup/user"
            endIcon={<ArrowForward />}
          >
            User
          </Button>
        </Grid>
        <Grid item className={classes.margin}>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/accounts/signup/restaurant"
            endIcon={<ArrowForward />}
          >
            Restaurant
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUpPage;
