import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'



function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#food">Food</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default NavigationBar;
