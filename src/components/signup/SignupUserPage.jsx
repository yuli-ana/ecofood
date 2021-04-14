import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import { Button, TextField, Grid } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { signUpFetch } from "../../reducers/signUpUserSlice";

const useStyles = makeStyles((theme) => ({
  center: {
    minHeight: "100vh",
  },
  padding: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

const SignupUserPage = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, control } = useForm();
  const history = useHistory();
  const classes = useStyles();

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(
        signUpFetch({ ...data, role: { type: "user" } })
      );
      const response = unwrapResult(resultAction);
      console.log(response, "SIGN UP RESPONSE");
    } catch (err) {}
  };

  return (
    <>
      <Grid
        container
        justify="center"
        alignContent="center"
        className={classes.center}
        spacing={3}
      >
        <Grid item>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              className={classes.padding}
              required
              inputRef={register}
              name="firstName"
              variant="outlined"
              label="First Name"
              fullWidth
            />
            <TextField
              className={classes.padding}
              required
              inputRef={register}
              name="lastName"
              variant="outlined"
              label="Last Name"
              fullWidth
            />
            <TextField
              inputRef={register({ required: true })}
              name="email"
              variant="outlined"
              label="Email"
              fullWidth
              className={classes.padding}
            />
            <TextField
              className={classes.padding}
              required
              inputRef={register}
              name="password"
              variant="outlined"
              label="Create password"
              fullWidth
            />
            <TextField
              className={classes.padding}
              required
              inputRef={register}
              name="city"
              variant="outlined"
              label="City"
              fullWidth
            />
            <Grid container justify="center">
              <Grid item>
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.button}
                  endIcon={<ArrowForwardIcon />}
                >
                  sign up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default SignupUserPage;
