import Contact from "../Contact"
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";


test("Should load contact us page",()=>{
    render(<Contact />);

    //Querying
    const heading=screen.getByText("Contact Information");
    
    //assertion
    expect(heading).toBeInTheDocument();
    

});

