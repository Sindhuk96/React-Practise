import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";

const Restaurantmenu = () => {      
    
    const {resId}=useParams();
    const itemsMenu=useRestaurantmenu(resId);
    //console.log("render called first");  

    if(itemsMenu === null) return <Shimmer />;

    const { name, cuisines,costForTwoMessage,avgRating}=itemsMenu?.data?.cards[0]?.card?.card?.info;   
    const firstLocation = itemsMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const secondLocation = itemsMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const itemCards = firstLocation?.itemCards ?? secondLocation?.itemCards;

    const categories=itemsMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(categories);

    return ( 
            
        <div className="Menu text-center">                      
                <h1 className="font-bold text-2xl my-6">{name}</h1>
                <p className="font-bold mb-4">{cuisines.join(",")} - {costForTwoMessage}-{avgRating}</p>  
                {
                    categories.map((category)=> <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} />)
                }                     
            
        </div>        
    );
};

export default Restaurantmenu;