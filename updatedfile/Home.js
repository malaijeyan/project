import { Link } from "react-router-dom";
const Home = ()=>{
    return(<div className="home">
    <ul>
    <li>
        <Link to="orderpage">OrderPage</Link>
        </li>
    </ul></div>);
}
export default Home;