import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import LoginSignup from "../../Pages/LoginSignup";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({search, setSearch}) => {

    const [menu, setMenu] = useState("home");
    const [showLogin, setShowLogin] = useState(false);
    const {getTotalCartItems} = useContext(ShopContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openProfile,setOpenProfile] = useState(false);

    return (
        <>
        <div className="navbar">

            <div className="nav-logo">
                <img src={logo} alt="" height="50px"/>
                <p>SmartShop</p>
            </div>

            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <div className="nav-searchbar">
                <input 
                    type="text" 
                    placeholder="Search Products...." 
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button onClick={()=>console.log(search)}>
                    <FaSearch/>
                </button>
            </div>

             <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                 <div className="close-btn" onClick={()=>setMenuOpen(false)}>
                    ✖
                </div>

                <li onClick={()=>{ setMenu("home"); setMenuOpen(false);}}>
                    <Link style={{textDecoration:"none", color:"#626262"}} to="/">Home</Link>
                    {menu==="home"?<hr/>:null}
                </li>

                 <li onClick={()=>{ setMenu("mens"); setMenuOpen(false);}}>
                    <Link style={{textDecoration:"none", color:"#626262"}} to="/mens">Men</Link>
                    {menu==="mens"?<hr/>:null}
                </li>

                 <li onClick={()=>{ setMenu("womens"); setMenuOpen(false);}}>
                    <Link style={{textDecoration:"none", color:"#626262"}} to="/womens">Women</Link>
                    {menu==="womens"?<hr/>:null}
                </li>

                 <li onClick={()=>{ setMenu("kids"); setMenuOpen(false);}}>
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

                    <div className="nav-cart-count">
                        {getTotalCartItems()}
                    </div>
                </div>

                {/* PROFILE ICON */}
                <div 
                    className="profile-icon" 
                    onClick={()=>setOpenProfile(true)}
                >
                    <FontAwesomeIcon 
                        icon={faUserCircle} 
                        style={{color:"#ff4141", fontSize:"30px"}}
                    />
                </div>

            </div>

            {/* PROFILE SIDEBAR */}
            {openProfile && (
                <div className="profile-sidebar">

                    <div className="sidebar-header">
                        <h3>My Account</h3>
                        <span onClick={()=>setOpenProfile(false)}>✖</span>
                    </div>

                    <div className="sidebar-menu">
                        <p>My Profile</p>
                          <p><Link to="/orders">My Orders</Link></p>

                        <p>Track Orders</p>
                        <p>Wishlist</p>
                        <p>Coupons</p>
                        <p>Update Profile</p>
                        <p>Logout</p>
                    </div>

                </div>
            )}

        </div>

        {showLogin && (
            <LoginSignup close={()=>setShowLogin(false)} />
        )}

        </>
    )
}

export default Navbar;