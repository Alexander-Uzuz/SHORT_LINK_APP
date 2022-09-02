export interface ILink{
    id:string;
    short:string;
    target:string;
    counter:string;    
}

export interface IInitialState{
    links:ILink[];
    loading:boolean;
    error:string | null;
}