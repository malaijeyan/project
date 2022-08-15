import {takeEvery,call,put} from "redux-saga/effects";
import axios from "axios";
import { readTask, createTask, updateTask, deleteTask, setErrorMessage } from "./ProductSlice";


const url= "http://localhost:4000/lists";

let callAPI = async({url,method,data})=>{
    return await axios({url,method,data,});
}

export function* createTaskSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:url, method:"POST",data:action.postData}));
        console.log(data);
        yield put(createTask(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));
    }
}
export function* readTaskSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:url}));
        console.log(data);
        yield put(readTask(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));
    }
}
export function* updateTaskSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:`${url}/${action.putData.id}`,method:"PUT",data:action.putData}));
        console.log(data);
        yield put(updateTask(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));
    }
}
export function* deleteTaskSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:`${url}/${action.delData.id}`,method:"DELETE"}));
        console.log(data);
        yield put(deleteTask(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));
    }
}
export default function* rootSaga(){
    yield takeEvery("CREATE_TASK_SAGA",createTaskSaga);
    yield takeEvery("READ_TASK_SAGA",readTaskSaga);
    yield takeEvery("UPDATE_TASK_SAGA",updateTaskSaga);
    yield takeEvery("DELETE_TASK_SAGA",deleteTaskSaga);
}