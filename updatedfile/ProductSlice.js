import {createSlice} from "@reduxjs/toolkit";
const initialState={
    tasks:[],
    errorMessage:"",
    newTask:"",
    delId:0,
};
const ProductSlice = createSlice({
    name:"pro",
    initialState,
    reducers:{
        setNewTask:(state,action)=>{
            console.log(action.payload);
            state.newTask=action.payload;
            console.log(state.newTask);
        },
        setUpdatedTask:(state,action)=>{
            state.tasks=state.tasks.map((name)=>{
                if(name.id===action.payload.id){
                    name.name=action.payload.name;
                }
            });
        },
        setDeleteId:(state,action)=>{
            state.delId=action.payload.delId
        },
        readTask(state,action){
            console.log(state.tasks);
            console.log(action.payload);
            state.tasks=[...state.tasks,action.payload];
            console.log(state.tasks);
            state.errorMessage="";
        },
        createTask(state,action){
            state.tasks=[...state.tasks,action.payload];
            state.newTask="";
            state.errorMessage="";
        },
        updateTask(state,action){
            state.errorMessage="";
        },
        deleteTask(state,action){
            state.tasks=state.tasks.filter((name)=>(name.id!==state.delId));
            state.errorMessage="";
        },
        setErrorMessage(state,action){
            state.errorMessage=action.payload.errorMessgae;
        },
    },
}
);
export const {readTask, createTask, updateTask, setErrorMessage, setNewTask, setUpdatedTask} = ProductSlice.actions;
export const {deleteTask}=ProductSlice.actions;
export default ProductSlice.reducer;