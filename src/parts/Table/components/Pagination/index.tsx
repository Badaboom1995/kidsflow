import { Footer, Arrow, PaginationButton } from 'parts/Table/styled';
import React from 'react';

type TPagination = {
  pageNumber: number;
  pageSize: number;
  totalEntities: number;
  method: (pageNumber: number) => void;
};

function Pagination({ pagination }: { pagination: TPagination }) {
  const stepsFromCenter = 1;
  const pagesTotal = Math.floor(
    pagination?.totalEntities / pagination?.pageSize
  );
  const currentCenter = pagination?.pageNumber;

  let centerPages = [currentCenter];
  for (let i = 1; i <= stepsFromCenter; i++) {
    centerPages = [currentCenter - i, ...centerPages, currentCenter + i];
  }
  const getPagesButtons = (pages) => {
    return pages.map((pageNumber) => (
      <PaginationButton
        type="button"
        key={pageNumber}
        active={pageNumber === currentCenter}
        onClick={() => pagination?.method(pageNumber)}
      >
        {pageNumber + 1}
      </PaginationButton>
    ));
  };
  return (
    <Footer>
      <Arrow
        onClick={() => {
          pagination?.pageNumber > 0 &&
            pagination.method(pagination?.pageNumber - 1);
        }}
      />
      {currentCenter - stepsFromCenter < 1 && getPagesButtons([0, 1, 2])}
      {currentCenter - stepsFromCenter === 1 && getPagesButtons([0, 1, 2, 3])}
      {currentCenter - stepsFromCenter > 1 && getPagesButtons([0])}

      <span>...</span>
      {currentCenter - stepsFromCenter > 1 &&
        currentCenter + stepsFromCenter < pagesTotal - 1 &&
        getPagesButtons(centerPages)}
      <span>...</span>
      {currentCenter + stepsFromCenter === pagesTotal - 1 &&
        getPagesButtons([...centerPages, pagesTotal])}
      {currentCenter + stepsFromCenter > pagesTotal - 1 &&
        getPagesButtons([pagesTotal - 2, pagesTotal - 1, pagesTotal])}
      {currentCenter + stepsFromCenter < pagesTotal - 1 &&
        getPagesButtons([pagesTotal])}

      <Arrow
        right
        onClick={() => {
          currentCenter < pagesTotal &&
            pagination.method(pagination?.pageNumber + 1);
        }}
      />
    </Footer>
  );
}
export default Pagination;
