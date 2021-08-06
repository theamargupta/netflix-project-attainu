import { useAuth0 } from "@auth0/auth0-react";
import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./Private";
const Movie = lazy(() => import("../Container/Home"));
const TvShow = lazy(() => import("../Container/TvShows"));
const MyList = lazy(() => import("../Container/MyListPage"));
const ManageProfile = lazy(() => import("../Container/ManageProfile"));
const SearchData = lazy(() => import("../Container/SearchPage"));
const NotFound = lazy(() => import("../Container/NotFound"));
const LandingPage = lazy(() => import("../Container/LandingPage"));
const EditManageProfile = lazy(() => import("../Container/EditManageProfile"));

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
