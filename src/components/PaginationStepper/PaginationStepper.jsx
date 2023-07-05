import { useState } from "react";

import Pagination from "react-bootstrap/Pagination";

const PaginationStepper = ({ numPages, currentPage, pageSelectedHandler }) => {
  const [active, setActive] = useState(currentPage);
  let items = [];

  const selectPageHandler = (number) => {
    setActive(number);
    pageSelectedHandler(number);
  };

  for (let number = 0; number <= numPages - 1; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => selectPageHandler(number)}
        data-testid={`item${number + 1}`}
        className={`${number === active ? "active" : "paginationStepper"}`}
      >
        {number + 1}
      </Pagination.Item>
    );
  }

  const handlePrevious = () => {
    if (active > 0) {
      setActive(active - 1);
      pageSelectedHandler(active - 1);
    }
  };

  const handleNext = () => {
    if (active < numPages - 1) {
      setActive(active + 1);
      pageSelectedHandler(active + 1);
    }
  };

  return (
    <div className="paginationStepperDiv">
      <Pagination>
        <Pagination.Prev
          onClick={handlePrevious}
          data-testid={"previous-button"}
        />
        {items}
        <Pagination.Next onClick={handleNext} data-testid={"next-button"} />
      </Pagination>
    </div>
  );
};

export default PaginationStepper;
