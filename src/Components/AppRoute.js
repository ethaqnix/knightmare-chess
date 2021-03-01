import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuthState } from "../Context/authContext";
import SecuredRoute from "./SecuredRoute";

const AppRoutes = ({
  component: Component,
  path,
  isPrivate,
  title,
  ...rest
}) => {
  const userDetails = useAuthState();
  console.log(userDetails);
  console.log(isPrivate && !Boolean(userDetails.password));
  return (
    <Route
      path={path}
      render={(props) =>
        isPrivate && !Boolean(userDetails.password) ? (
          <Redirect to={{ pathname: "/login" }} />
        ) : (
          <SecuredRoute
            component={Component}
            isPrivate={isPrivate}
            title={title}
            {...props}
          />
        )
      }
      {...rest}
    />
  );
};

export default AppRoutes;
