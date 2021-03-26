import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'



function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/food">Seasonal Produce</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/food">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default NavigationBar;
