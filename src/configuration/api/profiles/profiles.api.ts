import { config } from "../config"

export const profiles = {
    "getMyProfile": async (idToken:string):Promise<any> => {
        return fetch(`${config.URL}/profiles/me/profile`, {
            "method": "GET",
            "headers": {
                "Authorization": `Bearer ${idToken}`
            }
        })
    }
}