import StarRatings from "../components/Stars/StarRatings";

export default function Product({ product, rating }) {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.image}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <StarRatings rate={rating} />
    </div>
  );
}
