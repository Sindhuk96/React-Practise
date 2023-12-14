import {useState} from "react";
import { LOGO_URL,LOGO_URL2 } from "../utils/constants";

const Header = ()=>{

    let [loginBtn,setLoginBtn]=useState("login");

    return (
        <div className="Header">
            <div className="Logo-container">
                <img className="Logo" src={LOGO_URL2} alt="App-Logo"/>
            </div>
            <div className="NavLinks">
                    <ul >
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Account</li>
                        <li>Cart</li>
                        <button className="login-btn"
                            onClick={()=>{loginBtn === "login"?setLoginBtn("logout"):setLoginBtn("login")}}
                        >{loginBtn}</button>               
                    </ul>
            </div>
        </div>
    );
};

export default Header;
