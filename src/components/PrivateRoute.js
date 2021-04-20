import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../services/context/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(AuthContext);

  const { loading } = auth;

  if (loading) {
    return (
      <Route
        {...rest}
        render={() => {
          return <p>Loading...</p>;
        }}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        auth?.data ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/accounts/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
