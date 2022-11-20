import React from "react";
import axios from "axios";

import { Bar } from "react-chartjs-2";
import { Chart as chartJs } from "chart.js/auto";



class Chart extends React.Component{
    state = {        
        labels:this.props.DataTasks.map((value)=>value.Task),
        datasets: [{   
            label:"Task Period (/H)", 
            data: this.props.DataTasks.map((value)=>value.Period),
            backgroundColor:["purple"],  
            indexAxis: 'x',   
          }],
        }


    render(){
        return(
            <div>
            <div style={{width:600}}>
                <Bar data={this.state}/>
            </div>
            </div>
            
        )
    }
}
export default Chart ;