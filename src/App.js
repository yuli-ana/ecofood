import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, createContext } from "react";
import HomePage from "./pages/home";
import SignInPage from "./components/login/LoginPage";
import SignUpPage from "./components/signup/SignUpPage";
import SignupUserPage from "./components/signup/SignupUserPage";
import MenuModal from "./components/menu/MenuModal";
import SignupRestaurantPage from "./components/signup/SignupRestaurantPage";
import MenuPage from "./pages/Menu";
import SearchRestaurantsPage from "./pages/searchRestaurants";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  spacing: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 32, 64],
});

// Create a new global state and export it
export const Context = createContext();

const App = () => {
  const [userId, setUserId] = useState("");

  return (
    <Context.Provider value={[userId, setUserId]}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/modal" component={MenuModal} />
            {/* <Route exact path="/accounts/signin/:id" component={UserProfile} /> */}
            <Route path="/accounts/login" component={SignInPage} />
            <Route
              exact
              path="/accounts/signup/restaurant"
              component={SignupRestaurantPage}
            />
            <Route path="/accounts/signup/user" component={SignupUserPage} />
            <Route path="/accounts/signup" component={SignUpPage} />
            <Route exact path="/restaurants/:id" component={MenuPage} />
            <Route path="/restaurants" component={SearchRestaurantsPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
