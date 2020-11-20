import { useState, useEffect } from "react";
import NavBar from "../../shared/Navbar";
import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <>
      <NavBar />
      <SignInForm />
    </>
  );
};

export default SignIn;
