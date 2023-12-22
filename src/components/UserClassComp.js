import React from "react";

class UserClassComp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:0
        } ;
        console.log(this.props.name+"Constructor is called");   
    }

    componentDidMount(){
        console.log(this.props.name+"componentDidMount is called");  
    }    

    render(){

        console.log(this.props.name+"render is called");   

        const {name,location,contact} =this.props;
        const {count}=this.state;        

        return (<div className="User-Card">
                    <h2>{name}</h2>
                    <h3>{location}</h3>
                    <h4>{contact}</h4>
                    <h4>Count:{count}</h4>
                    <button onClick={()=>{
                        this.setState({
                            count:this.state.count+1
                        })
                    }}> click Here </button>
                </div>);
    };
}; 

export default UserClassComp;