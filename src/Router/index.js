import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./Private";
import Movie from "../Container/Home";
import TvShow from "../Container/TvShows";
import MyList from "../Container/MyListPage";
import ManageProfile from "../Container/ManageProfile";
import SearchData from "../Container/SearchPage";
import NotFound from "../Container/NotFound";
import LandingPage from "../Container/LandingPage";
import EditManageProfile from "../Container/EditManageProfile";

const AppRouter = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute
          exact
          path="/editpro1"
          component={EditManageProfile}
          isAuth={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/manage"
          component={ManageProfile}
          isAuth={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/movie"
          component={Movie}
          isAuth={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/tvshow"
          component={TvShow}
          isAuth={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/mylist"
          component={MyList}
          isAuth={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/searchdata"
          component={SearchData}
          isAuth={isAuthenticated}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default AppRouter;
