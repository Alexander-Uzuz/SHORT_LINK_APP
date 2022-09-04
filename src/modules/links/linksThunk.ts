import { createAsyncThunk, } from "@reduxjs/toolkit";
import { BASE_URL } from "api/baseUrl";
import { ILink } from "./interface/ILink";
import { IParams } from "api/links/interface/IParams";
import { getLinks,getLink, addLink, getAllLinks } from "api/links/linksRequest";

export const fetchGetAllLinks = createAsyncThunk(
    'links/fetchGetAllLinks',
    async function(token:string,{rejectWithValue}){
        try{
            const response = await getAllLinks(token);

            return response;
        }catch(err:any){
            return rejectWithValue(err.message);
        }
    }
)

export const fetchGetLinks = createAsyncThunk(
    'links/fetchGetLinks',
    async function (data:{params:IParams,token:string},{rejectWithValue}){
        const {params,token} = data;
        try{
           const response:ILink[] = await getLinks(params,token);

           return response.map((item) => {
            return {
                ...item,
                short:`${BASE_URL}/s/${item.short}`
            }
           });
        }catch(error:any){
            return rejectWithValue(error.message);
        }
    }
);

export const fetchAddLink = createAsyncThunk(
    'links/fetchAddLink',
    async function (data:{link:string,token:string},{rejectWithValue}){
        const {link, token} = data;
        try{
            const response = await addLink(link,token);

            return response
        }catch(error:any){
            return rejectWithValue(error.message)
        }
    }
)