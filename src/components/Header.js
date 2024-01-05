import {useContext, useState} from "react";
import { LOGO_URL,LOGO_URL2 } from "../utils/constants";
import logo from "../utils/assets/petBarloLogo.png"
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";

const Header = ()=>{

    let [loginBtn,setLoginBtn]=useState("login");
    const onlineStatus=useOnlinestatus();
    const {loggedinuser}=useContext(UserContext);
    console.log(loggedinuser);

    return (
        <div className=" Header flex justify-between m-2 bg-blue-100 shadow-sm">
            <div className="Logo-container">
                <img className="Logo w-40 h-[6rem]" src={logo} alt="App-Logo"/>
            </div>
            <div className="NavLinks flex">
                    <ul className="flex items-center">
                        <li className="m-2">Online status: {onlineStatus?<span className="text-green-600">Online</span>:<span className="text-red-600">Offline</span>}</li>
                        <li className="m-2"><Link to="/">Home</Link></li>
                        <li className="m-2"><Link to="/groceries">Groceries</Link></li>
                        <li className="m-2"><Link to="/about">About</Link></li>
                        <li className="m-2"><Link to="/contact">Contact</Link></li>                        
                        <li className="m-2"><Link to="/cart">Cart</Link></li>
                        <button className="login-btn m-2"
                            onClick={()=>{loginBtn === "login"?setLoginBtn("logout"):setLoginBtn("login")}}
                        >{loginBtn}</button>
                        <li className="login-btn ml-2 mr-10">{loggedinuser}</li>               
                    </ul>
            </div>
        </div> 
    );
};

export default Header;


