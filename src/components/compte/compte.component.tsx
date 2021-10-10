import React, { useLayoutEffect, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { config } from "../../configuration/api/config";
import { ICreateUser } from "../../configuration/api/dto/ICreateUser";
import { googleOauthConfig } from "../../configuration/oauth2/google.oauth2";
//@ts-ignore
import jwt_decode from "jwt-decode";


interface OAuth2Claims {
    email:string
}

interface OAuth2ClaimsGoogle extends OAuth2Claims {
    given_name:string
    family_name:string
    locale:string
    picture: string
}   

export const Compte = () => {

    const getDecoded = ():any => {
        let tokenId = window.localStorage.getItem('linge_id_token');
        //@ts-ignore
        let decoded:string | null = jwt_decode(tokenId);
        if ( !decoded || decoded === null || decoded === "" ) {
            return "";
        } 
        return decoded;
    }

    const [claims, setClaims] = useState<OAuth2ClaimsGoogle>(getDecoded());
    return (
        <div>
            {
                claims !== null && <div className="container mt-5">
                    <div className="">
                        <div className="d-flex" style={{background:''}}>
                            <div style={{flex:1}} className="m-2">
                                <h6>Informations</h6>
                                <div className="p-3">
                                <p>Bonjour, {claims.family_name} {claims.given_name}</p>
                                    <img src={claims.picture} style={{width: "64px"}} className="rounded"></img>
                                    <p>Localisé : {claims.locale}</p>
                                    <p>Contact : {claims.email} </p>  
                                </div>
                            </div>
                            <div style={{flex:1}} className="m-2">
                                <h6>Commandes</h6>
                                <strong>Pas de commandes en cours</strong>

                                <div className="text-center mt-3">
                                    <label>Entrer numéro de commande</label>
                                    <input id="enterOrderNb" type="text"></input>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* If not logged ( missing token ), providers login button displaying */}
        </div>
    )
}

