import React, {Component, useState} from "react";
import axios from "axios";
import Api from "../Route";

class Body extends Component{
    state = {
        rolls: []
    }

    constructor(props: {}) {
        super(props);
        this.getRolls()
    }
    getRolls(){
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
                                <li key={roll['id']}>you have rolled {roll['number']}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Body;