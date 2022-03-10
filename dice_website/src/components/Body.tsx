import React, {Component, useState} from "react";
import axios from "axios";
import Api from "../Route";
import {Button, Card} from "react-bootstrap";

class Body extends Component<any, any>{

    private interval: NodeJS.Timeout | undefined;

    constructor(props: {}) {
        super(props);
        this.state = {
            rolls: []
        }
        console.log(this.state)

    }

    // showPictureBasedOnScore(){
    //     if (this.state.rolls )
    // }

    componentDidMount() {
        this.getLatestRoll();
        this.interval = setInterval(this.getLatestRoll, 5000)
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }
    getLatestRoll = () =>{
        Api.get('/roll/latest').then(res => {
            this.setState({rolls: res.data})
        })
    }

    render(){
        return (
            <div id="container">
                <div id="latestRollContainer">
                {/*<ul>*/}
                {/*    {this.state.rolls*/}
                {/*            .map(roll =>*/}
                {/*                <li key={roll['id']}>you have rolled {roll['score']}</li>*/}
                {/*        )*/}
                {/*    }*/}
                {/*</ul>*/}

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180"/>
                    <Card.Body>
                        <Card.Title>You rolled {}
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div id="statisticsContainer">

                </div>
            </div>
        )
    }
}

export default Body;