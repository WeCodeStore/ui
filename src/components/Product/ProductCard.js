import StarRatings from "../Stars/StarRatings";
import "./ProductCard.css";

export default function Product({ product, rating }) {
  return (
    <div>
      <a href="">
        <img
          src={product.image}
          style={{ width: "280px", height: "260px", margin: "0 0 10px 0" }}
          className="productImage"
        />
      </a>
      <a href="">
        <p className="product-card-p">{product.name}</p>
      </a>
      <p className="product-card-p">{product.price}</p>
      <p className="product-card-p">{product.description}</p>
      <p className="product-card-p">{product.category}</p>
      <StarRatings rate={rating} />
    </div>
  );
}
