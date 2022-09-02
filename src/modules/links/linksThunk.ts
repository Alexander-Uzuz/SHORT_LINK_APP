import { createAsyncThunk, } from "@reduxjs/toolkit";
import { BASE_URL } from "api/baseUrl";
import { ILink } from "./interface/ILink";
import { getLinks, addLink } from "api/links/linksRequest";


export const fetchGetLinks = createAsyncThunk(
    'links/fetchGetLinks',
    async function (token:string,{rejectWithValue}){
        try{
           const response:ILink[] = await getLinks({},token)

           return response.map(item => {
            return {
                ...item,
                short:`${BASE_URL}/${item.short}`
            }
           });
        }catch(error:any){
            return rejectWithValue(error.message);
        }
    }
);

export const fetchAddLink = createAsyncThunk(
    'links/fetchAddLink',
    async function (data:{text:string,token:string},{rejectWithValue}){
        const {text, token} = data;
        try{
            const response = await addLink(text,token);

            return response
        }catch(error:any){
            return rejectWithValue(error.message)
        }
    }
)