export interface ILink{
    id:string;
    short:string;
    target:string;
    counter:string;    
}

export interface IInitialState{
    links:ILink[];
    currentLink:ILink | null;
    loading:boolean;
    error:string | null;
}