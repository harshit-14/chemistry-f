import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
function Mininavbar(){
    return(
        <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link><Link to="/class11" style={{textDecoration:"none"}}>CLASS 11</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/class12" style={{textDecoration:"none"}}>CLASS 12</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/quiz" style={{textDecoration:"none"}}>Quiz</Link></Nav.Link>
        </Nav.Item>
      </Nav>
    )
}
export default Mininavbar;