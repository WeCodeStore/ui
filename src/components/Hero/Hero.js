import React from "react";
import "./Hero.css";

const HeroImageGrid = () => {
   return(
    <div class="container-hero">
      <div>
      <h2>Large text</h2>  
      <h3>
        Small text
      </h3>
      <button>click here</button>
      </div>
      
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
    
        {/* <!-- Wrapper for slides --> */}
        <div class="carousel-inner">
          <div class="item active">
            <img src="https://imgur.com/D1ouCU1.jpeg" alt="Outdoor" />
          </div>
    
          <div class="item">
            <img src="https://imgur.com/tN1h4ou.jpeg" alt="Living" />
          </div>
        
          <div class="item">
            <img src="https://imgur.com/FhEh9GT.jpeg" alt="Bedroom" />
          </div>
        </div>
    
        {/* <!-- Left and right controls --> */}
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
)};


export default HeroImageGrid;