import React,{Component} from 'react';
import './css/login.css'
import axios from 'axios'
class Register extends Component{
    state = {
        email:'',
        password:'',
        name:''
    }
    handlechange=(e)=>{
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
      
        })
    }
    onsubmit= (e)=>{
        e.preventDefault();
        const user = {
            email:this.state.email,
            password:this.state.password,
            name:this.state.name
        }
         axios.post('https://chemistry-backend.herokuapp.com/api/auth/register',user)
         .then(user=>{
          console.log(user);
          console.log(user.data.user.name);
          this.props.setAuthenticated(true);
          this.props.setName(user.data.user.name);
          this.props.setEmail(user.data.user.email);
          localStorage.setItem('token',user.data.token);
          this.props.history.push('/');
         })
         .catch(err=>{
             console.log(err.response.data.msg)
             window.alert(err.response.data.msg)

         })
      
    }
    render()
    {
       
        return(
              <section className="section">
            <div class="box">
                <div class="form">
                    <h2>Register</h2>
                    <form>
                    <div className="inputbox">
                            <input type="text" name="name" value={this.state.name} onChange={(e)=>this.handlechange(e)} placeholder="name"></input>
                            <i class="fas fa-user"></i>

                        </div>
                        <div className="inputbox">
                            <input type="email" name="email" value={this.state.email} onChange={(e)=>this.handlechange(e)} placeholder="username"></input>
                            <i class="fas fa-user"></i>

                        </div>
                        <div className="inputbox">
                            <input type="password" name="password" value={this.state.password} placeholder="password" onChange={(e)=>this.handlechange(e)}></input>
                            <i class="fas fa-lock"></i>

                        </div>
                        <div className="inputbox">
                            <input type="submit" onClick={(e)=>this.onsubmit(e)} value="Register"></input>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        )
    }
}

export default Register;