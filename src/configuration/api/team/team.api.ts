import { config } from "../config"
import { ICreateTeam } from "../dto/ICreateTeam";
import { IUpdateNotificationFreq } from "../dto/IUpdateNotificationFreq";

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
    },
    "notifFreqUpdate": async(idToken: string, payload: IUpdateNotificationFreq):Promise<any> => {
        return fetch(`${config.URL}/teams/notifications/freq`, {
            "method":"PUT",
            "body": JSON.stringify(payload),
            "headers": {
                "Content-type":"application/json",
                "Authorization": `Bearer ${idToken}`
            }
        })
    }
};