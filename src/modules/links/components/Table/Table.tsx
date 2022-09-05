import { useState, FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { useSearchParams } from "react-router-dom";
import { Paginate } from "../Paginate/Paginate";
import { fetchGetLinks } from "modules/links/linksThunk";
import { useSortableData } from "modules/links/hooks/useSortableData";
import styles from "./Table.module.scss";
import { Notification } from "common/components/Notification/Notification";
import { Spinner } from "common/components/Spinner/Spinner";
import { LinkComponent } from "../LinkComponent/LinkComponent";
import { THead } from "../THead/THead";
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
  const [notificationActive, setNotificationActive] = useState(false);
  const _token = token ? token : "";
  const { requestSort, sortConfig } = useSortableData(
    orderQuery,
    setSearchParams,
    setCurrentPage
  );

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
  };

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
          {notificationActive && (
            <Notification
              text="Ссылка успешно скопирована в буфер обмена"
              status="success"
            />
          )}
          <table className={styles.table}>
            <caption className={styles.caption}>Мои ссылки</caption>
            <THead sortConfig={sortConfig} requestSort={requestSort} />
            <tbody>
              {links.length &&
                links.map((link) => (
                  <LinkComponent
                    key={link.id}
                    link={link}
                  />
                ))}
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
