import React, { useState } from 'react';
import StarRatings from '../../components/Stars/StarRatings';
import { useSelector } from 'react-redux';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './ProductPage.css';

export default function ProductPage() {
  const product = useSelector((state) => state.actions.product);
  const [reviews, setReviews] = useState([]);
  const [currentImage, setCurrentImage] = useState(product.images[0]);
  const [showReviews, setShowReviews] = useState(false);
  console.log('My product: ', product);

  const getReviews = async () => {
    const data = await fetch(
      `http://localhost:8080/store/reviews/product/${product.productId}`
    ).then((res) => res.json());
    setReviews(data);
    setShowReviews(!showReviews);
    console.log(reviews);
  };

  const selectImage = (e) => {
    if (e.target.src !== currentImage) {
      setCurrentImage(e.target.src);
    }
  };

  const goToReviews = () => {
    if (!showReviews) {
      getReviews();
    }
  };

  return (
    <div className='ProductPage'>
      <div className='product-container'>
        <div className='product-container--image-selector'>
          {product.images.map((image, idx) => (
            <img
              key={idx}
              className='selected'
              src={image}
              onClick={(e) => selectImage(e)}
              alt=''
            />
          ))}
        </div>
        <div className='product-container--image'>
          <img src={currentImage} alt='Graphite Sheets' />
        </div>
        <div className='product-container--info'>
          <h2 className='product-container--name'>{product.name}</h2>
          <Link
            activeClass='active'
            to='reviews-section'
            spy={true}
            smooth={true}
            duration={100}
            onClick={goToReviews}
          >
            <StarRatings
              rate={product.avgReviewRate}
              reviews={product.totalReviews}
            />
          </Link>
          <p className='product-container--price'>{`$${product.price.toFixed(
            2
          )}`}</p>
          <p className='product-container--description'>
            {product.description}
          </p>
          <button className='button button-blue'>Add to Cart</button>
          <div className='product-details'>
            <div className='product-details--menu'>
              <h6>Details</h6>
              <h6>Care</h6>
              <h6>Returns</h6>
              <h6>FAQ</h6>
            </div>
            <div className='product-details--description'>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <ul className='product-details--list'>
                <li>100% long-staple cotton</li>
                <li>480 thread count</li>
                <li>
                  Rated Best Overall Sheets to Buy in 2022 by Good Housekeeping
                </li>
                <li>OEKO-TEX® certified for chemical safety</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='reviews-section' name='reviews-section'>
        <h3>
          Reviews{' '}
          <FaChevronRight
            className={showReviews ? 'chev rotated' : 'chev'}
            onClick={getReviews}
          />
        </h3>
        <div className={showReviews ? 'reviews-container' : 'hide'}>
          {reviews.map((review, idx) => (
            <div className='review-row'>
              <p className='user'>{review.userId} User</p>
              <p className='comment'>{review.comment}</p>
              <StarRatings rate={review.rating} />
            </div>
          ))}
        </div>
        <p></p>
      </div>
    </div>
  );
}
