import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";

const Body=()=>{

    let listOfRestaurants=[       
            
        {
            "info": {
              "id": "618626",
              "name": "Leon's - Burgers & Wings (Leon Grill)",
              "cloudinaryImageId": "znnusox0tpamu6pvol34",
              "areaName": "Hitech City",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "American",
                "Snacks",
                "Turkish",
                "Portuguese",
                "Continental"
              ],
              "avgRating": 4.1,
              "sla": {
                "deliveryTime": 22,
              },   
            }
          }, 
          {
            "info": {
              "id": "618627",
              "name": "KFC",
              "cloudinaryImageId": "znnusox0tpamu6pvol34",
              "areaName": "Hitech City",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Snacks"
              ],
              "avgRating":3.5,
              "sla": {
                "deliveryTime": 22,
              },   
            }
          }, 
          {
            "info": {
              "id": "618628",
              "name": "Karachi Bakery",
              "cloudinaryImageId": "znnusox0tpamu6pvol34",
              "areaName": "Hitech City",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Bakery"
              ],
              "avgRating": 4.2,
              "sla": {
                "deliveryTime": 22,
              },   
            }
          }, 
    ];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-button" 
                onClick={()=>{

                        listOfRestaurants=listOfRestaurants.filter((res)=>res.info.avgRating>4)
                        console.log(listOfRestaurants);
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