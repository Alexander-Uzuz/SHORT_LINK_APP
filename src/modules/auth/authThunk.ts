import { createAsyncThunk, } from "@reduxjs/toolkit";
import { signIn, signUp } from "api/auth/authRequest";


export const fetchUserLogin = createAsyncThunk(
    'user/fetchUserLogin',
    async function (data:{username:string,password:string, cb:() => void}, {rejectWithValue}){
        const {username,password, cb} = data;
        try{
            const response = await signIn(`grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`);

            cb();

            localStorage.setItem('user',JSON.stringify({username,token:response.access_token}))

            return {
                ...response,
                username
            };
        }catch(error:any){
            return rejectWithValue(error.message);
        }
    }
);

export const fetchUserRegistration = createAsyncThunk(
    'user/fetchUserRegistration',
    async function(data:{username:string, password:string, cb:() => void},{rejectWithValue}){
        try{
            const {username, password, cb} = data;
            const registration = await signUp(`/register?username=${username}&password=${password}`);
            const login = await signIn(`grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`);

            localStorage.setItem('user',JSON.stringify({username,token:login.access_token}))
            
            cb();

            return login;
        }catch(error:any){
            return rejectWithValue(error.message)
        }
    }
)