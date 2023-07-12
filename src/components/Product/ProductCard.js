import StarRatings from "../Stars/StarRatings";
import "./ProductCard.css";

export default function Product({ product, rating }) {
  return (
    <div className="card border-0">
      <div className="card-body">
        <a href="">
          <img
            src={product.image}
            style={{ width: "280px", height: "260px", margin: "0 0 10px 0" }}
            className="productImage"
          />
        </a>
        <a href="">
          <h5 className="card-title">
            <big>{product.name}</big>
          </h5>
        </a>
        <p className="card-subtitle mb-2">{product.price}</p>
        <p className="card-text">{product.description}</p>
        <h6 className="product-card-p">{product.category}</h6>
        <StarRatings rate={rating} />
      </div>
    </div>
  );
}
