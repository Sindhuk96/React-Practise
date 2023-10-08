import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import resList from "../utils/mockdata";
import { RES_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body=()=>{

   let [listOfRestaurants,setlistOfRestaurants]=useState([]); 
   let [filteredRestaurants,setFilteredRestaurants]=useState([]); 
   let [searchText,setSearchText]=useState("");  
   
   useEffect(()=>{
        fetchData();
   },[]);

   const fetchData=async ()=>{
        const data=await fetch(RES_API_URL);
        console.log(data);
        const json= await data.json();    
        setlistOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }

    return listOfRestaurants.length === 0?
        (<Shimmer />):                             
        (<div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
                    <button className="search-button"
                    onClick={()=>{
                      
                        const filteredRestaurants=listOfRestaurants.filter((Restaurant)=>Restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurants);                                  
                        }
                    }
                    >Search</button>
                </div>
                <button className="filter-button" 
                onClick={()=>{

                        const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.avgRating>4)
                        setFilteredRestaurants(filteredRestaurants);
                        }}>
                    Top Rated Restaurants</button>
            </div>
            <div className="rest-list">
                {
                    filteredRestaurants.map((restaurant)=>(
                        <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
                    ))}
                
            </div>
        </div>
    );
                
};

export default Body;