import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

const Pagination = ({ onCangePage }) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        onPageChange={(event) => onCangePage(event.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={4}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
