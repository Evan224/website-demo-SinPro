import React from "react";
import { Route, Link } from "react-router-dom";

// config
import routes from "./routes.js";

class FrontendAuth extends React.Component {
  render() {
    const pathname = this.props.location.pathname;
    const targetRouter = routes.find(function(item) {
      return item.path === pathname;
    });

    if (pathname === "/") {
      return <Link to="MainPage"></Link>;
    }

    if (!targetRouter) {
      return <Link to="404" />;
    }    
  }
}

export default FrontendAuth;
