import StarRatings from '../Stars/StarRatings';
import './ProductCard.css';

export default function Product({ product }) {
  return (
    <div className='ProductCard'>
      <img
        src={product.faceImage}
        style={{ width: '100%', height: '405px', margin: '0 0 10px 0' }}
        className='productImage'
      />
      <p className='product-card-p'>{product.name}</p>
      <p className='product-card-p'>{product.price}</p>
      <p className='product-card-p'>{product.category}</p>
      <StarRatings
        rate={product.avgReviewRate}
        reviews={product.totalReviews}
      />
    </div>
  );
}
