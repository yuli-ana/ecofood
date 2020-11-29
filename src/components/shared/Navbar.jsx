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
        <NavLink path="/" text="home" />
        {!signed ? (
          <NavLink path="/accounts/signin" text="sign in" />
        ) : (
          <NavLink path="/" text="log out" />
        )}
        {!signed && <NavLink path="/accounts/signup" text="sign up" />}
      </Toolbar>
    </AppBar>
  );
};

const NavLink = ({ path, text }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="outlined"
      component={RouterLink}
      to={path}
    >
      {text}
    </Button>
  );
};

export default NavBar;
