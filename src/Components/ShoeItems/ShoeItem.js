import { useContext } from "react";
import InputContext from "../../Store/input-context";
import CartContext from "../../Store/cart-context";

const ShoeItem = () => {
  const inputCtx = useContext(InputContext);
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (shoe, size) => {
    const newItem = {
      name: shoe.name,
      size: size,
      price: shoe.price,
    };

    cartCtx.addItem(newItem); 
  };
  return (
    <div>
      {inputCtx.items.map((shoe) => (
        <li>
          <strong>{shoe.name}</strong> - {shoe.desc} - {shoe.price}Rs.
          <button
            type="button"
            onClick={() => addToCartHandler(shoe, "L")}
          >{`Large ${shoe.l}`}</button>
          <button
            type="button"
            onClick={() => addToCartHandler(shoe, "M")}
          >{`Medium ${shoe.m}`}</button>
          <button
            type="button"
            onClick={() => addToCartHandler(shoe, "S")}
          >{`Small ${shoe.s}`}</button>
        </li>
      ))}
    </div>
  );
};

export default ShoeItem;
