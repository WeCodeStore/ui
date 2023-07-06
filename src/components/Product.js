import StarRatings from "../components/Stars/StarRatings";

export default function Product({ product, rating }) {
  return (
    <div>
      <img
        src={product.image}
        style={{ width: "250px", height: "250px" }}
        className="productImage"
      />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <StarRatings rate={rating} />
    </div>
  );
}
