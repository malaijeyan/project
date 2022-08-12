import { useDispatch,useSelector } from "react-redux";
import {setPrice, setUpdatedProduct, setDeleteId} from "./productSlice"
// import "./Todo.css";
const Product =() => {
    const {price,errorMessage,curProduct,Product} = useSelector((store)=>store.product);
    const dispatch = useDispatch();
    return (
        <div className="app">
            <h1>list of products</h1>
            {/* <h2>CRUD using ReactSaga</h2>   */}
            <div className="product"></div>
                <input
                 type="text"
                value={price}
                onChange={(e) => {
                    dispatch(setPrice(e.target.value));
                }}
                ></input>
                <button onClick={() => {
                const newId = Math.max(...Product.map((product) => product.id));
                dispatch(
                    {type: "CREATE_PRODUCT_SAGA",
                    postData:
                    {
                        id: Number(newId) + 1,
                        product:price,
                    }
                });
                }}>create</button>
                {/* <button onClick={() => dispatch({type:"READ_TODO_TASK_SAGA"})}>Read</button> */}
                <h2>{errorMessage && errorMessage}</h2>
                <ul>
                    {Product.map(
                        (curProduct) => (
                        <li key={curProduct.id}>
                            <input type="text"
                            value={curProduct.product}
                            onChange={(e)=>{
                                dispatch(setUpdatedProduct({id: curProduct.id,product:e.target.value}));
                            }}></input>
                            <button
                            onClick={()=>{
                                dispatch(
                                    {
                                    type:"UPDATE_PRODUCT_SAGA",
                                    putData:{
                                        id:curProduct.id,
                                        product: curProduct.product,
                                    }
                                });
                            }} >
                            Update
                            </button>
                            <button onClick={()=>{
                    dispatch(setDeleteId({delId: curProduct.id}));
                    dispatch({ type:"DELETE_PRODUCT_SAGA",
                    delData: {
                        id:curProduct.id}})
                            }}>
                            Delete
                            </button>
                    </li>
                    ))};
                    </ul>
                    </div>
                );
                }
export default Product;



