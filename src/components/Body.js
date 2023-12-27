import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import resList from "../utils/mockdata";
import { RES_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Body=()=>{

   let [listOfRestaurants,setlistOfRestaurants]=useState([]); 
   let [filteredRestaurants,setFilteredRestaurants]=useState([]); 
   let [searchText,setSearchText]=useState("");  
   const onlineStatus=useOnlinestatus();
   
   useEffect(()=>{
        fetchData();
   },[]);

   const fetchData=async ()=>{
        const data=await fetch(RES_API_URL);
        console.log(data);
        const json= await data.json();    
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }

   if(onlineStatus === false) return <h1>Seems like you are offline!! please check your internet connection</h1>
   
    return listOfRestaurants?.length === 0?
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
                        <Link key={restaurant?.info?.id} to={"/restaurants/"+ restaurant?.info?.id}><RestaurantCard  resData={restaurant}/></Link>
                    ))}
            </div>
        </div>
    );
                
};

export default Body;