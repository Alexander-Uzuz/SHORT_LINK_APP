import { FC } from "react";
import classnames from 'classnames'
import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.scss";
import './IssuePagination.css';

type Props = {
  initialPage: number;
  pageCount: number;
  onChange: (page: {selected:number}) => void;
};

export const Paginate: FC<Props> = (props) => {
  const { initialPage, pageCount, onChange } = props;

  return (
    <div className={classnames('issuesPagination', styles.pagination)}>
      <ReactPaginate
        initialPage={initialPage}
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
