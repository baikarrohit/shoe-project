import { useState } from "react";
import InputForm from "./Components/Form/InputForm";
import ShoeItem from "./Components/ShoeItems/ShoeItem";
import CartProvider from "./Store/CartProvider";
import InputProvider from "./Store/InputProvider";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <InputProvider>
      <CartProvider>
        {cartIsShown && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <InputForm />
          <ShoeItem />
        </main>
      </CartProvider>
    </InputProvider>
  );
}

export default App;
