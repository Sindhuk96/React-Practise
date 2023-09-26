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
            <div className="Logo-container">
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

const resList=[
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
            "feeDetails": {
              "restaurantId": "618626",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3900
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3900
            },
            "parentId": "371281",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 4,
              "serviceability": "SERVICEABLE",
              "slaString": "22 mins",
              "lastMileTravelString": "4.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-27 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-93b325e4-47e9-42b7-89ab-2a13d88b7728"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-hitech-city-hyderabad-618626",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "39546",
            "name": "Mehfil",
            "cloudinaryImageId": "stnwpjuu5fhehsx1dw4z",
            "locality": "Jaihind Enclave",
            "areaName": "Hitec City",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Tandoor",
              "Chinese",
              "Kebabs"
            ],
            "avgRating": 4,
            "feeDetails": {
              "restaurantId": "39546",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3900
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3900
            },
            "parentId": "637",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 4.9,
              "serviceability": "SERVICEABLE",
              "slaString": "24 mins",
              "lastMileTravelString": "4.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-27 02:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-93b325e4-47e9-42b7-89ab-2a13d88b7728"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mehfil-jaihind-enclave-hitec-city-hyderabad-39546",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "27447",
            "name": "Pista House Restaurant & Bakery",
            "cloudinaryImageId": "v7btfi5brrsijry8j02n",
            "locality": "Kondapur",
            "areaName": "Kondapur",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Chinese",
              "Kebabs",
              "Mughlai",
              "Tandoor"
            ],
            "avgRating": 4.1,
            "feeDetails": {
              "restaurantId": "27447",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4400
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4400
            },
            "parentId": "457788",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 3.5,
              "serviceability": "SERVICEABLE",
              "slaString": "26 mins",
              "lastMileTravelString": "3.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-26 23:59:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-93b325e4-47e9-42b7-89ab-2a13d88b7728"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/pista-house-restaurant-and-bakery-kondapur-hyderabad-27447",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "456004",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "Raja Rajeshwar Nagar",
            "areaName": "Kondapur",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "avgRating": 3.8,
            "feeDetails": {
              "restaurantId": "456004",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2800
            },
            "parentId": "547",
            "avgRatingString": "3.8",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 16,
              "lastMileTravel": 1,
              "serviceability": "SERVICEABLE",
              "slaString": "16 mins",
              "lastMileTravelString": "1.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-26 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-93b325e4-47e9-42b7-89ab-2a13d88b7728"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-raja-rajeshwar-nagar-kondapur-hyderabad-456004",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "256893",
            "name": "McDonald's",
            "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
            "locality": "Hyderabad Kondapur LG",
            "areaName": "Forest Dept Colony",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.1,
            "feeDetails": {
              "restaurantId": "256893",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2800
            },
            "parentId": "630",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "20 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-26 23:45:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-93b325e4-47e9-42b7-89ab-2a13d88b7728"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-kondapur-lg-forest-dept-colony-hyderabad-256893",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "129541",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Capital Mall",
            "areaName": "Forest Dept Colony",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 3.8,
            "feeDetails": {
              "restaurantId": "129541",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2800
            },
            "parentId": "166",
            "avgRatingString": "3.8",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 41,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "41 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-26 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "EVERY ITEM",
              "subHeader": "@ ₹159"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-93b325e4-47e9-42b7-89ab-2a13d88b7728"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-capital-mall-forest-dept-colony-hyderabad-129541",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "24628",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "awdawriuolhirfo2ngsx",
            "locality": "Pearl Plaza",
            "areaName": "Laxmi Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "24628",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2800
            },
            "parentId": "2456",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 25,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-27 02:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹999",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-93b325e4-47e9-42b7-89ab-2a13d88b7728"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-pearl-plaza-laxmi-nagar-hyderabad-24628",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "374720",
            "name": "BOX8 - Desi Meals",
            "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
            "locality": "Kondapur",
            "areaName": "Land Mark Residency",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "North Indian",
              "Biryani",
              "Thalis",
              "Home Food"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "374720",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3900
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3900
            },
            "parentId": "10655",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 3.6,
              "serviceability": "SERVICEABLE",
              "slaString": "12-22 mins",
              "lastMileTravelString": "3.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-27 02:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-93b325e4-47e9-42b7-89ab-2a13d88b7728"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/box8-desi-meals-kondapur-land-mark-residency-hyderabad-374720",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "416047",
            "name": "EatFit",
            "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
            "locality": "Sri Mytri Square Opp.Sarath City Mall",
            "areaName": "Kohtaguda",
            "costForTwo": "₹270 for two",
            "cuisines": [
              "Chinese",
              "Healthy Food",
              "Tandoor",
              "Pizzas",
              "North Indian",
              "Thalis",
              "Biryani"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "416047",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2800
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2800
            },
            "parentId": "76139",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "20 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-26 23:59:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "loyaltyDiscoverPresentationInfo": {
              "badgeType": "BADGE_TYPE_OFFER_PACK",
              "offerSubText": "with offer pack",
              "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-93b325e4-47e9-42b7-89ab-2a13d88b7728"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/eatfit-sri-mytri-square-opp-sarath-city-mall-kohtaguda-hyderabad-416047",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
      ];

//passing dynamic data without destructuring
const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,cuisines,cloudinaryImageId,costForTwo,avgRating}=resData?.info;
  return (
    <div className="rest-card" style={styleCard}>
        <img className="rest-logo" alt="rest-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
        <h4>{name}</h4>
        <h5>{avgRating}</h5>
        <br></br>
        <div>{cuisines.join(",")}</div>
        <div>{costForTwo}</div>
    </div>
  );  
};

const Body=()=>{

    return (
        <div className="body">
            <div className="search">search</div>
            <div className="rest-list">
                {
                    resList.map((restaurant)=>(
                        <RestaurantCard resData={restaurant}/>
                    ))                   
                }
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