import { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  Grid,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useForm, Controller } from "react-hook-form";
import userService from "../../services/users";
import { Context } from "../../App";
import NavBar from "../shared/Navbar";

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
  const history = useHistory();
  const classes = useStyles();
  const [userId, setUserId] = useContext(Context);
  const { register, handleSubmit, reset, control } = useForm();

  const onSubmit = async (data) => {
    // Create user, pass data object with user all user inputs
    const response = await userService.createUser(data);
    // Store user id in a global variable
    setUserId(response._id);
    // Clear all inputs after form submit
    reset();
    // Programatically update url
    history.push("/restaurants");
  };

  return (
    <>
      <NavBar />
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
              name="first"
              variant="outlined"
              label="First Name"
              fullWidth
            />
            <TextField
              className={classes.padding}
              required
              inputRef={register}
              name="last"
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
            {/* <Grid container justify="center">
              <Grid item xs={6} className={classes.padding}>
                <InputLabel id="select-age">Age</InputLabel>
                <Controller
                  as={
                    <Select labelId="select-age" fullWidth>
                      <MenuItem value={18}>18</MenuItem>
                      <MenuItem value={19}>19</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={21}>21</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={23}>23</MenuItem>
                      <MenuItem value={24}>24</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={26}>26</MenuItem>
                      <MenuItem value={27}>27</MenuItem>
                      <MenuItem value={28}>28</MenuItem>
                      <MenuItem value={29}>29</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                    </Select>
                  }
                  name="age"
                  control={control}
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={6} className={classes.padding}>
                <InputLabel id="select-gender">Sex</InputLabel>
                <Controller
                  as={
                    <Select labelId="Sex" fullWidth>
                      <MenuItem value={"female"}>Female</MenuItem>
                      <MenuItem value={"male"}>Male</MenuItem>
                      <MenuItem value={"other"}>Other</MenuItem>
                    </Select>
                  }
                  name="sex"
                  control={control}
                  defaultValue=""
                />
              </Grid>
            </Grid> */}
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
            {/* <Typography
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
            /> */}
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
