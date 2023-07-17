// import IProduct from "../../classes/IProduct";
import PaginationStepper from "../../components/PaginationStepper/PaginationStepper";
import Product from "../../components/Product/ProductCard";
import "./ShopViewContainer.css";
import { useEffect, useState } from "react";
import { useGetProductsByCategoryPaginatedQuery } from "../../store/apiSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProduct } from "../../store/actionSlice";

const ShopViewContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const categoryId = useSelector((state) => state.actions.category);

  const dispatch = useDispatch();

  const navigate = useNavigate();

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

  const handleNavigate = (val) => {
    console.log("Function: ", val);
    dispatch(setProduct(val));
    navigate("/shop/product");
  };

  return (
    <>
      <div className="container-shopView">
        {productList.map((val, k) => {
          return (
            <div
              key={k}
              className="shopViewPage-product"
              onClick={() => {
                handleNavigate(val);
              }}
            >
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
