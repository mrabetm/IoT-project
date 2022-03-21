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
import DoughnutChart from "./DoughnutChart";



export default class Body extends Component<any, any>{
    private interval: NodeJS.Timeout | undefined;

    constructor(props) {
        super(props);
        this.state = {
            latestRoll: [],
            isLoaded: false,
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

    /**
     * @Author Mortada M'Rabet
     * This method returns the latest roll made from the database
     */
    getLatestRoll = () =>{
        Api.get('/roll/latest').then(res => {
            this.setState({
                latestRoll: res.data,
                isLoaded: true,
            })
        }).catch(console.error)
    }

    /**
     * @Author Mortada M'Rabet
     * This method returns a string/url of an image based on the score of the current roll
     */
    showPictureBasedOnScore(): string{
        switch (this.state.latestRoll["score"]){
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
        return (
            <div id="container">
                <div id="latestRollContainer">
                <Card style={{ width: '18rem' }}>
                    <Card.Img id="card-img" variant="top" src={this.showPictureBasedOnScore()}/>
                    <Card.Body>
                        <Card.Title>Latest roll</Card.Title>
                        <Card.Text>
                            You rolled the number {this.state.latestRoll["score"]} on {this.state.latestRoll["date"]}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div id="statisticsContainer">
                    <DoughnutChart/>
                </div>
            </div>
        )
    }
}