import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import RecipesPage from "./RecipesPage";
import NoMatchPage from "./NoMatchPage";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/PageNotFound">
        <NoMatchPage />
      </Route>
      <Route exact path="/recipes">
        <RecipesPage />
      </Route>
      <Route path="*">
        <Redirect to="/PageNotFound" />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
