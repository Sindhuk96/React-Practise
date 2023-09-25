import React from "react";
import ReactDOM from "react-dom";

/* 
    - Header
        Logo
        Nav Links
    -Body
        search(search container)
        ReastaurantsList(Restaurants container)
            restaurant cards
                Image
                Name of restaurant
                Cuisines
                Star Rating
                ETA
                Delivery Time
    -Footer
        copyright
        Address
        Contact
        Links
*/

const Header = ()=>{

    return (
        <div className="Header">
            <div >
                <img className="Logo" alt="App-Logo" src="http://127.0.0.1:8080/assets/petBarlo_Logo.png"/>
            </div>
            <div className="NavLinks">
                    <ul >
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Account</li>
                        <li>Cart</li>                  
                    </ul>
            </div>
        </div>
    );
};

const styleCard ={
    backgroundColor:"#F0F0F0"
};

const RestaurantCard=()=>{
  return (
    <div className="rest-card" style={styleCard}>
        <img className="rest-logo" alt="rest-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c49f74c4c8c4098a384c511817d7ebdf" />
        <h3>Meghana Foods</h3>
        <h4>Biryanis</h4>
        <h4>4.4 stars</h4>
        <h4>30 mins</h4>
    </div>
  );  
};

const Body=()=>{

    return (
        <div className="body">
            <div className="search">search</div>
            <div className="rest-list">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    );

};

const AppLayout=()=>{

    return (
        <div className="App">
            <Header/>
            <Body />
        </div>
    );
};


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);