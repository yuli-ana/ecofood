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

const NavBar = ({ signed }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <NavLink to="/" text="home" />
        {!signed ? (
          <NavLink to="/signin" text="sign in" />
        ) : (
          <NavLink to="/" text="log out" />
        )}
        {!signed && <NavLink to="/signup" text="sign up" />}
      </Toolbar>
    </AppBar>
  );
};

const NavLink = ({ to, text }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="outlined"
      component={RouterLink}
      to={to}
    >
      {text}
    </Button>
  );
};

export default NavBar;
