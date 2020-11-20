import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, createContext } from "react";
import Home from "./pages/home";
import SignIn from "./components/home/signin/SignIn";
import SignUp from "./components/home/signup/SignUp";
import SignupUser from "./components/home/signup/SignupUser";
import DishModal from "./components/menu/DishModal";
import SignupRestaurant from "./components/home/signup/SignupRestaurant";
import Menu from "./pages/menu";
import SearchRestaurants from "./pages/searchRestaurants";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  spacing: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 32, 64],
});

export const Context = createContext();

const App = () => {
  const [userId, setUserId] = useState("");

  // Log user id
  console.log(userId, "Global userId");

  return (
    <Context.Provider value={[userId, setUserId]}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/modal" component={DishModal} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup/user" component={SignupUser} />
            <Route path="/signup/restaurant" component={SignupRestaurant} />
            <Route path="/signup" component={SignUp} />
            <Route path="/restaurants/:id" component={Menu} />
            <Route path="/restaurants" component={SearchRestaurants} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
