import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Account from "./components/Account.js";
import Cart from "./components/Cart.js";
import Restaurantmenu from "./components/Restaurantmenu.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error.js";

const AppLayout= () => {
    return (
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/account",
                element:<Account />
            },
            {
                path:"/cart",
                element:<Cart />
            },
            {
                path:"/restaurants/:resId",
                element:<Restaurantmenu />
            }           
        ],
        errorElement:<Error />
    }   
]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);