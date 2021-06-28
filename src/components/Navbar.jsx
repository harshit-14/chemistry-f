import React,{Component} from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import MiniNavBar from './mininavbar'
import logo from './logo.jpeg'
import './css/navbar.css'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router';



class NavBar extends Component{

    logout=()=>{
      localStorage.removeItem('token');
      this.props.setName('');
      this.props.setAuthenticated(false);
      this.props.setEmail('');
      this.props.setMarks(null);
    }
   render()
   {   console.log("navbar")
    return(
      <div>
      <Navbar bg="dark" variant="dark" expand="lg">
<Navbar.Brand ><Link to="/"><img className="logo" src={logo} ></img></Link></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link ><Link to="/" style={{textDecoration:"none"}}>Home</Link></Nav.Link>
    <Nav.Link ><Link to="/periodic-table" style={{textDecoration:"none"}}>Periodic Table</Link></Nav.Link>
    <Nav.Link ><Link to="/syllabus11" style={{textDecoration:"none"}}>Syllabus 11</Link></Nav.Link>
    <Nav.Link ><Link to="/syllabus12" style={{textDecoration:"none"}}>Syllabus 12</Link></Nav.Link>
   
    <Nav.Link style={{textDecoration:"none"}}><Link to="/contact">Contact Me</Link></Nav.Link>
  </Nav>
  {this.props.passed.isAuthenticated
  ?
  <div>
  <Link to="/profile"><Button variant="outline-info" style={{marginRight:"2rem"}}>hi! {this.props.passed.name}</Button></Link>
  <Link to="/"><Button variant="outline-danger" style={{marginRight:"2rem"}} onClick={()=>this.logout()}>Logout</Button></Link>
  </div>
  :
  <div>
  <Link to="/login"><Button variant="outline-success" style={{marginRight:"2rem"}}>Login</Button></Link>
  <Link to="/register"><Button variant="outline-success" style={{marginRight:"2rem"}}>Register</Button></Link>  
  </div>
  }
</Navbar.Collapse>
</Navbar>
<MiniNavBar />
</div>
  )
   }
    
}
export default NavBar;