import { config } from "../config";
import { ICreateInvit } from "../dto/ICreateInvit";

export const invitApi = {
    "add": async (idToken:string, payload:ICreateInvit): Promise<any> => {
        return fetch(`${config.URL}/invits`, {
            "method": "POST",
            "body": JSON.stringify(payload),
            "headers": {
                "Content-type":"application/json",
                "Authorization": `Bearer ${idToken}`
            }
        })
    }
}