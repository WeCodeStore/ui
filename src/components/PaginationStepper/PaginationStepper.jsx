import { useState } from "react";
import "./PaginationStepper.css";
import Pagination from "react-bootstrap/Pagination";

const PaginationStepper = ({
  totalPages,
  currentPage,
  pageSelectedHandler,
  alwaysShown = false,
}) => {
  const [active, setActive] = useState(currentPage);
  const isPaginationShown = alwaysShown ? true : totalPages > 1;
  const isCurrentPageFirst = currentPage === 1;
  const isCurrentPageLast = currentPage === totalPages;

  const selectPageHandler = (number) => {
    setActive(number);
    pageSelectedHandler(number);
  };

  const handleSwitchToFirstPage = () => {
    selectPageHandler(1);
  };

  const handleSwitchToLastPage = () => {
    selectPageHandler(totalPages);
  };

  const handlePrevious = () => {
    if (active > 0) {
      setActive(active - 1);
      pageSelectedHandler(active - 1);
    }
  };

  const handleNext = () => {
    if (active < totalPages - 1) {
      setActive(active + 1);
      pageSelectedHandler(active + 1);
    }
  };

  let isPageNumberOutOfRange;

  const pageNumbers = [...new Array(totalPages)].map((_, index) => {
    const pageNumber = index + 1;
    const isPageNumberFirst = pageNumber === 1;
    const isPageNumberLast = pageNumber === totalPages;
    const isCurrentPageWithinTwoPageNumbers =
      Math.abs(pageNumber - currentPage) <= 1;

    if (
      isPageNumberFirst ||
      isPageNumberLast ||
      isCurrentPageWithinTwoPageNumbers
    ) {
      isPageNumberOutOfRange = false;
      return (
        <Pagination.Item
          key={pageNumber}
          onClick={() => selectPageHandler(pageNumber)}
          active={pageNumber === currentPage}
        >
          {pageNumber}
        </Pagination.Item>
      );
    }

    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      return <Pagination.Ellipsis key={pageNumber} className="muted" />;
    }
    return null;
  });

  return (
    <>
      {isPaginationShown && (
        <div className="paginationStepperDiv">
          <Pagination>
            <Pagination.First onClick={handleSwitchToFirstPage} />
            <Pagination.Prev
              onClick={handlePrevious}
              disabled={isCurrentPageFirst}
            />
            {pageNumbers}
            <Pagination.Next
              onClick={handleNext}
              disabled={isCurrentPageLast}
            />
            <Pagination.Last onClick={handleSwitchToLastPage} />
          </Pagination>
        </div>
      )}
    </>
  );
};

export default PaginationStepper;
