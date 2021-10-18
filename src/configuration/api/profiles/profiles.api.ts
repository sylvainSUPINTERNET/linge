import { config } from "../config"
import { IProfile, IProfileCreate } from "../dto/IProfile"

export const profiles = {
    "getMyProfile": async (idToken:string):Promise<any> => {
        return fetch(`${config.URL}/profiles/me/profile`, {
            "method": "GET",
            "headers": {
                "Authorization": `Bearer ${idToken}`
            }
        })
    },
    "createProfile" : async (idToken:string, payload:IProfileCreate):Promise<any> => {
        return fetch(`${config.URL}/profiles`, {
            "method": "POST",
            "body": JSON.stringify(payload),
            "headers": {
                'Content-type': 'application/json',
                "Authorization": `Bearer ${idToken}`
            }
        })
    }
}