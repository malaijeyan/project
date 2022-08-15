import { takeEvery,call,put } from "redux-saga/effects";
import axios from "axios";
const url="http://localhost:4000/todotask";
let callAPI =async({url,method,data})=>{
    return await axios({url,method,data});
}
export function* createTodoTaskSaga(){}
export function* readTodoTaskSaga(){}
export function* updateTodoTaskSaga(){}
export function* deleteTodoTaskSaga(){}
export default function* rootSaga(){
    yield takeEvery("CREATE_TODO_TASK_SAGA",createTodoTaskSaga);
    yield takeEvery("READ_TODO_TASK_SAGA",readTodoTaskSaga);
    yield takeEvery("UPDATE_TODO_TASK_SAGA",updateTodoTaskSaga);
    yield takeEvery("DELETE_TODO_TASK_SAGA",deleteTodoTaskSaga);
}
