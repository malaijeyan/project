import {useEffect, useState} from "react";

const Order=()=>{
    const [name, setName] = useState(""); 
    const [tasks, setTasks] = useState([]);
    function readTask() {
        fetch("http://localhost:4000/pros")
        .then((response) => response.json())
        .then((data) =>setTasks(data.filter((product)=>product.product.includes(name))));
         
    };
    // useEffect(()=>{console.log("Use Effect Is Called")},[]);
    // useEffect(()=>{console.log(name)},[name]);
    // useEffect(()=>{console.log(tasks)},[tasks]);
    useEffect(()=>{readTask(tasks)},[name]);
    console.log(tasks);
    
    
    return(<div>
        <h2>LIST OF PRODUCTS</h2>
        
        <input type="text" value={ name } onChange={(e)=>setName(e.target.value)}></input>
        {/* <button onClick={()=>{readTask()}}>Read</button> */}
        <h2>{name}</h2>
        <ul>{tasks.map((product)=>(<li key={product.id}>{product.product}</li>))}</ul>
        </div>);
}
export default Order;