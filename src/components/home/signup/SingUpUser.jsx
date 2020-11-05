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
  margin: {
    margin: theme.spacing(2),
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
          />
          <Grid container justify="center">
            <Grid item xs="5" className={classes.margin}>
              <InputLabel id="select-age">Age</InputLabel>
              <Select labelId="select-age" fullWidth>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>
            <Grid item xs="5" className={classes.margin}>
              <InputLabel id="select-gender">Gender</InputLabel>
              <Select labelId="select-gender" fullWidth>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"..."}>...</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <TextField
            className={classes.margin}
            required
            inputRef={register}
            name="phone"
            variant="outlined"
            label="Phone"
            fullWidth
          />
          <TextField
            className={classes.margin}
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
            className={classes.margin}
          >
            Additional Information
          </Typography>
          <TextField
            className={classes.margin}
            required
            inputRef={register}
            name="weight"
            variant="outlined"
            label="Weight"
            fullWidth
          />
          <TextField
            className={classes.margin}
            required
            inputRef={register}
            name="height"
            variant="outlined"
            label="Height"
            fullWidth
          />
          <Button type="submit" variant="outlined" color="primary">
            Sign up
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignupUser;
