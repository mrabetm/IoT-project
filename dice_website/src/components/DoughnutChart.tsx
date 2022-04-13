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
    /**
     * List of rolls get injected into the component when its initialize
     */
    componentDidMount() {
        this.getAllRolls()
    }
    /**
     * @Author Mortada M'Rabet
     * Method is used to fetch all rolls from the api/roll route
     * and puts them in an array
     */
    getAllRolls = () =>{
        Api.get('/roll')
            .then(res => {
                this.setState({
                    rolls: res.data
                })
            }).catch(console.error)
    }

    render() {
        const numbers = this.state.rolls.map((data) => data.score).sort((a,b) => a-b)
        const data = {
            //need to find a way to make this load data dynamically
            labels: ['1','2','3','4','5','6'],
            datasets: [
                {
                    label: 'Amount of rolls',
                    data: Array.from(new Set(numbers)).map(val => numbers.filter(v => v === val).length),
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
            <div id="chart">
                 <Doughnut data={data}/>
            </div>
        )
    }
}