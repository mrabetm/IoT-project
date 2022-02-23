import React, {Component} from "react";
import axios from "axios";

class Body extends Component{
    state = {
        rolls: []
    }
    render(){
        function getAllRolls(){
            axios.get(``)
        }
        return (
            <div>
                <p>this is the body</p>
            </div>
        )
    }
}

export default Body;