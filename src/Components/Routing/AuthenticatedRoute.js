import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ component: C, layout: Layout, props: cProps, ...rest }) =>
    <Route
        {...rest}
        render={props =>
            cProps.isAuthenticated
                ? <Layout><C {...props} {...cProps} /></Layout>
                : <Redirect
                    to={`/login?redirect=${props.location.pathname}${props.location
                        .search}`}
                />}
    />;

export default AuthenticatedRoute;