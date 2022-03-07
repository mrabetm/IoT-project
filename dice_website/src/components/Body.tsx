import React, {Component, useState} from "react";
import axios from "axios";
import Api from "../Route";
import {Button, Card} from "react-bootstrap";

class Body extends Component{
    state = {
        rolls: []
    }

    constructor(props: {}) {
        super(props);
        this.getRolls()
    }

    getRolls(){
        Api.get('/roll').then(res => {
            console.log(res.data)
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

                {/*<Card style={{ width: '18rem' }}>*/}
                {/*    <Card.Img variant="top" src="holder.js/100px180" />*/}
                {/*    <Card.Body>*/}
                {/*        <Card.Title>Card Title</Card.Title>*/}
                {/*        <Card.Text>*/}
                {/*            Some quick example text to build on the card title and make up the bulk of*/}
                {/*            the card's content.*/}
                {/*        </Card.Text>*/}
                {/*        <Button variant="primary">Go somewhere</Button>*/}
                {/*    </Card.Body>*/}
                {/*</Card>*/}
                </div>
                <div id="statisticsContainer">

                </div>
            </div>
        )
    }
}

export default Body;