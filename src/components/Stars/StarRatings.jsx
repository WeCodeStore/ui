import ReactStars from 'react-stars';
import './StarRatings.css';

const StarRatings = (props) => {
  const { numStars = 5, rate, reviews } = props;

  return (
    <div className='star-rating' data-testid='starRatingId'>
      <ReactStars count={numStars} value={rate} size={24} edit={false} />
      <span className='star-rating-span'>{reviews ? `(${reviews})` : ''}</span>
    </div>
  );
};

export default StarRatings;
