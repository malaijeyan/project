import { useState } from "react";
import useDisable from "./useDisable";
const AddToCart = ()=>{
    const [Cart,setCart] = useState(0);
    const addCrt=()=>{
        setCart(Cart+1);
    };
    const subCrt=()=>{
        setCart(Cart-1);
    };
    const disableMinus = useDisable(Cart);
return(
    <div className="app">
        {/* <h1>Add Quantity</h1> */}
        <label>Add to Cart</label>
        <input type="text" value={Cart}></input>
        <button onClick={addCrt}>+</button>
        <button onClick={subCrt} disabled={disableMinus}>-</button>
    </div>
);
};
export default AddToCart;