import "../styles/Header.css";
import FoodLogo from "../assets/Food-Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <nav className="header">
            <a href="/">
                <img className="logo" src={FoodLogo}alt="logo" width="100" height="100"/>
            </a>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
            <div>
            {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>LogOut</button> : <button onClick={()=>setIsLoggedIn(true)}>LogIn</button>}
            </div>
        </nav>
    )
};
export default Header;