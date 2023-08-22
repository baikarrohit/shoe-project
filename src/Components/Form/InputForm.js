import { useContext, useRef } from "react";
import InputContext from "../../Store/input-context";

const InputForm = () => {
  const nameInputRef = useRef("");
  const descInputRef = useRef("");
  const priceInputRef = useRef("");
  const LInputRef = useRef("");
  const MInputRef = useRef("");
  const SInputRef = useRef("");
  const inputCtx = useContext(InputContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredL = LInputRef.current.value;
    const enteredM = MInputRef.current.value;
    const enteredS = SInputRef.current.value;

    const candyObj = {
      name: enteredName,
      desc: enteredDesc,
      price: enteredPrice,
      l: enteredL,
      m: enteredM,
      s: enteredS 
    };
    
    inputCtx.addItem(candyObj);
    
    nameInputRef.current.value = "";
    descInputRef.current.value = "";
    priceInputRef.current.value = "";
    LInputRef.current.value = "";
    MInputRef.current.value = "";
    SInputRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>ShoeName:</label>
          <input type="text" ref={nameInputRef} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" ref={descInputRef} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" ref={priceInputRef} />
        </div>
        <div>
          Quantity Available:
        </div>
        <div>
          <label>L</label>
          <input type="number" ref={LInputRef} />
        </div>
        <div>
          <label>M</label>
          <input type="number" ref={MInputRef} />
        </div>
        <div>
          <label>S</label>
          <input type="number" ref={SInputRef} />
        </div>
        <div>
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
