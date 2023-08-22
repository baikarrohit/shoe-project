import { useState } from "react";
import InputContext from "./input-context";

const InputProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems((prevItems) => [...prevItems, item]);
    
  };

  const inputContext = {
    items: items,
    addItem: addItemHandler,
  };
  return (
    <InputContext.Provider value={inputContext}>
      {props.children}
    </InputContext.Provider>
  );
};

export default InputProvider;
