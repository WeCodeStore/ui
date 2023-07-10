// import IProduct from "../../classes/IProduct";
import PaginationStepper from "../../components/PaginationStepper/PaginationStepper";
import Product from "../../components/Product/ProductCard";
import "./ShopViewContainer.css";
import { useEffect, useState } from "react";

import { useGetAllProductsPaginatedQuery } from "../../store/apiSlice";

const ShopViewContainer = () => {
  const rating = 4.5;

  const [currentPage, setCurrentPage] = useState(1);

  const { data: allProductsPage } = useGetAllProductsPaginatedQuery(
    currentPage - 1
  );

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(allProductsPage.totalPages);
  }, [totalPages]);

  const productList = allProductsPage.products;

  const pageSelectedHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {}, [currentPage, totalPages]);

  return (
    <>
      <div className="container-shopView">
        {productList.map((val, k) => {
          return (
            <div key={k} className="shopViewPage-product">
              <Product product={val} rating={rating} />
            </div>
          );
        })}
      </div>
      <PaginationStepper
        totalPages={totalPages}
        currentPage={currentPage}
        pageSelectedHandler={pageSelectedHandler}
      />
    </>
  );
};

export default ShopViewContainer;
