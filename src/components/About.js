import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log("Parent componentDidMount");

    }

    render() {

        // console.log("Parent Render");

        return (
        
            <div>
                <h1>About Component</h1>
                <h2>Welcome to React Course</h2>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
    
                <UserClass name={"First"} location={"Srikakulam"}/>
            </div>
        );
    }

}

export default About;