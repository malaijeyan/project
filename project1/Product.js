import {useDispatch,useSelector} from "react-redux";
import {setNewTask, setUpdatedTask, setDeleteId} from "./productSlice";
// import "./Todo.css";
const product = () => {
    const {tasks, errorMessage, newTask} = useSelector((store)=>store.product);
    const dispatch = useDispatch();
    return(
        <div className="app">
            <h1>Todo Tasks</h1>
            <h2>CRUD using Saga</h2>
            <div className="todo"></div>
            <input type="text" value={newTask} onChange={(e)=>{dispatch(setNewTask(e.target.value));}}></input>
            <button onClick={()=>{const newId=Math.max(...tasks.map((task)=>task.id));
                dispatch({type:"CREATE_TODO_TASK_SAGA",postData:{id:Number(newId)+1,task:newTask,}});
            }}>CREATE</button>
            <button onClick={()=>dispatch({type:"READ_TODO_TASK_SAGA"})}>READ</button>
            <h2>errorMessage && errorMessage</h2>
            <ul>
                {tasks.map((curTask)=>(
                    <li key={curTask.id}>
                        <input type="text" value={curTask.task}
                        onChange={(e)=>{
                            dispatch(setUpdatedTask({id: curTask.id,task:e.target.value}));
                        }}></input>
                        <button onClick={()=>{dispatch({type:"UPDATE_TODO_TASK_SAGA",putData:{
                            id:curTask.id,
                            task:curTask.task,
                        }
                        });
                        }}>UPDATE</button>
                        <button onClick={()=>{dispatch(setDeleteId({delId:curTask.id}));
                        dispatch({type:"DELETE_TODO_TASK_SAGA",delData:{id:curTask.id}})
                        }}>DELETE</button>
                    </li>
                ))};
            </ul>
        </div>
    );
}
export default product;