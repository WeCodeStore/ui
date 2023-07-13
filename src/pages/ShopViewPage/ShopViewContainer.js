// import IProduct from "../../classes/IProduct";
import PaginationStepper from "../../components/PaginationStepper/PaginationStepper";
import Product from "../../components/Product/ProductCard";
import "./ShopViewContainer.css";
import { useEffect, useState } from "react";
import { useGetProductsByCategoryPaginatedQuery } from "../../store/apiSlice";
import { useSelector } from "react-redux";

const ShopViewContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const categoryId = useSelector((state) => state.actions.category);

  const pageNumber = currentPage - 1;

  const { data: allProductsPage, isSuccess: success } =
    useGetProductsByCategoryPaginatedQuery({
      categoryId,
      pageNumber,
    });

  let productList;
  let pages;
  if (success) {
    productList = allProductsPage.products;
    pages = Math.floor(allProductsPage.totalElements / 9) + 1;
  } else {
    productList = [];
  }

  useEffect(() => {
    setTotalPages(pages);
  }, [pages]);

  const pageSelectedHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container-shopView">
        {productList.map((val, k) => {
          return (
            <div key={k} className="shopViewPage-product">
              <Product product={val} />
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
