import {Component, useState} from "react";
import Api from "../Route";
import {} from "react-chartjs-2"


class ChartComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rollsAll: [],
            data: {
                labels: ["1","2","3","4","5","6"],
                datasets: [{
                    label: "my first Dataset",
                    data: [300, 50, 100],
                }]
            }
        }
    }

    getRestRolls = () =>{
        Api.get('/roll').then((res)=>{
           this.setState({rollsAll: res.data})
        })
    }


}

export default ChartComponent;