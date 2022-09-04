import { useState, FC, useEffect, useCallback, memo } from "react";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { Notification } from "common/components/Notification/Notification";
import { useSearchParams } from "react-router-dom";
import { Paginate } from "../Paginate/Paginate";
import { fetchGetLinks } from "modules/links/linksThunk";
import { useSortableData } from "modules/links/hooks/useSortableData";
import { PAGE_SIZE } from "api/baseUrl";
import { IKey } from "modules/links/interface/ISortConfig";
import ArrowUpSort from "assets/icons/arrowUpSort.svg";
import ArrowDownSort from "assets/icons/arrowDownSort.svg";
import { ISortConfig } from "modules/links/interface/ISortConfig";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Copy from "assets/icons/copy.svg";
import styles from "./Table.module.scss";
import { Spinner } from "common/components/Spinner/Spinner";
type Props = {};

const TableInner: FC<Props> = (props) => {
  const { links, loading, size } = useAppSelector((state) => state.links);
  const { token } = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const orderQuery: any = searchParams.get("order");
  const offsetQuery = searchParams.get("offset");
  const limitQuery = searchParams.get("limit");
  const [visualNotification, setVisualNotification] = useState(false); //костыль
  const [currentPage, setCurrentPage] = useState(getCurrentPage);
  const _token = token ? token : "";

  const { requestSort, sortConfig } = useSortableData(
    orderQuery,
    setSearchParams,
  );

  function getCurrentPage(){
    if (limitQuery && offsetQuery) {
      let page = 0;
      let offset = Number(offsetQuery);

      while (offset > Number(limitQuery)) {
        offset = offset - Number(limitQuery);
        page += 1;
      }

      return page;
    }

    return 0;
  };

  const getKeyFor = (key: IKey) =>
    sortConfig.key == key && sortConfig.direction === "asc"
      ? ArrowUpSort
      : ArrowDownSort;
  const handleCopy = () => {
    setVisualNotification(true);
    setTimeout(() => {
      setVisualNotification(false);
    }, 6000);
  };

  const handlePageChange = (page: { selected: number }) => {
    let offset;
    if (page.selected > 0) {
      offset = page.selected * Number(limitQuery) + 1;
    } else {
      offset = 0;
    }
    console.log(offset,'offset')
    const params: any = {
      offset,
      limit: Number(limitQuery),
      order: orderQuery ? orderQuery : "asc_short",
    };
    setSearchParams(params);   
  }


  useEffect(() => {
    if (size) {
      dispatch(
        fetchGetLinks({
          params: {
            offset: Number(offsetQuery),
            limit:Number(limitQuery),
            order: orderQuery ? orderQuery : "asc_short",
          },
          token: _token,
        })
      );
    }
  }, [searchParams]);

  return (
    <>
      {visualNotification && (
        <Notification text="Ссылка успешно скопирована" status="success" />
      )}
      {!loading ? (
        <>
          <table className={styles.table}>
            <caption className={styles.caption}>Мои ссылки</caption>
            <thead>
              <tr className={styles.thead_tr}>
                <th
                  onClick={() => requestSort("short")}
                  className={styles.th}
                  scope="col"
                >
                  Короткая ссылка
                  <img
                    className={styles.arrow_icon}
                    src={getKeyFor("short")}
                    alt="ArrowDown"
                  />
                </th>
                <th
                  onClick={() => requestSort("target")}
                  className={styles.th}
                  scope="col"
                >
                  Исходная ссылка
                  <img
                    className={styles.arrow_icon}
                    src={getKeyFor("target")}
                    alt="ArrowDown"
                  />
                </th>
                <th
                  onClick={() => requestSort("counter")}
                  className={styles.th}
                  scope="col"
                >
                  Переходы
                  <img
                    className={styles.arrow_icon}
                    src={getKeyFor("counter")}
                    alt="ArrowDown"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {links.length &&
                links.map((link) => {
                  return (
                    <tr key={link.id} className={styles.tr}>
                      <td className={styles.td}>
                        <a href={link.short} target="_blank">
                          {link.short}
                        </a>
                      </td>
                      <td className={styles.td}>
                        {link.target.slice(0, 24)}...
                      </td>
                      <td className={styles.td}>{link.counter}</td>
                      <td className={styles.td}>
                        <CopyToClipboard text={link.short}>
                          <div className={styles.copy} onClick={handleCopy}>
                            <img src={Copy} alt="Copy" />
                          </div>
                        </CopyToClipboard>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <Paginate
            initialPage={currentPage}
            pageCount={Math.ceil(size / 6)}
            onChange={handlePageChange}
          />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export const Table = memo(TableInner);
