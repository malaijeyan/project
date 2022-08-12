import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name:"",
    price:"",
    delId:0
};

const productSlice = createSlice(
    {
        name:"product",
        initialState,
        reducers:{
            // setNewTask: (state,action)=>{
            //     // state.amount=action.payload
            //     console.log(action.payload);
            //     state.newTask=action.payload;
            //     console.log(state.newTask);
            // },
            setPrice: (state,action)=>{
                // state.amount=action.payload
                console.log(action.payload);
                state.price=action.payload;
                console.log(state.price);
            },
            setUpdatedProduct: (state,action)=>{
                state.product= state.product.map((product)=>{
                    if(product.id === action.payload.id) {
                        product.product = action.payload.product;
                    }
                    return product;
                });
            },
            // setUpdatedTask: (state,action)=>{
            //     state.tasks= state.tasks.map((task)=>{
            //         if(task.id === action.payload.id) {
            //             task.task = action.payload.task;
            //         }
            //         return task;
            //     });
            // },
            setDeleteId: (state,action) => {
                state.delId = action.payload.delId;
            },
            // deposit: (state,action)=>{
            //     state.deposit=action.payload
            //     state.bankbalance= state.bankbalance+action.payload
            //     console.log(state.bankbalance);
            // },
            // withdraw: (state,action)=>{
            //     state.withdraw=action.payload
            //     state.bankbalance=state.bankbalance-action.payload
            //     console.log(state.bankbalance);
            // },
            // readTodoTask(state,action){
            //     console.log(state.tasks);
            //     console.log(action.payload)
            //     state.tasks=action.payload;
            //     console.log("tasks: ",state.tasks);
            //     state.errorMessage="";
            // },
            createPro(state,action){
                state.product=[...state.product,action.payload];
                state.price = "";
                state.errorMessage="";
            },
            updatePro(state,action){
                state.errorMessage="";
            },
            deletePro(state,action){
                state.product = state.product.filter((product)=>(product.id!==state.delId));
                state.errorMessage="";
            },
            setErrorMessage(state,action){
                state.errorMessage = action.payload.errorMessage;
            },
        },
    }
);

export const {createPro,updatePro,deletePro,setErrorMessage,setPrice,setUpdatedProduct,setDeleteId} = productSlice.actions;
export default productSlice.reducer;

