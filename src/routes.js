import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Dashboard from "./views/Dashboard Tables.js";
import Coefficent from "./views/Coefficent";
import UserGraph from "./views/UserGraph";
import Login from "./views/Login";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: Login
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/coefficent",
    layout: DefaultLayout,
    component: Coefficent
  },
  {
    path: "/userGraph",
    layout: DefaultLayout,
    component: UserGraph
  },




];
