// 4. Create a React application using functional components and React Router DOM. 
// Requirements 
// 1.Create routes for:  
// o Home  
// o Shop  
// o Contact  
// o 404 NoPage  
// 2. Implement navigation using Link.  
// 3. Display:  
// o Home page on Home route  
// o Shop page on Shop route  
// o Contact Detail on Contact route  
// o 404 Page not Found for invalid URL 
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";
import Home from './Home'
import Shop from './Shop'
import Contact from './Contact'
import Nopage from './Nopage'
function My1(){
    return(
        <div>
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Shop" element={<Shop/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/*" element={<Nopage/>}/>
                </Routes>
            </Router>
        </div>
    );
}
export default My1