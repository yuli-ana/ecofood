import { useState } from "react";
import { Button, TextField, Link } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import NavBar from "../shared/Navbar";
import userService from "../../services/users";
// import { Link } from "react-router-dom";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router-dom";

const SignInForm = () => {
  const { register, handleSubmit, errors, reset, control } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    console.log(data);

    const loginInfo = await userService.loginUser(data);
    console.log(loginInfo);
    reset();
    history.push("/restaurants");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div>
          <div style={{ margin: "30px 0" }}>
            <TextField
              inputRef={register}
              style={{ width: "100%" }}
              name="email"
              label="Username"
              variant="outlined"
              color="primary"
              autoFocus
            />
          </div>
          <div>
            <TextField
              inputRef={register}
              style={{ width: "100%" }}
              name="password"
              label="Password"
              variant="outlined"
            />
          </div>
        </div>
        <Button
          fullWidth
          variant="outlined"
          type="submit"
          style={{
            background: "black",
            border: "none",
            color: "white",
            margin: "30px 0",
            padding: "12px",
          }}
        >
          login
        </Button>
      </form>
      <Link
        underline="hover"
        color="primary"
        to="/accounts/signup"
        onClick={() => history.push("/accounts/signup")}
      >
        Don't have an account? Sign up
      </Link>
    </>
  );
};

export default SignInForm;
