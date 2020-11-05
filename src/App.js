import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./components/home/SignIn";
import SignUp from "./components/home/signup/SignUp";
import SingupUser from "./components/home/signup/SingupUser";
import DishModal from "./components/menu/DishModal";
import SingupRestaurant from "./components/home/signup/SingupRestaurant";
import Menu from "./pages/menu";
import SearchRestaurants from "./pages/searchRestaurants";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  spacing: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 32, 64],
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/modal" component={DishModal} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup/user" component={SingupUser} />
          <Route path="/signup/restaurant" component={SingupRestaurant} />
          <Route path="/signup" component={SignUp} />
          <Route path="/menu" component={Menu} />
          <Route path="/search-restaurants" component={SearchRestaurants} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
