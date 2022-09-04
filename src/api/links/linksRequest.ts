import { get, post } from "../baseUrl";
import { IParams } from "./interface/IParams";

export const getLinks = (
  params: IParams = { offset: 0, limit: 6, order: "asc_short" },
  token: string
) => get(`/statistics?order=${params.order}&offset=${params.offset}&limit=${params.limit}`, token);

export const getAllLinks = (token:string) => get('/statistics', token);

export const getLink = (url: string) => get(url);

export const addLink = (text: string, token: string) =>
  post(`/squeeze?link=${text}`, undefined, token);
