import React from "react";
import "./Hero.css";

const HeroImageGrid = () => {
   return(
    <div className="hero">
      <div className="text">
      <div className="container-left">
        <h2>20% off at the Summer Sale</h2>  
        </div>
      <div className="container-right">
        <p>Shop all your favorites for less at our annual Summer Sale,
sitewide and in stores.</p>

        <button className="button button-white">Shop 20% Off</button>
        </div>
      </div>
      
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
    
        {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner">
          <div className="item active">
            <img src="https://imgur.com/D1ouCU1.jpeg" alt="Outdoor" />
          </div>
    
          <div className="item">
            <img src="https://imgur.com/tN1h4ou.jpeg" alt="Living" />
          </div>
        
          <div className="item">
            <img src="https://imgur.com/FhEh9GT.jpeg" alt="Bedroom" />
          </div>
        </div>
    
        {/* <!-- Left and right controls --> */}
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
)};


export default HeroImageGrid;