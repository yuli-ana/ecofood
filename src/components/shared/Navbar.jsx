import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
  },
  button: {
    color: "white",
  },
});

const NavBar = ({ minimalNavbar }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Button
          className={classes.button}
          variant="outlined"
          component={RouterLink}
          to="/"
        >
          Home
        </Button>
        <Button
          className={classes.button}
          variant="outlined"
          component={RouterLink}
          to="/signin"
        >
          Sign In
        </Button>
        <Button
          className={classes.button}
          variant="outlined"
          component={RouterLink}
          to="/signup"
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
