export interface IProfile {
    id:string;
    age:number;
    job:string;
    city:string;
    country:string;
    miscs: string[];
    ownerEmail: string;
    location: {
        x:number;
        y:number;
        type: string;
        coordinates: number[]
    }
    createdAt:number;
    updatedAt:number;
}


export interface IProfileCreate {
    age:number;
    job:string;
    city:string;
    country:string;
    miscs: string[];
    ownerEmail: string;
    latitude: number;
    longitude: number;
}


