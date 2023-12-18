import { useRouteError} from "react-router-dom";

const Error=()=>{
    
    const err=useRouteError();
    console.log(err);
    return (               
        <div className="error">
            <h1>oops! Entered wrong url</h1>
            <h2>Please enter valid url</h2>
        </div>                                 
    );
};

export default Error;

