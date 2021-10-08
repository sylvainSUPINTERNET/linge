import { Redirect, useLocation } from "react-router-dom";
import React, { useLayoutEffect, useState } from "react";
import { googleOauthConfig } from "../../configuration/oauth2/google.oauth2";

export const Home = () => {
    console.log("HOME CALL");
    let location = useLocation();
    const search = location.search;

    useLayoutEffect(() => {
        const oauthAuthorizationCode = new URLSearchParams(search).get('code');
        if ( oauthAuthorizationCode ) {
            console.log("FROM oauth2");
            console.log("code : ", oauthAuthorizationCode);

            fetch('https://www.googleapis.com/oauth2/v4/token', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: new URLSearchParams({
                    'code': oauthAuthorizationCode,
                    'client_id': `${googleOauthConfig.client_id}`,
                    'client_secret': `${googleOauthConfig.client_secret}`,
                    'grant_type': 'authorization_code',
                    'redirect_uri': `${googleOauthConfig.redirect_uri}`
                })
            }).then( async response => {
                const details = await response.json();
                if ( details.error || details.error_description || response.status !== 200 ) {
                    console.log("OAuth2 ERR", details, response.status);
                } else {
                    console.log(details);
                    localStorage.setItem("linge_access_token", details.access_token);
                    localStorage.setItem("linge_id_token", details.id_token);

                    // TODO : WIP => container using redis to save email user ( decode the id_token ) with the refresh token associated
                    // TODO send with Authorized brear header the token 
                    // will be decoded / save in DB 
                    // IF no error => redierec tto /
                    // IF error => redirect to page with error message + BTN retry to connect
                    
                    window.location.href = "/";
                }
            })
            .catch( err => console.log("OAuth2 ERR ", err))
        }
    }, []);


    return (
    
        <div>
            <h1>Home</h1>
                <a href={`https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly email openid profile&prompt=consent&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=${encodeURIComponent(googleOauthConfig.redirect_uri)}&client_id=${googleOauthConfig.client_id}`}>
                    Connect with Google
                </a>
        </div>
    )
}