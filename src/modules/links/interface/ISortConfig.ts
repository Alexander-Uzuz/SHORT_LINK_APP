export type IKey = "short" | "counter" | "target";
export type IDirection = "asc" | "desc"

export interface ISortConfig{
    key:IKey,
    direction:IDirection
}