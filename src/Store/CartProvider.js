import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCart = (item) => {
    const existingItemIdx = items.findIndex(
        (cartItem) => cartItem.name === item.name && cartItem.size === item.size
    )
    if(existingItemIdx !== -1){
        const updatedItems = [...items];
        updatedItems[existingItemIdx].quantity += 1;
        setItems(updatedItems);
    }else{
        setItems((prevItem) => [...prevItem, {...item, quantity:1}]);
    }
    
  };
 
  const cartcontext = {
    items: items,
    addItem: addItemToCart,
  };
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
