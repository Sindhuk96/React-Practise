import UserClassComp from "./UserClassComp";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor is called");        
    }

    componentDidMount(){
        console.log("Parent componentDidMount is called");   
    }

    render(){

        console.log("Parent render is called");  

        return (
            <div className="container">
                <h1>About Page</h1>
                <UserClassComp name="First" location="Hyderabad" contact="9638527412"/>
                <UserClassComp name="Second" location="Hyderabad" contact="9638527412"/>
                <UserClassComp name="Third" location="Hyderabad" contact="9638527412"/>           
            </div>
        );
    }
}

export default About;