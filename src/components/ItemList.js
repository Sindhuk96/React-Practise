import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) =>{
       
    return (
        <div className="m-auto">
            {
                items.map((item)=>(  
                    <div key={item?.card?.info?.name} className="flex m-2 p-4 border-black-50 border-b-2 justify-between">                  
                        <div className="flex flex-col text-left w-9/12">
                            {item?.card?.info?.isVeg ? <span className="text-green-500">Veg</span> : <span className="text-red-500">Non-Veg</span> }
                            <span>{item?.card?.info?.name}</span>
                            <span>{item?.card?.info?.price/100 ?? item?.card?.info?.defaultPrice/100}</span>
                        </div>
                        <div className="w-3/12">
                            <div className="absolute">
                                    <button className="mx-12 text-white bg-orange-500 rounded-md py-2 px-4 text-sm">Add+</button>
                            </div>
                            <img className="w-full" src={CDN_URL+item?.card?.info?.imageId}></img>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ItemList;