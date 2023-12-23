import {useState} from "react";
import { LOGO_URL,LOGO_URL2 } from "../utils/constants";
import logo from "../utils/assets/petBarloLogo.png"
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Header = ()=>{

    let [loginBtn,setLoginBtn]=useState("login");
    const onlineStatus=useOnlinestatus();

    return (
        <div className="Header">
            <div className="Logo-container">
                <img className="Logo" src={logo} alt="App-Logo"/>
            </div>
            <div className="NavLinks">
                    <ul >
                        <li>Online status:{onlineStatus?"Online":"Offline"}</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/account">Account</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <button className="login-btn"
                            onClick={()=>{loginBtn === "login"?setLoginBtn("logout"):setLoginBtn("login")}}
                        >{loginBtn}</button>               
                    </ul>
            </div>
        </div>
    );
};

export default Header;


