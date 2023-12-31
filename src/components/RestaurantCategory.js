import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory=({data})=>{
    //console.log(data);
    const [showItems, setShowItems]=useState(false);

    const handleClick = () =>{
        setShowItems(!showItems);
    }

    return (
        <div className="my-2 p-2 shadow-lg w-6/12 m-auto bg-blue-50">
            {/** Accordion Header */}
                <div className=" flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-md">{data?.title}({data?.itemCards?.length})</span>
                    <span>⮟</span>                    
                </div>
                <div>
                    {showItems && <ItemList items={data?.itemCards}/>}
                </div>
            {/** Accordion Body */}
        </div>
    );
};

export default RestaurantCategory;