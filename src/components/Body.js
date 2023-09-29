import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockdata";

const Body=()=>{

   let [listOfRestaurants,setlistOfRestaurants]=useState(resList);    

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-button" 
                onClick={()=>{

                        const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.avgRating>4)
                        setlistOfRestaurants(filteredRestaurants);
                        console.log(listOfRestaurants);
                        console.log(filteredRestaurants);
                        }}>
                    Top Rated Restaurants</button>
            </div>
            <div className="rest-list">
                {
                    listOfRestaurants.map((restaurant)=>(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))                   
                }
            </div>
        </div>
    );
                
};

export default Body;