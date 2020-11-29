import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import NavBar from "../shared/Navbar";
import loginService from "../../services/login";

const SignInForm = () => {
  const { register, handleSubmit, errors, reset, control } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <NavBar />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ margin: "200px 0 0 100px" }}
        action=""
      >
        <div>
          <div style={{ margin: "30px 0" }}>
            <TextField
              inputRef={register}
              style={{ width: "300px" }}
              name="userName"
              label="Username"
              variant="outlined"
            />
          </div>
          <div style={{ margin: "30px 0" }}>
            <TextField
              inputRef={register}
              style={{ width: "300px" }}
              name="password"
              label="Password"
              variant="outlined"
            />
          </div>
        </div>

        <Button variant="outlined" type="submit">
          login
        </Button>
        <Button variant="outlined" type="submit">
          cancel
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
