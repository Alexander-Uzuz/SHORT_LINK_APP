import { FC, memo } from "react";
import classnames from "classnames";
import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.scss";
import "./IssuePagination.css";

type Props = {
  forcePage: number;
  pageCount: number;
  onChange: (page: { selected: number }) => void;
};

const PaginateInner: FC<Props> = (props) => {
  const { forcePage, pageCount, onChange } = props;

  return (
    <div className={classnames("issuesPagination", styles.pagination)}>
      <ReactPaginate
        forcePage={forcePage}
        pageCount={pageCount}
        onPageChange={onChange}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        nextLabel="&rarr;"
        previousLabel="&larr;"
      />
    </div>
  );
};

export const Paginate = memo(PaginateInner)

