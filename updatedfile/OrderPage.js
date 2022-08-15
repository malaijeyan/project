import {useEffect, useState} from "react";

const Order=()=>{
    const [name, setName] = useState(); 
    const [tasks, setTasks] = useState([]);
    function readTask() {
        console.log(tasks)
        fetch("http://localhost:4000/lists")
        .then((response) => response.json())
        .then((data) =>setTasks(data.filter((name)=>name.name.includes(name))));
         
    };
    // useEffect(()=>{console.log("Use Effect Is Called")},[]);
    // useEffect(()=>{console.log(name)},[name]);
    // useEffect(()=>{console.log(tasks)},[tasks]);
    useEffect(()=>{readTask(tasks)},[name]);
    console.log(tasks);
       
    return(<div className="app">
        <h2>ORDER PAGE</h2>
        <h3>LIST OF PRODUCTS</h3>
              
        <input type="text" value={ name } onChange={(e)=>setName(e.target.value)}></input>
        {/* <button onClick={()=>{readTask()}}>Read</button> */}
        <h3>{name}</h3>
        <ul>{tasks.map((name)=>(<li key={name.id}>{name.name}</li>))} 
        
        </ul>
        <button>Add to cart</button><br></br>
        </div>
        );
    };    
export default Order;

