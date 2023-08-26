import { Fragment, useContext } from "react";
import CartContext from "../../Store/cart-context";

const Header = (props) => {
    const cartCtx = useContext(CartContext);
    let q = 0;
    cartCtx.items.forEach((item) => {
        q+= Number(item.quantity)
    })
    return (
        <Fragment>
            <h1>Shoe App</h1>
            <button onClick={props.onShowCart}>Your Cart {q}</button>
        </Fragment>
    )
}

export default Header;