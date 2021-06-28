import React, { Component } from 'react'
import {quizData} from './quizdata'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
export default class QuizLayout extends Component {

  /*   onsubmit=()=>{
       
   var x =   document.getElementsByName('1')
   var y = document.getElementsByName('2')
   var len = quizData[this.props.match.params.id.substring(4)-1].questions.length;
  for(var i=1;i<= len ;i++)
   {
       for(var j=0;j<4;j++)
       {
        if(document.getElementsByName(i)[j].checked)
        {
            console.log(i)
            console.log(j+1)
        }
       }
    
   }
     console.log(x)
    }
*/
    
    state={
        selectedValue:[],
        score:null,
    }
    handlechange=(e)=>{
        //console.log(e.target.value);
         let temp=[...this.state.selectedValue]
         temp[e.target.name]=e.target.value
         this.setState({selectedValue:temp})
        
    }
      
     onsubmit=async ()=>{
        var len = quizData[this.props.match.params.id.substring(4)-1].questions.length;
       var ans = quizData[this.props.match.params.id.substring(4)-1].questions;
       console.log(ans)
       var count=0;
      for(var i=1;i<=len;i++)
        {
            var l =this.state.selectedValue[i];
           // console.log(l);
            // console.log(ans[i-1].answer)
         
            if(ans[i-1].answer === l)
            {
                count++;
            }
        }
        console.log(count);
        this.setState({
            score:count
        },()=>{window.alert("your score is : "+this.state.score)
               
              const obj={
                email:this.props.passed.email,
                quizNumber:this.props.match.params.id.substring(4),
                score:this.state.score,
              }
              console.log("harshit")
              console.log(this.props.passed.email)
              console.log(this.props.match.params.id.substring(4)-1)
              console.log(this.state.score)
            axios.post('http://localhost:5000/api/result/marks',obj)
                 .then(res=>{
                     console.log(res);
                 })                      
                .catch(err=>{
                    console.log(err.response)
                })

               this.props.history.push('/quiz')
    
        }
        )
    


    /*    handleChange(input) {
            this.setState({
              load: true
            }, () => {
              this.props.actions.getItemsFromThirtParty(input)
              this.setState({ load: false })
            })
          }*/
     }
    render() {
      
        return (
            <div>
                 {this.props.passed.isAuthenticated
                 ?
                 <div>
                     
                        {quizData[this.props.match.params.id.substring(4)-1].name}
                {quizData[this.props.match.params.id.substring(4)-1].questions.map((x)=>{
                    return(
                        <div className="container mt-sm-5 my-1">
                           
                            <div className="question ml-sm-5 pl-sm-5 pt-2">
                                <div className="py-2 h5"><b>{x.ques}</b></div>
                                <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                    <label className="options" >{x.option1}
                                    <input type="radio"  value="1" name={x.no} id="1" onChange={(e)=>this.handlechange(e)}></input>     
                                    <span className="checkmark"></span> </label>
                                    <label className="options">{x.option2}
                                    <input type="radio" value="2" name={x.no} id="2" onChange={(e)=>this.handlechange(e)}></input>       
                                    <span className="checkmark"></span> </label>
                                    <label className="options">{x.option3}
                                    <input type="radio" value="3" name={x.no} id="3" onChange={(e)=>this.handlechange(e)}></input>
                                    <span className="checkmark"></span> </label>
                                    <label className="options">{x.option4}
                                    <input type="radio" value="4" name={x.no} id="4" onChange={(e)=>this.handlechange(e)}></input>
                                    <span className="checkmark"></span> </label>
                                </div>
                            </div>
                        </div>
                          )
                })}
   
                            <Button variant="info" style={{marginBottom:'2rem'}} onClick={()=>{this.onsubmit()}}>SUBMIT</Button>
                 </div>
                 :
                 <div>PLEASE LOGIN</div>
                 }
               
            </div>
        )
    }
}