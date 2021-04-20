import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { AuthContext } from "../../services/context/authContext";

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
  },
  toolbar: {
    maxWidth: "300px",
    margin: "0 0 0 auto",
  },
  button: {
    color: "white",
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <NavLink path="/" text="home" />
        <NavLink path="/restaurants" text="search" />
        <NavLink path="/accounts/login" text="log in" />
        <NavLink path="/" text="log out" />
      </Toolbar>
    </AppBar>
  );
};

const NavLink = ({ path, text }) => {
  const { setAuthData } = useContext(AuthContext);

  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={() => (text === "log out" ? setAuthData(null) : null)}
      component={RouterLink}
      to={path}
    >
      {text}
    </Button>
  );
};

export default NavBar;
