import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { config } from "../../configuration/api/config";
import { ICreateUser } from "../../configuration/api/dto/ICreateUser";
import { googleOauthConfig } from "../../configuration/oauth2/google.oauth2";
import { GrCheckmark } from 'react-icons/gr';
import {TiTick} from "react-icons/ti";
 
//@ts-ignore
import jwt_decode from "jwt-decode";

import './compte.component.css'; // Tell webpack that Button.js uses these styles
import { profiles } from "../../configuration/api/profiles/profiles.api";
import { IProfile } from "../../configuration/api/dto/IProfile";


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


    let [existingProfile, setExistingProfile] = useState<IProfile>();

    const inputElHobby = useRef(null);
    let [hobby, setHobby] = useState<string>("");
    let [hobbies, setHobbies] = useState<any[]>([]);

    let [age, setAge] = useState<number>();
    let [job, setJob] = useState<string>();

    let [city, setCity] = useState<string>();
    let [country, setCountry] = useState<string>();

    let [hasBeenModified, setHasBeenModified] = useState<boolean>(true);

    const getDecoded = ():any => {
        let tokenId = window.localStorage.getItem('linge_id_token');
        //@ts-ignore
        let decoded:string | null = jwt_decode(tokenId);
        if ( !decoded || decoded === null || decoded === "" ) {
            return "";
        } 
        return decoded;
    }

    const populateForm = (profile: IProfile) => {
        console.log(profile); 

        if ( profile.age ) {
            setAge(profile.age as number);
        }

        if ( profile.job ) {
            setJob(profile.job);
        }

        if ( profile.city ) {
            setCity(profile.city);
        }

        if ( profile.country ) {
            setCountry(profile.country)
        }

        if ( profile.miscs.length > 0 ) {
            let hobbies = [...profile.miscs];
            setHobbies(hobbies);
        }
    }

    useEffect( () => {
        profiles.getMyProfile(localStorage.getItem('linge_id_token') as string).then( async resp => {
            if ( resp.status === 200 ) {
                const data = await resp.json();
                setExistingProfile(data as IProfile);
                populateForm(data as IProfile);
            }
        }).catch( err => console.log(err))    
    }, []);

    const [claims, setClaims] = useState<OAuth2ClaimsGoogle>(getDecoded());
    return (
        <div>
            {
                claims !== null && <div className="container mt-5">
                    <div className="shadow-lg">
                        <div className="text-center pb-5 rounded-top" style={{"background": "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% )"}}>
                            <img src={claims.picture} id="profilePic" style={{width: "136px"}} className="img-thumbnail mt-5 shadow"></img>
                            <p className="text-center pt-2 text-light">{claims.family_name} {claims.given_name}</p>
                            <p className="text-center pt-2 text-light">{claims.email}</p>
                        </div>
                        <div>

                            <div className="text-center" style={{marginTop:"-20px"}}>
                                <h6 className="btn btn-primary btn-lg">Profile</h6>
                            </div>

                            <div className="d-flex justify-content-center">
                                <div>
                                    <div className="m-2" style={{"width": "20em"}}>
                                        <div className="card-body text-center">
                                            <input type="number" className="shadow form-control mt-2" onChange={ev => {
                                                setAge((ev.target.value as unknown as number))
                                                setHasBeenModified(false);    
                                            }} placeholder="age" value={age}/>
                                            <input type="text" className="shadow form-control mt-4" onChange={ev => {
                                                setJob(ev.target.value);
                                                setHasBeenModified(false);    
                                            }} placeholder="job" value={job}/>
                                            <input type="text" className="shadow form-control mt-4" placeholder="ville" value={city} onChange={ev => {
                                                setCity(ev.target.value)
                                                setHasBeenModified(false);    
                                            }}/>
                                            <input type="text" className="shadow form-control mt-4" placeholder="pays" value={country} onChange={ev => {
                                                setCountry(ev.target.value)
                                                setHasBeenModified(false);        
                                            }}/>
                                            <div className="d-flex">
                                                <input type="text" ref={inputElHobby} className="shadow form-control mt-4" placeholder="hobby" onChange={ ev => { 
                                                    setHobby(ev.target.value) 
                                                    setHasBeenModified(false);    
                                                    }}/>
                                                    <button className="mt-4 btn btn-sm btn-success rouded" disabled={hobby === ""}
                                                    onClick={ev => { 
                                                        hobbies = [...hobbies, hobby]; 
                                                        setHobbies(hobbies)
                                                        setHobby("");
                                                        setHasBeenModified(false);    
                                                        (inputElHobby.current! as HTMLInputElement).value = "";
                                                         }}
                                                    ><TiTick/></button>
                                            </div>

                                            <div className="m-3">
                                                {
                                                    hobbies && hobbies.length > 0 && hobbies.map( (hobby:string) => {
                                                        return <span className="badge badge-pill m-2" style={{padding:"10px", backgroundColor:"#614385"}}>#{hobby}</span>
                                                    })
                                                }
                                            </div>

                                            <button className="btn btn-md btn-primary shadow mt-3" disabled={hasBeenModified}>Confirmer <GrCheckmark></GrCheckmark></button>
                                        </div>
                                        </div>                                
                                    </div>
                            </div>    

                            {/* <div className="p-3 container d-flex justify-content-center flex-wrap">
                                <input type="number" className="m-2 p-1" style={{"width": "100%"}} placeholder="age"/>
                                <input type="text" className="m-2 p-1"  style={{"width": "100%"}} placeholder="Job" /> 
                                <input type="text" className="m-2 p-1" style={{"width": "100%"}} placeholder="ville"/> 
                                <input type="text" className="m-2 p-1" style={{"width": "100%"}} placeholder="pays"/> 
                                <input type="text" className="m-2 p-1"  style={{"width": "100%"}}placeholder="hobbies"/> 
                            </div> */}

                        
                        </div>
{/* 
                        <div className="d-flex" style={{background:''}}>
                            <div style={{width:"100%", background:"red"}} className="m-2">
                                <div className="p-3">
                                <p>Bonjour, {claims.family_name} {claims.given_name}</p>
                                    <p>Localisé : {claims.locale}</p>
                                    <p>Contact : {claims.email} </p>  
                                </div>
                            </div>
                        </div>
                        <div style={{flex:1}} className="m-2">
                                <button className="btn btn-outline-info">Creer un sondage</button>
                            </div> */}
                    </div>
                </div>
            }
            {/* If not logged ( missing token ), providers login button displaying */}
        </div>
    )
}

