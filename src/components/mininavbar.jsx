import React from 'react'
import Nav from 'react-bootstrap/Nav'
function Mininavbar(){
    return(
        <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link href="/class11">CLASS 11</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/class12">CLASS 12</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}
export default Mininavbar;