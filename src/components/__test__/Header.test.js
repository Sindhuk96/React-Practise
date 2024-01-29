import { fireEvent, render,screen} from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../Header.js";


test("should have login Button in the header component",()=>{

    render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
            </BrowserRouter>
    );

    //Querying
    const loginBtn=screen.getByRole("button",{name:"login"});  

    //assertion
    expect(loginBtn).toBeInTheDocument();
    
})

test("should have cart items in header",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );    

    //Querying
    const cartItems=screen.getByText(/Cart/);  

    //assertion
    expect(cartItems).toBeInTheDocument();

})

test("should change login button to logout on click",()=>{

    render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
            </BrowserRouter>
    );

    //Querying
    const loginBtn=screen.getByRole("button",{name:"login"});  

    fireEvent.click(loginBtn);

    const logoutBtn=screen.getByRole("button",{name:"logout"});  

    //assertion
    expect(logoutBtn).toBeInTheDocument();
    
})