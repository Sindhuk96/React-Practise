import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
//import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Cart from "./components/Cart.js";
import Restaurantmenu from "./components/Restaurantmenu.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error.js";
//import Groceries from "./components/Groceries.js";

const About=lazy(()=>import("./components/About.js"));
const Groceries=lazy(()=>import("./components/Groceries.js"));

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
                element:<Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/cart",
                element:<Cart />
            },
            {
                path:"/groceries",
                element:<Suspense fallback={<h1>Loading....</h1>}><Groceries /></Suspense>
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