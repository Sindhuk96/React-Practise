import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const Restaurantmenu = () => {

    const [itemsMenu,setItemsMenu]=useState(null);    
    const {resId}=useParams();

    useEffect(()=>{
        fetchMenu();
    },[itemsMenu])

    const fetchMenu = async () => {
        const data=await fetch(RES_MENU_API+ resId);        
        const json=await data.json();        
        setItemsMenu(json);
    }

    if(itemsMenu === null) return <Shimmer />;

    const { name, cuisines,costForTwoMessage,avgRating}=itemsMenu?.data?.cards[0]?.card?.card?.info;   
    const firstLocation = itemsMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const secondLocation = itemsMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const itemCards = firstLocation?.itemCards ?? secondLocation?.itemCards;

    return (
        <div className="Menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h4>{costForTwoMessage}-{avgRating}</h4>            
            <ul>
                {itemCards.map((item) => (
                    <li key={item?.card?.info?.id}> {item?.card?.info?.name}- Rs{item?.card?.info?.price/100 ?? item?.card?.info?.defaultPrice/100}</li>
                ))
                }
           </ul>
        </div>        
    );
};

export default Restaurantmenu;