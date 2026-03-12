import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import LoginSignup from "../../Pages/LoginSignup";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = ({search, setSearch}) => {

    const [menu, setMenu] = useState("home");
    const [showLogin, setShowLogin] = useState(false);
    const {getTotalCartItems} = useContext(ShopContext);

    return (
        <>
        <div className="navbar">

            <div className="nav-logo">
                <img src={logo} alt="" height="50px"/>
                <p>SmartShop</p>
            </div>

            <div className="nav-searchbar">
                <input type="text" placeholder="Search Products...." value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button onClick={()=>console.log(search)}>
                    <FaSearch/>
                </button>
            </div>

            <ul className="nav-menu">
                <li onClick={()=>setMenu("home")}>
                    <Link style={{textDecoration:"none", color:"#626262"}} to="/">Home</Link>
                    {menu==="home"?<hr/>:null}
                </li>

                <li onClick={()=>setMenu("mens")}>
                    <Link style={{textDecoration:"none", color:"#626262"}} to="/mens">Men</Link>
                    {menu==="mens"?<hr/>:null}
                </li>

                <li onClick={()=>setMenu("womens")}>
                    <Link style={{textDecoration:"none", color:"#626262"}} to="/womens">Women</Link>
                    {menu==="womens"?<hr/>:null}
                </li>

                <li onClick={()=>setMenu("kids")}>
                    <Link style={{textDecoration:"none", color:"#626262"}} to="/kids">Kids</Link>
                    {menu==="kids"?<hr/>:null}
                </li>
            </ul>

            <div className="nav-login-cart">
                <button onClick={()=>setShowLogin(true)}>Login</button>

                <div className="cart-icon">
                    <Link to="/cart">
                        <img src={cart_icon} alt="cart" height="40px"/>
                    </Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>

        </div>

        {showLogin && (
            <LoginSignup close={()=>setShowLogin(false)} />
        )}
        </>
    )
}
export default Navbar;