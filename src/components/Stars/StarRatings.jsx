
import ReactStars from 'react-stars';
import './StarRatings.css';

const StarRatings = ({numStars=5, rate}) =>{
  //  const numStars = 5;

    return (
        <div className='star-rating' data-testid='starRatingId'>
        <ReactStars  count={numStars} value={rate} size={24} edit={false}  />
        </div>
    )
}

export default StarRatings;