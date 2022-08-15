// import './App.css';

// import Home from './Home';
// import Main from './Main';
// import Aside from './Aside';
// import Footer from './Footer';
// import WelcomeCc from './WelcomeCc';

// import Contactus from './day10/Contactus'
// function App() {
//   return (<div className="app">
//   <Footer />
//   </div>);
// }
  // export default App;
//     {/* <Home /><br></br>
//     <Main /><br></br>
//     <Aside /><br></br>
//     <Footer /> */}
//     {/* <WelcomeCc name="World of Software" /> */}
//     <Contactus />
// //   </div>    
//   );
// }
// export default App;

// import './App.css';
// import List from './List';
// function App(){
//   return(<div className="app">
//     <List />
//   </div>);
// }
// export default App;

// import './App.css';
// import Conditionalrender from './Conditionalrender';
// function App(){
//   return(<div className="app">
//     <Conditionalrender />
//   </div>);
// }
// export default App;


// import './App.css';
// import Contactus from './Contactus';
// function App(){
//   return(<div className="app">
//     <Contactus />
//   </div>);
// }
// export default App;

// import './App.css';
// import CreateAccount from './CreateAccount';
// function App(){
//   return(<div className="app">
//     <CreateAccount />
//   </div>);
// }
// export default App;

// import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
// import './App.css';
// import Home from './Home';
// import Category from './Category';
// import Product from './Product';
// import Order from './Order';
// import Aboutus from './Aboutus';
// import Contactus from './Contactus';
// import Pagenotfound from './Pagenotfound';
// import User from './User';
// function App(){
//   return(<BrowserRouter>
//     <div className="app">
//       Day 15 class = React router
//       <ul>
//         <li>
//           <NavLink to="/" activeClassName="active">Home</NavLink>
//         </li>
//         <li>
//           <Link to="category">Category</Link>
//         </li>
//         <li>
//           <Link to="product">Product</Link>
//         </li>
//         <li>
//           <Link to="order">Order</Link>
//         </li>
//         <li>
//           <Link to="aboutus">Aboutus</Link>
//         </li>
//       </ul>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/category" element={<Category/>}/>
//         <Route path="/product" element={<Product/>}/>
//         <Route path="/order" element={<Order/>}/>
//         <Route path="/aboutus" element={<Aboutus/>}/>
//            <Route path="/contactus" element={<Contactus/>}/>
//         <Route path="*" element={<Pagenotfound/>}/>
//         <Route path="user/:id" element={<User/>}/>
//       </Routes>
//     </div>
//   </BrowserRouter>
//   );
// }
// export default App;

// import './App.css';
// import OrderPage from './OrderPage';
// // import Todo from './Todo';
// function App(){
//   return(<div className="app">
//   {/* Day17 class-redux saga */}
//     {/* <Todo/> */}
//     <OrderPage/>
//       </div>);
// }
// export default App;


// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import './App.css';
// import OrderPage from './OrderPage';
// import CheckOut from './CheckOut';
// import ProductPage from './ProductPage';
// function App(){
//   return(<BrowserRouter>
//   <div className="app">
//   <ul>
        // <li>
        // <Link to="orderpage">OrderPage</Link>
        // </li>
        // <li>
        //  <Link to="checkout">CheckOut</Link>
        // </li>
        // <li>
        // <Link to="productpage">ProductPage</Link>
        // </li>
//   </ul>
  // <Routes>
  // <Route path="/OrderPage" element={<OrderPage/>}/>
  // <Route path="/CheckOut" element={<CheckOut/>}/>
  // <Route path="/ProductPage" element={<ProductPage/>}/>
  // </Routes>
//   <OrderPage/>
//    <CheckOut/>
//    <ProductPage/>
//    </div>
//    </BrowserRouter>
//   );
// }
// export default App;

// import AddQuantity from './AddQuantity';
// import AddToCart from './AddToCart';
import './App.css';
//  import Todo from '../backup/day20/Todo';
import Product from './Product';
import OrderPage from '../../src/OrderPage';
 function App(){
    return(<div className="app">
     <Product/>
     {/* <OrderPage/> */}
     {/* <AddQuantity/> */}
     {/* <AddToCart/> */}
   </div>);
 }
 export default App; 