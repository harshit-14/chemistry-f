import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import {Line,Doughnut} from 'react-chartjs-2';
import './css/profile.css'
import { PieChart } from 'react-minimal-pie-chart';
export default class Profile extends React.Component {

  state = {

    labels: [],
    datasets: [
      {
        label: 'Score',
        fill: true,
        lineTension: 0.5,
        backgroundColor: ['rgba(75,192,192,1)',	'rgb(0, 255, 128)','rgb(191, 0, 255)','rgb(255, 0, 255)','rgb(161, 195, 227)','rgb(191, 255, 0)','aqua','lawngreen'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: []
      }
    ],
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero:true,
              min: 0,
              max: 100    
          }
        }]
     },

  }
  
  render() {
    return (
      <div>
        <div >
          <div className="profile-header">
            <div className="profile-logo">{this.props.passed.name.substring(0,1)}</div>
            <div className="profile-name">{this.props.passed.name}</div>
          </div>
          <div className="profile-main-outer">
            <div >
          <Doughnut data={this.state} style={{width:"30vw"}}></Doughnut>
          </div>
          <div className="profile-main">
            <span className="profile-heading">Name :</span><span className="profile-value">{this.props.passed.name}</span>
            <span className="profile-heading">Email :</span><span className="profile-value">{this.props.passed.email}</span>
            <span className="profile-heading">Date of Birth :</span><span className="profile-value">-----</span>
          </div>
          </div>
        
        </div>

        <div style={{fontSize:"40px", fontWeight:"600",fontFamily:"fantasy",letterSpacing:"2px",marginTop:"40px"}}>Your Progress</div>
      <div style={{width:"700px", height:"760px", marginLeft:"25vw" }} className="graph">
       
        <Line 
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            scales: {
                y:{
                  beginAtZero:true,
                  min:0
                }
            }
          }}
        />
      </div>

    
      

      </div>
    );
  }
  componentDidMount()
  {
    console.log("profile ka compoenent did mount")
    
    let arr=[];
    let y=[];

      let x= this.props.passed.marks
      for(var i=0;i<x.length;i++)
      {
         arr.push("Quiz "+x[i].quizNumber)
         y.push(x[i].score)
      }
      this.setState({labels:arr})
      this.state.datasets[0].data=y;
      this.setState({datasets:this.state.datasets});
      this.setState({x:3});

  }
  componentDidUpdate(prevProps)
  {
    if(prevProps.passed.marks!=this.props.passed.marks)
    {
      let arr=[];
      let y=[];
     
        let x= this.props.passed.marks
        for(var i=0;i<x.length;i++)
        {
           arr.push("Quiz "+x[i].quizNumber)
           y.push(x[i].score)
        }
        this.setState({labels:arr})
        this.state.datasets[0].data=y;
        this.setState({datasets:this.state.datasets});
        this.setState({x:3});
    }
    }
    

}