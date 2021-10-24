import { config } from "../config"
import { ICreateTeam } from "../dto/ICreateTeam";

export const teamApi = {
    "createTeam": async (teamPayload:ICreateTeam, idToken:string):Promise<any> => {
        return fetch(`${config.URL}/teams`, {
            "method": "POST",
            "body": JSON.stringify(teamPayload),
            "headers": {
                "Content-type":"application/json",
                "Authorization": `Bearer ${idToken}`
            }
        })
    },
    "getMyTeam": async (idToken:string):Promise<any>  => {
        return fetch(`${config.URL}/teams/me`, {
            "method":"GET",
            "headers": {
                "Content-type":"application/json",
                "Authorization": `Bearer ${idToken}`
            }
        });
    },
    "joinTeam": async (t:string):Promise<any>  => {
        return fetch(`${config.URL}/teams/join`, {
            "method":"POST",
            "body": JSON.stringify({
               "ticket": t 
            }),
            "headers": {
                "Content-type":"application/json"
            }
        });
    }
};