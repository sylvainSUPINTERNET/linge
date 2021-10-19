import { Redirect, useLocation } from "react-router-dom";
import React, { useLayoutEffect, useState } from "react";
import { googleOauthConfig } from "../../configuration/oauth2/google.oauth2";
import { config } from "../../configuration/api/config";
import { ICreateUser } from "../../configuration/api/dto/ICreateUser";

export const Home = () => {
    // let location = useLocation();
    // const search = location.search;

    // const openOAuthGoogleAuthorizeModal = () => {
    //     window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly https%3A//www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile email openid profile&prompt=consent&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=${encodeURIComponent(googleOauthConfig.redirect_uri)}&client_id=${googleOauthConfig.client_id}`
    // }


    // useLayoutEffect(() => {
    //     const oauthAuthorizationCode = new URLSearchParams(search).get('code');
    //     if ( oauthAuthorizationCode ) {
    //         fetch('https://www.googleapis.com/oauth2/v4/token', {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    //             },
    //             body: new URLSearchParams({
    //                 'code': oauthAuthorizationCode,
    //                 'client_id': `${googleOauthConfig.client_id}`,
    //                 'client_secret': `${googleOauthConfig.client_secret}`,
    //                 'grant_type': 'authorization_code',
    //                 'redirect_uri': `${googleOauthConfig.redirect_uri}`
    //             })
    //         }).then( async response => {
    //             const details = await response.json();
    //             if ( details.error || details.error_description || response.status !== 200 ) {
    //                 console.log("OAuth2 ERR", details, response.status);
    //             } else {
    //                 const {access_token, id_token, refresh_token} = details;
    //                 localStorage.setItem("linge_access_token", access_token);
    //                 localStorage.setItem("linge_id_token", id_token);

    //                 console.log(`${googleOauthConfig.URL_user_info}${access_token}`)

    //                 const respInfo = await fetch(`${googleOauthConfig.URL_user_info}${access_token}`);
    //                 const profileData = await respInfo.json();
                    
    //                 // TEST
    //                 console.log(details);
    //                 console.log(profileData)

    //                 let newUser: ICreateUser = {
    //                     "email": profileData.email,
    //                     "oauthProvider": "google",
    //                     "refreshToken": refresh_token
    //                 }
    //                 const resp = await fetch(`${config.URL}/users`, {
    //                     "headers": {
    //                         "Content-Type":"application/json"
    //                     },
    //                     "method": "POST",
    //                     "body": JSON.stringify(newUser)
    //                 })

    //                 if ( resp.status === 200 ) {
    //                     window.location.href = "/";
    //                 } else {
    //                     alert("Authenticated has failed, please retry");
    //                 }

    //             }
    //         })
    //         .catch( err => console.log("OAuth2 ERR ", err))
    //     }
    // }, []);

    return (
    
        <div className="container" style={{ marginTop: "8em"}}> 
            <div className="d-flex mt-5" style={{"flexFlow": "wrap", justifyContent:"center"}}>
                <div>
                    <h1 className="text-center">Remous <img style={{width:"64px", "borderRadius": "50%"}} src="https://banner2.cleanpng.com/20210510/jp/transparent-water-drop-icon-nature-icon-rain-icon-6099cd8dcf2be3.6171995716206923658486.jpg"></img></h1>
                    <h1 className="text-center mt-5">Pas de <code><del>blabla</del></code>, juste des <code>rencontres</code>.</h1>
                </div>
            </div> 
            <div className="d-flex mt-2" style={{"flexFlow": "wrap", justifyContent:"center"}}>
                <div style={{marginTop: "5em"}}>
                    <a type="button" className="btn btn-outline-info btn-lg shadow" href="/rencontre" >Je veux rencontré !</a>
                </div>
            </div> 
        </div>
    )
}

