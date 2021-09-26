import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import withTracker from "./withTracker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/shards-dashboards.1.1.0.min.css";
import { DefaultLayout } from "./layouts";


import { createBrowserHistory } from "history";
export const appHistory = createBrowserHistory();





export default (props) =>{

console.log(props,'process.env.PUBLIC_URL')
return(


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
                      route.path == '/login'  ?
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

)
}
;
