import StarRatings from "../Stars/StarRatings";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useEffect, useRef, useState } from "react";

export default function Product({ product }) {
  const nav = useNavigate();

  const handle = () => {
    nav("/shop/product/:prodId");
  };

  //Calculate the number of lines in the title element (product.name) and update the state variable (isTitleMultiLine)
  //based on whether the title takes up more than one line. Use isTitleMultiLine to conditionally add a class to the
  //product card to add custom styling if the title is only one line
  const titleRef = useRef(null);
  const [isTitleMultiLine, setIsTitleMultiLine] = useState(false);

  useEffect(() => {
    //get a reference to the title element using the useRef hook
    const titleElement = titleRef.current;
    //get the height of the title element
    const titleHeight = titleElement.getBoundingClientRect().height;
    //get the line height of the title element
    const lineHeight = parseInt(
      window.getComputedStyle(titleElement).lineHeight
    );

    // Calculate the number of lines by dividing the height of the title by the line height
    const numLines = Math.round(titleHeight / lineHeight);

    // If the title takes more than one lineHeight, setIsTitleMultiLine will be false
    setIsTitleMultiLine(numLines > 1);
  }, [product.name]);

  return (
    <Card
      style={{ border: "0px" }}
      className={`product-card ${isTitleMultiLine ? "" : "multi-line"}`}
    >
      <img
        src={product.faceImage}
        style={{ width: "280px", height: "260px", margin: "0 0 10px 0" }}
        className="productImage"
        onClick={handle}
        alt="product"
      />
      <Card.Title
        style={{ fontSize: "16px" }}
        ref={titleRef}
        className="product-card-p title"
      >
        {product.name}
      </Card.Title>
      <Card.Text className="fw-bold product-card-p">${product.price}</Card.Text>
      <Card.Text className="product-card-p description">
        {product.description}
      </Card.Text>
      <Card.Subtitle className="product-card-p">
        {product.category}
      </Card.Subtitle>
      <StarRatings
        rate={product.avgReviewRate}
        reviews={product.totalReviews}
      />
    </Card>
  );
}
