import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";



const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          // if we are authenticated tham go to route
          <Component {...props} />
        ) : (
          // if not authenticated return to login screen
          <Redirect
            to={{
              pathname: "/login",
              from: props.location,
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;