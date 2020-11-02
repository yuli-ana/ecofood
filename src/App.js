import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Restaurant from "./pages/restaurant";
import User from "./pages/user";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/user" exact component={User} />
          <Route path="/restaurant" exact component={Restaurant} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
