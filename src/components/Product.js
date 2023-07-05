export default function Product({ product, rating }) {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.image}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <p>{rating}</p>
    </div>
  );
}
