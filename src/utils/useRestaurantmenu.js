import { RES_MENU_API } from "./constants";
import { useEffect,useState } from "react";

const useRestaurantmenu = (resId)=>{

    const [itemsMenu,setItemsMenu]=useState(null);  

    useEffect(()=>{
        fetchMenu(); 
        console.log("useEffect of useRestaurantmenu called");
    },[])

    const fetchMenu = async () => {
        const data=await fetch(RES_MENU_API+ resId);        
        const json=await data.json();        
        setItemsMenu(json);
    }

    return itemsMenu;
}

export default useRestaurantmenu;