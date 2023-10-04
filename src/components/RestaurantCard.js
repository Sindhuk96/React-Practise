import { CDN_URL } from "../utils/constants";

//passing dynamic data without destructuring
const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,cuisines,cloudinaryImageId,costForTwo,avgRating}=resData?.info;
  return (
    <div className="rest-card" style={{ backgroundColor:"aliceblue"}}>
        <img className="rest-logo" alt="rest-logo" src={ CDN_URL+ cloudinaryImageId} />
        <h4>{name}</h4>
        <h5>{avgRating}</h5>
        <span></span>
        <div>{cuisines.join(",")}</div>
        <div>{costForTwo}</div>
    </div>
  );  
};

export default RestaurantCard;