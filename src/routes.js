import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Dashboard from "./views/Dashboard";
import Products from "./views/Products";
import Login from "./views/Login";
import NewPassword from "./views/NewPassword";

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
    path: "/newPassword",
    layout: DefaultLayout,
    component: NewPassword
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Products
  },
  {
    path: "/products",
    layout: DefaultLayout,
    component: Products
  },
  {
    path: "/customer-support",
    layout: DefaultLayout,
    component: Products
  },




];
