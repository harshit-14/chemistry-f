import React,{Component} from 'react';
import './css/login.css'
import axios from 'axios'
class Login extends Component{
    state = {
        email:'',
        password:''
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
            password:this.state.password
        }
         axios.post('https://chemistry-backend.herokuapp.com/api/auth/login',user)
         .then(user=>{
          //console.log(user);
          this.props.setAuthenticated(true);
          this.props.setName(user.data.user.name);
          this.props.setEmail(user.data.user.email);
          localStorage.setItem('token',user.data.token);
          this.props.callback();
          this.props.history.push('/');
         })
         .catch(err=>{
            // console.log(err)
            window.alert(err.response.data.msg);

         })
      
    }
    render()
    {
       
        return(
              <section className="section">
            <div className="box">
                <div className="form">
                    <h2>Login</h2>
                    <form>
                        <div className="inputbox">
                            <input type="email" name="email" value={this.state.email} onChange={(e)=>this.handlechange(e)} placeholder="username"></input>
                            <i class="fas fa-user"></i>

                        </div>
                        <div className="inputbox">
                            <input type="password" name="password" value={this.state.password} placeholder="password" onChange={(e)=>this.handlechange(e)}></input>
                            <i class="fas fa-lock"></i>

                        </div>
                        <div className="inputbox">
                            <input type="submit" onClick={(e)=>this.onsubmit(e)} value="Login"></input>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        )
    }
}

export default Login;