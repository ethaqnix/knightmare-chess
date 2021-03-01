import React from "react";
import Page from "./page/Page";

const SecuredRoute = ({ component: Component, title, isPrivate, ...rest }) => {
  if (!isPrivate) return <Component {...rest} />;

  return (
    <Page title={title}>
      <Component {...rest} />;
    </Page>
  );
};

export default SecuredRoute;
