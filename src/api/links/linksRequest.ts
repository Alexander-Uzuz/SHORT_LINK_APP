import {get, post} from '../baseUrl';

interface IParams{
    offset?:string;
    limit?:string;
}

export const getLinks = (params:IParams,token:string) => get('/statistics?offset=0&limit=0',token)

export const addLink = (text:string, token:string) => post(`/squeeze?link=${text}`,undefined, token)
