import UserClassComp from "./UserClassComp";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"default",
                avatar_url:"default"
            }
        }

        //console.log("Parent Constructor is called");        
    }

    async componentDidMount(){
        //console.log("Parent componentDidMount is called"); 
        const data=await fetch("https://api.github.com/users/Sindhuk96");
        const json=await data.json();    

        this.setState(
            {
                userInfo:json
            }
        )
    } 
    
    componentDidUpdate(){
        console.log("Parent componentDidUpdate is called");   
    }

    componentWillUnmount(){
        console.log("Parent componentWillUnmount is called");   
    }

    render(){

        console.log("Parent render is called");
        const {name,avatar_url}  =this.state.userInfo;

        return (
            <div className="container">
                <h1>About Page</h1>
                <UserClassComp name={name} location="Hyderabad" contact="9638527412" photo={avatar_url}/>                          
            </div>
        );
    }
}

export default About;