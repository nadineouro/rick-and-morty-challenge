import React from "react";
import ReactPaginate from "react-paginate";

import previous from "../../assets/icons/previous.svg";
import next from "../../assets/icons/next.svg";

import * as S from "./styles";

type Props = {
  currentPage: number;
  totalPages: number;
  onChange: (selected: number) => void;
};

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onChange }) => {
  return (
    <S.Pagination data-testid="pagination">
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={4}
        marginPagesDisplayed={0}
        initialPage={currentPage - 1}
        onPageChange={({ selected }) => onChange(selected)}
        onPageActive={() => {}}
        disableInitialCallback
        previousLabel={<img src={previous} alt="página anterior" />}
        nextLabel={<img src={next} alt="próxima página" />}
        activeClassName="active"
        disabledClassName="disabled"
        breakLabel=""
        data-testid="test"
      />
    </S.Pagination>
  );
};

export default Pagination;
