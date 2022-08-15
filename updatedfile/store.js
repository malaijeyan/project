import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "@redux-saga/core";
import productReducer from "./ProductSlice";
import saga from "./store";
let sagaMiddleWare=createSagaMiddleWare();
export const store=configureStore({
    reducer:{
        product:productReducer
    },
    middleWare:(getDefaultMiddleWare)=>getDefaultMiddleWare({thunk:false}).concat(sagaMiddleWare),
});
sagaMiddleWare.run(saga);
export default store;