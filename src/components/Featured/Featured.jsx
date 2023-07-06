import React from 'react'
import PaginationStepper from '../PaginationStepper/PaginationStepper';
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured">
      <a className="image-one" href="#"><img src="images/living_room.jpg" /></a>
      <a className="image-two" href="#"><img src="images/ShowerCurtainPLP.jpeg" /></a>
      <a className="image-three" href="#"><img src="images/bath_towel.jpeg" /></a>
      <a className="image-four" href="#"><img src="images/bed1.jpeg" /></a>
      <a className="image-five" href="#"><img src="images/bed2.jpeg" /></a>
    </div>
  )
}

export default Featured;
