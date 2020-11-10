import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  TextField,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  Grid,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useForm } from "react-hook-form";
import userService from "../../../services/users";
import { Link as RouterLink } from "react-router-dom";

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

const SignupUser = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const [userId, setUserId] = useState(null);
  const [isSigned, setIsSigned] = useState(false);

  const onSubmit = async (data) => {
    const response = await userService.create(data);
    setUserId(response.id);
    setIsSigned(true);
    console.log(response, "Submitting complete");
    reset();
  };

  console.log(userId);

  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className={classes.center}
      spacing={3}
    >
      {!isSigned ? (
        <Grid item>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              className={classes.padding}
              required
              inputRef={register}
              name="name"
              variant="outlined"
              label="Name"
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
            {errors.name && errors.name.type === "required" && (
              <div className="error">You must enter your name</div>
            )}
            <Grid container justify="center">
              <Grid item xs={6} className={classes.padding}>
                <InputLabel id="select-age">Age</InputLabel>
                <Select labelId="select-age" fullWidth>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6} className={classes.padding}>
                <InputLabel id="select-gender">Gender</InputLabel>
                <Select labelId="select-gender" fullWidth>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"..."}>...</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <TextField
              className={classes.padding}
              required
              inputRef={register}
              name="phone"
              variant="outlined"
              label="Phone"
              fullWidth
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
            <Typography
              color="primary"
              variant="body1"
              className={classes.padding}
            >
              Additional Information
            </Typography>
            <TextField
              className={classes.padding}
              required
              inputRef={register}
              name="weight"
              variant="outlined"
              label="Weight"
              fullWidth
            />
            <TextField
              className={classes.padding}
              required
              inputRef={register}
              name="height"
              variant="outlined"
              label="Height"
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
      ) : (
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          className={classes.center}
          spacing={3}
        >
          <Grid item xs={12} className={classes.padding}>
            <Alert variant="outlined" severity="success">
              Succesfully subscribed
            </Alert>
          </Grid>

          <Grid item xs={6} className={classes.padding}>
            <Button
              component={RouterLink}
              to="/search-restaurants"
              variant="outlined"
              color="primary"
              size="large"
              className={classes.button}
              endIcon={<ArrowForwardIcon />}
            >
              next
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default SignupUser;
