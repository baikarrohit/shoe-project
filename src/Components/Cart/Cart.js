import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const combinedItems = cartCtx.items.reduce((acc, item) => {
    const existingItem = acc.find((accItem) => accItem.name === item.name);

    if (existingItem) {
      const existingSize = existingItem.sizes.find(
        (sizeItem) => sizeItem.size === item.size
      );

      if (existingSize) {
        existingSize.quantity += item.quantity;
      } else {
        existingItem.sizes.push({ size: item.size, quantity: item.quantity });
      }
    } else {
      acc.push({
        name: item.name,
        sizes: [{ size: item.size, quantity: item.quantity }],
        price: item.price,
      });
    }

    return acc;
  }, []);

  const cartItems = (
    <ul>
      {combinedItems.map((item) => (
        <li>
          <div>
            <h2>{item.name}</h2>
            {item.sizes.map((sizeItem) => (
              <span>
                {sizeItem.size} - {sizeItem.quantity}
              </span>
            ))}
            Price: {item.sizes.reduce(
              (price, sizeItem) => price + sizeItem.quantity * item.price,
              0
            )}
          </div>
        </li>
      ))}
    </ul>
  );

  const totalAmount = cartCtx.items.reduce(
    (total, item) => total + item.price * item.quantity,
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
