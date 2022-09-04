import { useState, FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { useSearchParams } from "react-router-dom";
import { Paginate } from "../Paginate/Paginate";
import { fetchGetLinks } from "modules/links/linksThunk";
import { useSortableData } from "modules/links/hooks/useSortableData";
import { IKey } from "modules/links/interface/ISortConfig";
import ArrowUpSort from "assets/icons/arrowUpSort.svg";
import ArrowDownSort from "assets/icons/arrowDownSort.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Copy from "assets/icons/copy.svg";
import styles from "./Table.module.scss";
import { Spinner } from "common/components/Spinner/Spinner";
type Props = {};

export const Table: FC<Props> = (props) => {
  const { links, loading, size } = useAppSelector((state) => state.links);
  const { token } = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const orderQuery: any = searchParams.get("order") || "";
  const offsetQuery = searchParams.get("offset") || "";
  const limitQuery = searchParams.get("limit") || "";
  const page = Math.ceil(Number(offsetQuery) / Number(limitQuery));
  const [currentPage, setCurrentPage] = useState(page);
  const _token = token ? token : "";

  const { requestSort, sortConfig } = useSortableData(
    orderQuery,
    setSearchParams,
    setCurrentPage
  );

  const getKeyFor = (key: IKey) =>
    sortConfig.key == key && sortConfig.direction === "asc"
      ? ArrowUpSort
      : ArrowDownSort;

  const handlePageChange = (page: { selected: number }) => {
    let offset;
    if (page.selected > 0) {
      offset = page.selected * 6 + 1;
    } else {
      offset = 0;
    }

    const params: any = {
      offset,
      limit: Number(limitQuery) ? Number(limitQuery) : 6,
      order: orderQuery ? orderQuery : "desc_counter",
    };
    setSearchParams(params);
    setCurrentPage(page.selected);
  }

  useEffect(() => {
    if (size) {
      const offset = Number(offsetQuery);
      const limit = Number(limitQuery);
      dispatch(
        fetchGetLinks({
          params: {
            offset: offset ? offset : 0,
            limit: limit ? limit : 6,
            order: orderQuery ? orderQuery : "desc_counter",
          },
          token: _token,
        })
      );
    }
  }, [size, searchParams]);

  return (
    <>
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
                          <div className={styles.copy}>
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
            forcePage={currentPage}
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
