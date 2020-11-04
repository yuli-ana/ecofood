import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./components/home/SignIn";
import SingUpRestaurant from "./components/home/signup/SingUpRestaurant";
import SingUpUser from "./components/home/signup/SingUpUser";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/signup-restaurant" component={SingUpRestaurant} />
          <Route path="/signup-user" component={SingUpUser} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
