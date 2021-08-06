import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const { component: RouteComponent, isAuth, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuth ? <RouteComponent {...routeProps} /> : <Redirect to={"/"} />
      }
    />
  );
};
export default PrivateRoute;
