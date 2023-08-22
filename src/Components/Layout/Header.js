import { Fragment } from "react";

const Header = (props) => {
    return (
        <Fragment>
            <h1>Shoe App</h1>
            <button onClick={props.onShowCart}>Your Cart {0}</button>
        </Fragment>
    )
}

export default Header;