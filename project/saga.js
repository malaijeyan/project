import {takeEvery,call,put} from "redux-saga/effects";
import axios from "axios";
// import { readTodoTask, createTodoTask, updateTodoTask, deleteTodoTask, setErrorMessage } from "./todoSlice";
import {createPro, updatePro, deletePro, setErrorMessage } from "./productSlice";


const url= "http://localhost:4000/pros";

let callAPI = async({url,method,data})=>{
    return await axios({url,method,data,});
}

export function* createProSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:url, method:"POST",data:action.postData}));
        console.log(data);
        yield put(createPro(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));
    }
}
// export function* readTodoTaskSaga(action){
//     try{
//         let {data} = yield call(()=>callAPI({url:url}));
//         console.log(data);
//         yield put(readTodoTask(data));
//     }
//     catch(e){
//         yield put(setErrorMessage(e.message));
//     }
// }
export function* updateProSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:`${url}/${action.putData.id}`,method:"PUT",data:action.putData}));
        console.log(data);
        yield put(updatePro(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));
    }
}
export function* deleteProSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:`${url}/${action.delData.id}`,method:"DELETE"}));
        console.log(data);
        yield put(deletePro(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));
    }
}
export default function* rootSaga(){
    yield takeEvery("CREATE_PRODUCT_SAGA",createProSaga);
    // yield takeEvery("READ_TODO_TASK_SAGA",readTodoTaskSaga);
    yield takeEvery("UPDATE_PRODUCT_SAGA",updateProSaga);
    yield takeEvery("DELETE_PRODUCT_SAGA",deleteProSaga);
}