import "./CartComponent.css";
import { Offcanvas } from "react-bootstrap";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartComponent = ({ visible, closeCart }) => {
  const cartList = useSelector((state) => state.cart.list);
  const quantityList = useSelector((state)=> state.cart.quantity);

  const calculateSubtotalQuantity = () => {
    let sum = 0;
    quantityList.forEach(element => {
      sum += element;
    });  
    return sum;
  }

  const calculateSubtotalPrice = () => {
    let sum = 0;
    let subtotal = 0;
    cartList.forEach(element => {
      const index = cartList.indexOf(element);
      subtotal = element.price*quantityList[index]
      sum += subtotal;
    });  
    return parseFloat(sum).toFixed(2);
  }

  const checkIfDisabled = () => {
    return cartList.size > 1 ? false : true;
  }

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
              return <CartItem key={k} item={val} quantity={quantityList[k]} arrayIndex={k} handleClose={closeCart}/>;
            })}
            <div className="cart-total-price-div">
             <p>Subtotal&#40;{calculateSubtotalQuantity()} Items&#41;:${calculateSubtotalPrice()}</p>
            </div>
            <div className="cart-checkout-div">
              <button onClick={closeCart}>Continue Shopping</button>
              <button disabled={checkIfDisabled()} onClick={()=>{}}>Checkout</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartComponent;
