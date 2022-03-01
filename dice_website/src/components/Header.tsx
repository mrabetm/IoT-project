import React, {Component} from "react";
import logo from "../styles/resources/iot-chain-itc-logo.png";
import {Container, Navbar} from "react-bootstrap";


class Header extends Component {
    render(){
        return(
            <Navbar bg="dark" variant = "dark">
                <Container>
                    <Navbar.Brand>
                        <img className="logo d-inline-block align-top" alt="logo" src={logo}/>{''}
                        Dice Website
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default Header;