import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import resList from "../utils/mockdata";
import { RES_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body=()=>{

   let [listOfRestaurants,setlistOfRestaurants]=useState([]); 
   
   useEffect(()=>{
        fetchData();
   },[]);

   const fetchData=async ()=>{
        const data=await fetch(RES_API_URL);
        console.log(data);
        const json= await data.json();    
        setlistOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }

    return listOfRestaurants.length === 0?
        (<Shimmer />):                             
        (<div className="body">
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
                        <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
                    ))                   
                }
            </div>
        </div>
    );
                
};

export default Body;