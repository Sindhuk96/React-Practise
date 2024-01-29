import {render,screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import ResMockData from "../mocks/restaurantCardMock.js";

test("Should load restaurant card",()=>{

    render(
        <RestaurantCard resData={ResMockData} />
    );

    //Querying
    const cardItems=screen.getByText("Theobroma");

    //Assertion
    expect(cardItems).toBeInTheDocument();
})