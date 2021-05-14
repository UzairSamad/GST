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
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import NewPassword from "./views/NewPassword";
import ResetPassword from "./views/ResetPassword";
import PromotionProducts from "./views/PromotionProducts";
import {
  AddProduct,
  EditOrder,
  AddService,
  EditAppoitment,
  AddPromoCode
} from './views/components'

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
    path: "/signUp",
    layout: DefaultLayout,
    component: SignUp
  },
  {
    path: "/resetPassword",
    layout: DefaultLayout,
    component: ResetPassword
  },
  {
    path: "/newPassword",
    layout: DefaultLayout,
    component: NewPassword
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
    path: "/addServices",
    layout: DefaultLayout,
    component: AddService
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
  {
    path: "/add-editproduct",
    layout: DefaultLayout,
    component: AddProduct
  },
  {
    path: "/editorder",
    layout: DefaultLayout,
    component: EditOrder
  },
  {
    path: "/add-editService",
    layout: DefaultLayout,
    component: AddService
  },
  {
    path: "/edit-appointment",
    layout: DefaultLayout,
    component: EditAppoitment
  },
  {
    path: "/addEdit-promocode",
    layout: DefaultLayout,
    component: AddPromoCode
  },
  {
    path: "/PromotionProducts",
    layout: DefaultLayout,
    component: PromotionProducts
  },

];
