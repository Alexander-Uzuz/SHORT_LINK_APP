import { post } from "../baseUrl";

export const signUp = (url:string) => post(url);

export const signIn = (payload:string) => post('/login',payload);
