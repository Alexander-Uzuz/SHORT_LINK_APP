export interface IStateUser{
    user:IStateUserData,
    error:string | null;
    loading:boolean;
}

export interface IStateUserData{
    username:string | null,
    token:string | null,
}