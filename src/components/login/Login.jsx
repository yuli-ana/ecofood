import { useState, useContext } from "react";
import { Button, TextField, Link, Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { loginFetch } from "../../reducers/loginAccountSlice";
import { useHistory } from "react-router-dom";
import { useInputState } from "../../services/hooks";
import LockIcon from "@material-ui/icons/Lock";
import { unwrapResult } from "@reduxjs/toolkit";
import { AuthContext } from "../../services/context/authContext";

const useStyles = makeStyles((theme) => ({
  image: {
    display: "block",
    height: "100vh",
    width: "100%",
    objectFit: "cover",
  },
  lockIcon: {
    background: "deeppink",
    margin: "0 auto",
  },
  marginBottom: {
    marginBottom: "1.5rem",
  },
  marginTopBottom: {
    marginTop: "0.5rem",
    marginBottom: "2.2rem",
  },
  h1: {
    margin: "3rem 0 3rem",
  },
}));

const Login = () => {
  const [email, setEmail, resetEmail] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.account);
  const history = useHistory();
  const classes = useStyles();
  const { setAuthData } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resultAction = await dispatch(loginFetch({ email, password }));
      const userData = unwrapResult(resultAction);
      setAuthData(userData);
      history.push("/restaurants");
    } catch (err) {
      console.log(err, "ERR");
    }
  };

  return (
    <>
      <Grid container item xs={8} direction="column">
        <Grid item>
          <Avatar className={classes.lockIcon}>
            <LockIcon />
          </Avatar>
        </Grid>
        <Grid item>
          <h1 className={classes.h1}>Welcome back</h1>
        </Grid>
        <Grid item>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              className={classes.marginBottom}
              fullWidth
              error={!!error}
              onChange={setEmail}
              value={email}
              name="email"
              label="Email"
              variant="outlined"
              color="primary"
            />
            <TextField
              required
              fullWidth
              error={!!error}
              onChange={setPassword}
              value={password}
              name="password"
              label="Password"
              variant="outlined"
            />
            <div className={classes.marginTopBottom}>
              <span>New to Ecofood? </span>
              <Link
                component="button"
                variant="subtitle1"
                underline="hover"
                color="primary"
                // to="/accounts/signup"
                onClick={() => history.push("/accounts/signup")}
              >
                Create an account
              </Link>
            </div>
            <Button
              variant="contained"
              type="submit"
              size="large"
              fullWidth
              color="primary"
            >
              login
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
