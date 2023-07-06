import ReactStars from "react-stars";
import "./StarRatings.css";

const StarRatings = ({ numStars = 5, rate, reviews = 20 }) => {
  return (
    <div className="star-rating" data-testid="starRatingId">
      <ReactStars count={numStars} value={rate} size={24} edit={false} />
      <span className="star-rating-span">({reviews})</span>
    </div>
  );
};

export default StarRatings;
