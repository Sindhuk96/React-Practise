import {useState} from "react";

const Header = ()=>{

    let [loginBtn,setLoginBtn]=useState("login");

    return (
        <div className="Header">
            <div className="Logo-container">
                <img className="Logo" alt="App-Logo" src="http://127.0.0.1:8080/src/utils/assets/petBarlo_Logo.png"/>
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
