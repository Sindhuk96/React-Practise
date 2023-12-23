import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";

const Restaurantmenu = () => {      
    
    const {resId}=useParams();
    const itemsMenu=useRestaurantmenu(resId);
    console.log("render called first");  

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