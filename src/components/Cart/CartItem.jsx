import "./CartItem.css";

const CartItem = (item) => {
  console.log("ITEM: ", item.item)
  return (
    <>
      <div className="cart-item-container">
        <div>
          <img className="cart-item-image" src={item.item.faceImage} alt="cart-item-product-image"></img>
        </div>
        <div className="cart-item-product-name-div">
          <p className="cart-item-product-name">{item.item.name}</p>
        </div>
        <div className="cart-item-price">
          <p>{item.item.price}</p>
        </div>
        <div className="cart-quantity-container">
          <div className="cart-button-div">
            <button className="cart-quantity-button-subtract">-</button>
          </div>
          <div className="cart-quantity">
            <p>1</p>
          </div>
          <div className="cart-button-div">
            <button className="cart-quantity-button-add">+</button>
          </div>
        </div>
        <div className="cart-button-div">
          <button className="cart-remove-item-button">&#x1F5D9;</button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
