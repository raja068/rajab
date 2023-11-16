import React, { useContext, useState } from "react";
import './Navbar.css'
import logo from "../Assets/moto bike logo.svg"
import cart_icon from "../Assets/cart.svg"
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar=() => {
    const [menu,setMenu]=useState("home");
    const{getTotalCartItems}=useContext(ShopContext)
    return (
        <div className="navbar ">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>MOTO BIKES</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration :'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("bikes")}}><Link style={{ textDecoration :'none'}} to='/bikes'>Bikes</Link>{menu==="bikes"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("scooters")}}><Link style={{ textDecoration :'none'}} to='/scooters'>Scooters</Link>{menu==="scooters"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("electric zone")}}><Link style={{ textDecoration :'none'}} to='/electric zone'>Electric Zone</Link>{menu==="electric zone"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>

        </div>
    ) 
}
export default Navbar