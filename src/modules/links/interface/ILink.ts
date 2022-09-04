export interface ILink{
    id:string;
    short:string;
    target:string;
    counter:string;    
}

export interface IInitialState{
    links:ILink[];
    currentLink:ILink | null;
    limit:number,
    size:number;
    order:string,
    direction:string,
    loading:boolean;
    error:string | null;
}