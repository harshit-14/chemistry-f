import React,{Component} from 'react'
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Class11 from './components/class11'
import Chapter11 from './components/chapter11'
import Syllabus from './components/syllabus'
import Periodic from './components/periodic-table'
import Class12 from './components/class12'
import Chapter12 from './components/chapter12'
import Syllabus12 from './components/syllabus12'
import Contact from './components/contact'
import Login from './components/login'
import Register from './components/register'
import Quiz from './components/quiz'
import Footer from './components/footer'
import QuizLayout from './components/quizLayout'
import axios from 'axios'
import Profile from './components/profile'

class App extends Component {

  state={
    isAuthenticated:false,
    name:'',
    email:'',
    marks:[]
  }

   callback=()=>{
    const config ={
      headers:{
        'x-auth-token':localStorage.getItem('token')
      }
    } 
    axios.get("https://chemistry-backend.herokuapp.com/api/auth/getUser",config)
           .then(user=>{
             //console.log(user)
             const confi={
              headers:{
                "email":user.data.email
              }}
              axios.get("https://chemistry-backend.herokuapp.com/api/result/getscore",confi)
              .then(res=>{
                //console.log(res.data.marks);
                this.setState({marks:res.data.marks},()=>{
                  this.setAuthenticated(true);
                  this.setEmail(user.data.email);
                  this.setName(user.data.name);
                })
               // console.log("axios ki user request")
               
                // console.log(this.state.marks)
                console.log("axios ki marks request")
              })
              .catch(err=>{
                console.log(err)
              })
 
            
           })
           .catch(err=>{
             console.log(err)
           })
   }

   setEmail = async (email) =>{
     await this.setState({email:email})
   }
   setName = (name) =>{
     this.setState({name:name})
   }
   setAuthenticated = (value)=>{
     this.setState({isAuthenticated:value})
   }
   setMarks = (value)=>{
     this.marks=value
   }
   componentDidMount(){
    console.log("app ka componenet did mount");
    //console.log(localStorage.getItem('token'))
    const config ={
      headers:{
        'x-auth-token':localStorage.getItem('token')
      }
    } 
    axios.get("https://chemistry-backend.herokuapp.com/api/auth/getUser",config)
           .then(user=>{
             //console.log(user)
             const confi={
              headers:{
                "email":user.data.email
              }}
              axios.get("https://chemistry-backend.herokuapp.com/api/result/getscore",confi)
              .then(res=>{
                //console.log(res.data.marks);
                this.setState({marks:res.data.marks},()=>{
                  this.setAuthenticated(true);
                  this.setEmail(user.data.email);
                  this.setName(user.data.name);
                })
               // console.log("axios ki user request")
               
                // console.log(this.state.marks)
                console.log("axios ki marks request")
              })
              .catch(err=>{
                console.log(err)
              })
 
            
           })
           .catch(err=>{
             console.log(err)
           })
          };
   render()
   {
    //window.location.reload();
     console.log("app ka render");

    // console.log(this.state);
    return (
     <div className="App">
        <BrowserRouter onUpdate={() => window.scrollTo(0, 0)} >
        <Navbar  callback={this.callback} passed={this.state} setMarks={this.setMarks} setName={this.setName} setEmail={this.setEmail} setAuthenticated={this.setAuthenticated}/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/class11" exact component={Class11}></Route>
          <Route path="/class11/:name/:id" component={Chapter11}></Route>
          <Route path="/class12" exact component={Class12}></Route>
          <Route path="/class12/:name/:id" component={Chapter12}></Route>
          <Route path="/syllabus11" component={Syllabus}></Route>
          <Route path="/syllabus12" component={Syllabus12}></Route>
          <Route path="/periodic-table" component={Periodic}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/login"  render={(props)=><Login {...props} callback={this.callback}  setName={this.setName} setEmail={this.setEmail} setAuthenticated={this.setAuthenticated}></Login>}></Route>
          <Route path="/register" render={(props)=><Register {...props} setName={this.setName} setEmail={this.setEmail} setAuthenticated={this.setAuthenticated}></Register>}></Route>
          <Route path="/quiz" exact render={(props)=><Quiz {...props} passed={this.state}></Quiz>}></Route>
         <Route  path="/quiz/:id" render={(props)=><QuizLayout {...props} passed={this.state}></QuizLayout>}></Route>
         <Route path="/profile" render={(props)=><Profile {...props} passed={this.state}></Profile>}></Route>
        </Switch>
        <Footer></Footer>
        </BrowserRouter>
      </div>
    )
   }
  
}

export default App;