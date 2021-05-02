import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes";
import withTracker from "./withTracker";
import AppProvider from './AppContext'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/shards-dashboards.1.1.0.min.css";

export default () => (
  <AppProvider>

    <Router basename={process.env.REACT_APP_BASENAME || ""}>
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
            />
          );
        })}
      </div>
    </Router >
  </AppProvider>

);
