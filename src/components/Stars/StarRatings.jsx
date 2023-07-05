
import ReactStars from 'react-stars';
import './StarRatings.css';

const StarRatings = ({rate}) =>{
    return (
        <div className='star-rating' data-testid='starRatingId'>
        <ReactStars  count={5} value={rate} size={24} edit={false}  />
        </div>
    )
}

export default StarRatings;