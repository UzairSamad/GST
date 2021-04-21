import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Dashboard from "./views/Dashboard";
import Appointments from "./views/Appointments";
import Users from "./views/Users";
import Services from "./views/Services";
import Orders from "./views/Orders";
import PromoDeals from "./views/PromoDeals";
import BlogPosts from "./views/CustomerSupport";
import Products from "./views/Products";
import Categories from "./views/Categories";
import Settings from "./views/Settings";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/appointments",
    layout: DefaultLayout,
    component: Appointments
  },
  {
    path: "/users",
    layout: DefaultLayout,
    component: Users
  },
  {
    path: "/services",
    layout: DefaultLayout,
    component: Services
  },
  {
    path: "/orders",
    layout: DefaultLayout,
    component: Orders
  },
  {
    path: "/promo-deals",
    layout: DefaultLayout,
    component: PromoDeals
  },
  {
    path: "/customer-support",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/products",
    layout: DefaultLayout,
    component: Products
  },
  {
    path: "/cateogries",
    layout: DefaultLayout,
    component: Categories
  },
  {
    path: "/settings",
    layout: DefaultLayout,
    component: Settings
  },

];
