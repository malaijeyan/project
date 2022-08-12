// import { render } from "@testing-library/react";
import { useState } from "react";
import useDisable from "./useDisable";
const Addquantity = ()=>{
    const [Quantity,setQuantity] = useState(0);
    const addQty=()=>{
        setQuantity(Quantity+1);
    };
    const subQty=()=>{
        setQuantity(Quantity-1);
    };
    const disableMinus = useDisable(Quantity);
return(
    <div className="app">
        {/* <h1>Add Quantity</h1> */}
        <label>Quantity</label>
        <input type="text" value={Quantity}></input>
        <button onClick={addQty}>+</button>
        <button onClick={subQty} disabled={disableMinus}>-</button>
    </div>
);
};
export default Addquantity;