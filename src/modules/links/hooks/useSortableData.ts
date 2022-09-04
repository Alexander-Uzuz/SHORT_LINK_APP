import { IParams } from "./../../../api/links/interface/IParams";
import { useAppSelector } from "./../../../core/redux/hooks";
import { useState, useEffect } from "react";
import { ISortConfig, IKey, IDirection } from "../interface/ISortConfig";

export const useSortableData = (
  orderQuery: string | null,
  setSearchParams: (searchParams:any) => void,
  setCurrentPage:(currentPage:number) => void,
  config: ISortConfig = { key: "short", direction: "asc" }
) => {
  const [sortConfig, setSortConfig] = useState<ISortConfig>(config);


  useEffect(() => {
    let obj;
    if(orderQuery) {
        const array:any = orderQuery.split('_');
        obj = {
            direction:array[0],
            key:array[1]
        }
        setSortConfig({
            direction:array[0],
            key:array[1]
        })        
    }
  }, []);

  const requestSort = (key: IKey) => {
    let direction: IDirection = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const params: IParams = {
      offset: 0,
      limit: 6,
      order: `${direction}_${key}`,
    };

    setSearchParams({...params});
    setCurrentPage(0)
  };

  return { requestSort, sortConfig };
};
