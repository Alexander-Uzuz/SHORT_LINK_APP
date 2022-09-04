export interface ILink{
    id:string;
    short:string;
    target:string;
    counter:string;    
}

export interface IInitialState{
    links:ILink[];
    currentLink:ILink | null;
    size:number;
    loading:boolean;
    error:string | null;
}