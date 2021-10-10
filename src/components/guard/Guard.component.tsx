
import React from 'react';
import { Route, Redirect, RouteProps } from "react-router-dom";
import { Authenticate } from '../authenticate/authenticate.component';


interface Props extends RouteProps {
    protectedComponent: React.ComponentType
}

export const GuardRoute = ({protectedComponent: Component, ...otherProps}:Props) => {
    let flagAuth = false;
    let idToken = localStorage.getItem('linge_id_token');
    let accessToken = localStorage.getItem('linge_access_token');

    if ( idToken !== null || accessToken !== null ) {
        flagAuth = true;
    }
    return (
    <Route {...otherProps} render={ (props:any) => {
        return (
        flagAuth === true
             ? <Component {...props} />
            //  : <Redirect to="/" />
            : <Authenticate />
        )
    }}>

    </Route>)
}