import { IParams } from "./../../../api/links/interface/IParams";
import { useAppDispatch, useAppSelector } from "./../../../core/redux/hooks";
import { useMemo, useState, useEffect } from "react";
import { ILink } from "../interface/ILink";
import { fetchGetLinks } from "../linksThunk";
import { ISortConfig, IKey, IDirection } from "../interface/ISortConfig";

export const useSortableData = (
  orderQuery: string | null,
  setSearchParams: any,
  config: ISortConfig = { key: "short", direction: "asc" }
) => {
  const [sortConfig, setSortConfig] = useState<ISortConfig>(config);
  const token = useAppSelector((state) => state.user.user.token);
  const dispatch = useAppDispatch();

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
    const _token = token ? token : "";
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

    setSearchParams(params);

    dispatch(
      fetchGetLinks({
        params,
        token: _token,
      })
    );
  };

  return { requestSort, sortConfig };
};
