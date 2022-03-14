import React, {Component} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Pie, Doughnut} from 'react-chartjs-2';
import Api from "../Route";

ChartJS.register(ArcElement, Tooltip, Legend);


export default class DoughnutChart extends Component<any,any>{
    constructor(props) {
        super(props);
        this.state = {
            rolls: [],
        }
    }

    componentDidMount() {
        this.getAllRolls()

    }

    getAllRolls = () =>{
        Api.get('/roll')
            .then(res => {
                this.setState({
                    rolls: res.data
                })
            }).catch(console.error)
    }

    render() {
        console.log(this.state.rolls)

        const labelArray = []
        const dataSetArray = []

        const data = {
            labels: this.state.rolls.map((data) => data.score),
            datasets: [
                {
                    label: 'Amount of rolls',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        };
        return (
            <Doughnut data={data}/>
        )
    }
}