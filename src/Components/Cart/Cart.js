import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li>
          <div>
            <h2>{item.name}</h2>
            <span>{item.size}</span>
            <span>{item.price * item.quantity}</span>
            <span>{item.quantity}</span>
          </div>
        </li>
      ))}
    </ul>
  );

  const totalAmount = cartCtx.items.reduce(
    (total,item) => total + item.price * item.quantity,
    0
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}Rs.</span>
      </div>
      <div>
        <button>Cancel</button>
        <button>Place Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
