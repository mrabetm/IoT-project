import React, {Component, useState} from "react";
import axios from "axios";
import Api from "../Route";

class Body extends Component{
    state = {
        rolls: [] = useState<any[]>([])
    }

    // getAllRolls() {
    //     Api.get(`/rolls`)
    //         .then(res => {
    //             const rolls = res.data;
    //             this.setState({rolls})
    //             console.log(res)
    //         })
    // }

    constructor() {
        super();
        Api.get('/rolls').then(res => {
            console.log(res.data)
            this.setState({rolls: res.data})
        })
    }

    render(){
        return (
            <div>
                <ul>
                    {this.state.rolls
                            .map(roll =>
                                <li key={roll.id}>{roll.number}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Body;