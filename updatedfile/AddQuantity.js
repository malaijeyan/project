import { useState } from "react";
import useDisable from "./useDisable";
const AddQuantity = ()=>{
    const [Quantity,setQuantity] = useState(0);
    const addQty=()=>{
        setQuantity(Quantity+1);
    };
    const subQty=()=>{
        setQuantity(Quantity-1);
    };
    const disableMinus = useDisable(Quantity);
    // const Price=()=>{
    //     Math
    //     
    // }
return(
    <div className="app">
        {/* <h1>Add Quantity</h1> */}
        <label>Quantity</label>
        <input type="text" value={Quantity}></input>
        <button onClick={addQty}>+</button>
        <button onClick={subQty} disabled={disableMinus}>-</button><br></br>
        <label>Price</label><input type="text"></input>
    </div>
);
};
export default AddQuantity;