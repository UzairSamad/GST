import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import withTracker from "./withTracker";
import AppProvider from './AppContext'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/shards-dashboards.1.1.0.min.css";
import { DefaultLayout } from "./layouts";
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
import CustomerSupport from "./views/CustomerSupport";
import { createBrowserHistory } from "history";
export const appHistory = createBrowserHistory();





export default (props) =>{

console.log(props,'process.env.PUBLIC_URL')
return(
  <AppProvider>


    <Router history={appHistory} >
<div>
    {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker(props => {
                return (
                  <>
                    {
                      route.path == '/login' || route.path == '/signUp' || route.path == '/resetPassword' || route.path == '/newPassword' ?
                        <route.component {...props} />
                        :
                        < route.layout {...props}>
                          <route.component {...props} />
                        </route.layout>}
                  </>

                );
              })}
              />)})}
              </div>
    </Router >
  </AppProvider>

)
}
;
