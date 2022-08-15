// import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    id:"",
    name:"",
    price:"",
};
const productSlice = createSlice(
    {
    name ="productpage",
    initialState,
    reducers:{
        setName:(state,action)=>{
            console.log(action.payload);
            state.name=action.payload;
            console.log(state.name);
        },
    //     setNewTask:(state,action)=>{
    //         console.log(action.payload);
    //         state.newTask=action.payload;
    //         console.log(state.newTask);
    //     },
    //     setUpdatedTask:(state,action)=>{
    //         state.tasks=state.tasks.map((task)=>{
    //             if(task.id === action.payload.id){
    //                 task.task = action.payload.task;
    //             }
    //             return task;
    //         });
    //     },
    //     setDeleteId:(state,action)=>{
    //         state.delId=action.payload.delId;
    //     },
    //     readTodoTask(state,action){
    //         console.log(state.tasks);
    //         console.log(action.payload)
    //         state.tasks=action.payload:
    //         console.log("tasks:",state.tasks);
    //         state.errorMessage="";
    //     },
    //     createTodoTask(state,action){
    //         state.tasks=[...state.tasks,action.payload];
    //         state.newTask="";
    //         state.errorMessage="";
    //     },
    //     updateTodoTask(state,action){
    //         state.errorMessage="";
    //     },
    //     deleteTodoTask(state,action){
    //         state.tasks=state.tasks.filter((task)=>(task.id!==state.delId));
    //         state.errorMessage="";
    //     },
    //     setErrorMessage(state,action){
    //         state.errorMessage=action.payload.errorMessage;
    //     },
    // },
}
);
export const {readTodoTask, createTodoTask, updateTodoTask, deleteTodoTask, setErrorMessage, setNewTask, setUpdatedTask, setDeleteId}=todoSlice.actions;
export default todoSlice.reducer;