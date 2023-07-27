import "./CartComponent.css";
import { Offcanvas } from "react-bootstrap";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartComponent = ({ visible, closeCart }) => {
  const cartList = useSelector((state) => state.cart.list);

  console.log("LIST: ", cartList);

  return (
    <div>
      <Offcanvas show={visible} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <div className="canvas-cart-header-title">
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas-content">
            {cartList.map((val, k) => {
              return <CartItem key={k} item={val} />;
            })}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartComponent;
