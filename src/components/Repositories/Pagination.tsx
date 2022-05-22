import { FC, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {
  IRepositoriesPaginationProps,
  IRepository,
} from 'types/paralect-ss-22-test-task';
import RepositoriesPage from 'components/Repositories/Page';
import { ReactComponent as Prev } from 'assets/icons/arr-left.svg';
import { ReactComponent as Next } from 'assets/icons/arr-right.svg';

const RepositoriesPagination: FC<IRepositoriesPaginationProps> = (props) => {
  const { repositories } = props;
  const itemsPerPage = 4;

  const [currentItems, setCurrentItems] = useState<IRepository[]>();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    if (repositories)
      setCurrentItems(repositories.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(repositories.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, repositories]);

  const handlePageClick = ({ selected }: { selected: number }): void => {
    const newOffset: number = (selected * itemsPerPage) % repositories.length;

    setItemOffset(newOffset);
  };

  return (
    <div className="repositories__container">
      <RepositoriesPage repositories={currentItems ?? []} />
      <div className="repositories__pagination-wrapper _secondary">
        <span className="repositories__pagination-info">{`${itemOffset + 1}-${
          itemOffset + (currentItems?.length ?? 0)
        } of ${repositories.length} item${
          repositories.length === 1 ? '' : 's'
        }`}</span>
        <ReactPaginate
          onPageChange={handlePageClick}
          renderOnZeroPageCount={undefined}
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          previousLabel={<Prev />}
          nextLabel={<Next />}
          breakLabel="…"
          containerClassName="repositories__pagination pagination"
          activeClassName="pagination__page_active"
          activeLinkClassName="pagination__page-link_active _prominent"
          disabledClassName="pagination__item_disabled"
          previousClassName="pagination__item pagination__icon pagination__previous"
          nextClassName="pagination__item pagination__icon pagination__next"
          pageClassName="pagination__item pagination__page"
          breakClassName="pagination__item pagination__break"
          previousLinkClassName="pagination__link pagination__previous-link _interactive"
          nextLinkClassName="pagination__link pagination__next-link _interactive"
          pageLinkClassName="pagination__link pagination__page-link _secondary"
          breakLinkClassName="pagination__link pagination__break-link _secondary"
        />
      </div>
    </div>
  );
};

export default RepositoriesPagination;
