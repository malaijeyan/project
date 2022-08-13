import {useDispatch,useSelector} from "react-redux";
import { setNewTask,setUpdatedTask } from "./ProductSlice";
// import { setNewTask,setUpdatedTask,setDeleteId } from "./ProductSlice";
const Product=()=>{
    const{tasks,newTask,errorMesage}=useSelector((store)=>store.Product);
    const dispatch = useDispatch();
    return(
        <div className="app">
            <h1>LIST OF PRODUCTS</h1>
            <h2>CRUD USING REACT SAGA</h2>
            <div className="collection">
                <input type="text" value={newTask} onChange={(e)=>{dispatch(setNewTask(e.target.value));}}></input>
                <button
                onClick={()=>{const newId=Math.max(...tasks.map((productname)=>productname.id));
                dispatch({type:"CREATE_SAGA",
                postData:{id:Number(newId)+1,
                productname:newTask,}
                });
                }}
                >
                CREATE
                </button>
                <button onClick={()=>dispatch({type:"READ_SAGA"})}>READ</button>
                <h2>{errorMesage && errorMesage}</h2>
            </div>
            <ul>
                {tasks.map((curTask)=>(<li key={curTask.id}>
                    <input type="text" value={curTask.productname} onChange={(e)=>{
                        dispatch(setUpdatedTask({id: curTask.id,productname:e.target.value}));
                        }}></input>
                        <button 
                        onClick={()=>{
                            dispatch({
                                type:"UPDATE_SAGA",
                                putData:{
                                    id:curTask.id,
                                    productname:curTask.productname,}
                            });
                        }}>UPDATE</button>
                         {/* <button onClick={()=>{dispatch(setDeleteId({delId:curTask.id}));
                            dispatch({type:"DELETE_SAGA",delData:{id:curTask.id}});
                        }}>DELETE</button>  */}
                </li>
                ))}
            </ul>
        </div>
    )
}
export default Product;