import React, {Component, useState} from "react";
import axios from "axios";
import Api from "../Route";
import {Button, Card} from "react-bootstrap";
import img1 from "../styles/resources/dice1.gif";
import img2 from "../styles/resources/dice2.png";
import img3 from "../styles/resources/dice3.png";
import img4 from "../styles/resources/dice4.png";
import img5 from "../styles/resources/dice5.png";
import img6 from "../styles/resources/dice6.gif";


class Body extends Component<any, any>{

    private interval: NodeJS.Timeout | undefined;

    constructor(props: {}) {
        super(props);
        this.state = {
            rolls: []
        }
    }

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

    showPictureBasedOnScore(): string{
        switch (this.state.rolls["score"]){
            case 1:
                return img1;
            case 2:
                return img2;

            case 3:
                return img3;

            case 4:
                return img4;

            case 5:
                return img5;
            case 6:
                return img6;
        }
        return "";
    }

    render(){
        console.log(this.showPictureBasedOnScore())
        return (
            <div id="container">
                <div id="latestRollContainer">
                <Card style={{ width: '18rem' }}>
                    <Card.Img id="card-img" variant="top" src={this.showPictureBasedOnScore()}/>
                    <Card.Body>
                        <Card.Title>You rolled {this.state.rolls["score"]}</Card.Title>
                        <Card.Text>
                            You rolled this number on {this.state.rolls["date"]}
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