import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from "../servies/AuthenticationService";

const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => {
            return  AuthenticationService.isLoggedIn()
                ? <Component {...props} {...rest} />
                : <Redirect to={{
                    pathname: '/login',
                    redirectTo: props.location.pathname,
                }} />
        }
    } />
);

export default PrivateRoute;
