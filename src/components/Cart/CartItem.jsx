import { useNavigate } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCart,
} from "../../store/cartSlice";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import { setProduct } from "../../store/actionSlice";

const CartItem = ({ item, quantity, arrayIndex, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(arrayIndex));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(arrayIndex));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeItemFromCart(arrayIndex));
  };

  const checkIfDisabled = () => {
    return quantity > 1 ? false : true;
  };

  const handleNavigate = () => {
    dispatch(setProduct(item));
    handleClose();
    navigate(`/shop/product/${item.name}`);
  };

  const calculateItemTotalPrice = () => {
    return "$"+parseFloat(item.price*quantity).toFixed(2);
  }

  return (
    <>
      <div className="cart-item-container">
        <div>
          <img
            className="cart-item-image"
            src={item.faceImage}
            alt="cart-item-product-image"
          ></img>
        </div>
        <div className="cart-item-product-name-div" onClick={handleNavigate}>
          <p className="cart-item-product-name">{item.name}</p>
        </div>
        <div className="cart-item-price">
          <p>{calculateItemTotalPrice()}</p>
        </div>
        <div className="cart-quantity-container">
          <div className="cart-button-div">
            <button
              disabled={checkIfDisabled()}
              className="cart-quantity-button-subtract"
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
          </div>
          <div className="cart-quantity">
            <p>{quantity}</p>
          </div>
          <div className="cart-button-div">
            <button
              className="cart-quantity-button-add"
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          </div>
        </div>
        <div className="cart-button-div">
          <button
            className="cart-remove-item-button"
            onClick={handleRemoveCartItem}
          >
            &#x1F5D9;
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
