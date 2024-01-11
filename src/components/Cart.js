import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../utils/cartSlice";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items)

    const dispatch=useDispatch();
    const clear=()=>{
        dispatch(clearCart());
    }

    return (
        <div className="cart text-center w-6/12 m-auto">
            <h1 className="mt-4 mb-2 p-2 font-bold text-2xl">Cart Details</h1>
            <button className="mt-1 mb-4 p-2  text-white bg-orange-400" onClick={clear}>Clear Cart</button>
            <ItemList items={cartItems}/>
        </div>
    );
};

export default Cart;