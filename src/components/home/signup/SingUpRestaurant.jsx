import { Button, TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useForm } from "react-hook-form";

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

const SignupRestaurant = () => {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className={classes.center}
      spacing={3}
    >
      <Grid item xs={6}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={classes.padding}
            required
            inputRef={register}
            name="email"
            variant="outlined"
            label="Email"
            fullWidth
          />
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
          <Grid container justify="center">
            <Grid item>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                size="large"
                className={classes.button}
              >
                Sign up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignupRestaurant;
