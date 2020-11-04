import NavBar from "../shared/Navbar";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const SignIn = () => {
  return (
    <>
      <NavBar />
      <Button
        style={{ marginTop: "100px" }}
        color="primary"
        component={RouterLink}
        to="/signup/user"
      >
        User
      </Button>
      <Button
        style={{ marginTop: "100px" }}
        color="primary"
        component={RouterLink}
        to="/signup/restaurant"
      >
        Restaurant
      </Button>
    </>
  );
};

export default SignIn;
