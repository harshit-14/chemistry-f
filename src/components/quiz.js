import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './css/quiz.css'
import {quizData} from './quizdata'

export default class quiz extends Component {

    render() {
        console.log("rendering times")
        return (
            <div>
                Welcome to Our Quiz Section..!!
              
               {this.props.passed.isAuthenticated
               ?
               <div>
               <div >
               <div>Score will be recorded once.</div>
               <br></br>
               {quizData.map(x=>{
                   return(
                       <div className="inner-chapters"><Link to={{pathname:'/quiz/'+x.id}} className="chapter">{x.name}</Link></div>
                      )
               })
             
               }
               
              </div>
              </div>
              :
              <div>PLEASE LOGIN TO CONTINUE
              </div> 
               }
            </div>
        )
    }
}