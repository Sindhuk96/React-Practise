import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import resList from "../utils/mockdata";
import { RES_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import { IsOpen } from "./RestaurantCard";

const Body=()=>{

   let [listOfRestaurants,setlistOfRestaurants]=useState([]); 
   let [filteredRestaurants,setFilteredRestaurants]=useState([]); 
   let [searchText,setSearchText]=useState("");  
   const onlineStatus=useOnlinestatus();
   const Open=IsOpen(RestaurantCard);
   
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

   if(onlineStatus === false) return <div className="w-screen h-screen flex justify-center items-center"><h1 className="text-red-600 font-semibold text-4xl">Seems like you are offline!!<br/><br/>please check your internet connection...</h1></div>
   
    return listOfRestaurants?.length === 0?
        (<Shimmer />):                             
        (<div className="body m-2">
            <div className="filter flex items-center">
                <div className="search my-5 mr-8">
                    <input type="text" className="search-box mr-2 border-2 border-solid border-orange-300 shadow-md" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
                    <button className="search-button px-4 py-[2px] bg-orange-300 font-normal shadow-md"
                    onClick={()=>{                      
                        const filteredRestaurants=listOfRestaurants.filter((Restaurant)=>Restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurants);                                  
                        }
                    }
                    >Search</button>
                </div>
                <div><button className="filter-button px-4 py-[2px] bg-orange-300 shadow-md" 
                onClick={()=>{

                        const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.avgRating>4)
                        setFilteredRestaurants(filteredRestaurants);
                        }}>
                    Top Rated Restaurants</button>
                </div>
            </div>
            <div className="rest-list flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant)=>(
                        <Link key={restaurant?.info?.id} to={"/restaurants/"+ restaurant?.info?.id}>{restaurant?.info?.isOpen ? <Open resData={restaurant}/> : <RestaurantCard  resData={restaurant}/>}</Link>
                    ))}
            </div>
        </div>
    );
                
};

export default Body;