import IProduct from "../../classes/IProduct";
import Product from "../../components/Product";
import "./ShopViewContainer.css";

const ShopViewContainer = () => {
  const rating = 4.5;
  const productList = [
    new IProduct(
      1,
      "chair",
      10.5,
      2,
      "sdfsdf",
      "image1.url",
      "this is a chair",
      "furniture"
    ),
    new IProduct(
      2,
      "chair",
      10.5,
      2,
      "sdfsdf",
      "image1.url",
      "this is a chair",
      "furniture"
    ),
    new IProduct(
      3,
      "chair",
      10.5,
      2,
      "sdfsdf",
      "image1.url",
      "this is a chair",
      "furniture"
    ),
    new IProduct(
      4,
      "chair",
      10.5,
      2,
      "sdfsdf",
      "image1.url",
      "this is a chair",
      "furniture"
    ),
    new IProduct(
      5,
      "chair",
      10.5,
      2,
      "sdfsdf",
      "image1.url",
      "this is a chair",
      "furniture"
    ),
    new IProduct(
      6,
      "chair",
      10.5,
      2,
      "sdfsdf",
      "image1.url",
      "this is a chair",
      "furniture"
    ),
    new IProduct(
      7,
      "chair",
      10.5,
      2,
      "sdfsdf",
      "image1.url",
      "this is a chair",
      "furniture"
    ),
    new IProduct(
      8,
      "chair",
      10.5,
      2,
      "sdfsdf",
      "image1.url",
      "this is a chair",
      "furniture"
    ),
    new IProduct(
      9,
      "chair",
      10.5,
      2,
      "sdfsdf",
      "image1.url",
      "this is a chair",
      "furniture"
    ),
  ];

  return (
    <div className="container-shopView">
      {productList.map((val, k) => {
        return (
          <div className="shopViewPage-product">
            <a href="#" key={k}>
              <Product product={val} rating={rating} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ShopViewContainer;
