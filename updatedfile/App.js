import './App.css';
// import Product from './Product';
// import Home from './Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import OrderPage from './OrderPage';
// import AddQuantity from './AddQuantity';
function App(){
    return(
        <BrowserRouter>
        <div className="app">
        <ul>
        <li>
        <Link to="orderpage">OrderPage</Link>
        </li> 
        {/* <li>
        <Link to="Home">hme</Link>
        </li> */}
        
        
        {/* <li>
         <Link to="checkout">CheckOut</Link>
        </li>
        <li>
        <Link to="productpage">ProductPage</Link>
        </li> */}
        </ul>
        <Routes>
  <Route path="/OrderPage" element={<OrderPage/>}/>
  {/* <Route path="/Home" element={<Home/>}/> */}
  {/* <Route path="/AddQuantity" element={<AddQuantity/>}/> */}
  {/* <Route path="/CheckOut" element={<CheckOut/>}/>
  <Route path="/ProductPage" element={<ProductPage/>}/> */}
  </Routes>
           
            {/* <Product/> */}

            <OrderPage/>
            {/* <AddQuantity/> */}
            {/* <Home/> */}
        </div>
         </BrowserRouter>
    );
}
export default App;