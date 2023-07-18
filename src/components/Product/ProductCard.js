import StarRatings from "../Stars/StarRatings";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function Product({ product }) {
  const nav = useNavigate();

  const handle = () => {
    nav("/shop/product/:prodId");
  };

  return (
    <Card style={{ border: "0px" }}>
      <img
        src={product.faceImage}
        style={{ width: "280px", height: "260px", margin: "0 0 10px 0" }}
        className="productImage"
        onClick={handle}
        alt="product"
      />
      <Card.Title style={{ fontSize: "16px" }} className="product-card-p">
        {product.name}
      </Card.Title>
      <Card.Text className="fw-bold">${product.price}</Card.Text>
      <Card.Text className="product-card-p">{product.description}</Card.Text>
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
