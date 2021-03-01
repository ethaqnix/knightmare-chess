import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./Config/routes.js";
import { AuthProvider } from "./Context/authContext";
import AppRoute from "./Components/AppRoute";

function App() {
  return (
    <>
      <header>
        <script src="http://localhost:8080/javascript/ActionheroWebsocketClient.js" />
      </header>
      <AuthProvider>
        <Router>
          <Switch>
            {routes.map((route) => (
              <AppRoute
                key={route.path}
                path={route.path}
                component={route.component}
                isPrivate={route.isPrivate}
                title={route.title}
              />
            ))}
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
