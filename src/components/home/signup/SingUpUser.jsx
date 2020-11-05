import {
  Button,
  TextField,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  Grid,
} from "@material-ui/core";
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

const SignupUser = () => {
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
      <Grid item>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            required
            inputRef={register}
            name="email"
            variant="outlined"
            label="Email"
            fullWidth
            className={classes.padding}
          />
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

export default SignupUser;
