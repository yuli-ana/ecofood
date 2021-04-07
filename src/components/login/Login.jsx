import { useState } from "react";
import {
  Button,
  TextField,
  Link,
  LinearProgress,
  Grid,
} from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { oauthFetch, oauthStatus } from "../../reducers/loginSignUpSlice";
import { useHistory } from "react-router-dom";
import { useInputState } from "../../services/hooks";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles((theme) => ({
  image: {
    display: "block",
    height: "100vh",
    width: "100%",
    objectFit: "cover",
  },
  lockIcon: {
    background: "deeppink",
    margin: " 0 auto",
  },
  marginBottom: {
    marginBottom: "1.5rem",
  },
  marginTopBottom: {
    marginTop: "0.5rem",
    marginBottom: "1.5rem",
  },
  h1: {
    margin: "2rem 0 3rem",
  },
}));

const Login = () => {
  const [email, setEmail, resetEmail] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const history = useHistory();
  const { status, error } = state || null;
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(oauthFetch({ email, password })).then(() => {
      if (status !== "failed" && !!error) {
        resetEmail();
        resetPassword();
        history.push("/restaurants");
      }
    });
  };

  return (
    <>
      <Grid container xs={8} direction="column">
        <Grid item>
          <Avatar className={classes.lockIcon}>
            <LockIcon />
          </Avatar>
        </Grid>
        <Grid item>
          <h1 className={classes.h1}>Welcome back</h1>
        </Grid>
        <Grid item>
          <form onSubmit={(e) => handleSubmit(e)}>
            <TextField
              className={classes.marginBottom}
              fullWidth
              error={!!error}
              helperText={error}
              onChange={setEmail}
              value={email}
              name="email"
              label="Username"
              variant="outlined"
              color="primary"
              autoFocus
            />

            <TextField
              fullWidth
              error={!!error}
              helperText={error}
              onChange={setPassword}
              value={password}
              name="password"
              label="Password"
              variant="outlined"
            />
            <div className={classes.marginTopBottom}>
              <span>New to Ecofood? </span>
              <Link
                underline="hover"
                color="primary"
                to="/accounts/signup"
                onClick={() => history.push("/accounts/signup")}
              >
                Create an account
              </Link>
            </div>
            <Button variant="outlined" type="submit" fullWidth>
              login
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
