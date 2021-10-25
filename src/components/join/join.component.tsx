import { useEffect } from "react"
import { teamApi } from "../../configuration/api/team/team.api";

export const Join = (props:any) => {

    const join = async (ticket: string) => {
        try {
            const data = await teamApi.joinTeam(ticket);
            if ( data.status === 200 ) {
                window.location.href = "/";
            } else {
                const j = await data.json()
            }
        } catch ( e ) {
            console.log(e);
                window.location.href = "/";

            console.log(e);
        }
    }


    useEffect(() => {
        const t = getQueryString('t', window.location.href);
        join(t as string);
    }, [])

    const getQueryString = function ( field:string, url:string ) {
        var href = url ? url : window.location.href;
        var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
        var string = reg.exec(href);
        return string ? string[1] : null;
    };

   return <div>
    </div>
}
