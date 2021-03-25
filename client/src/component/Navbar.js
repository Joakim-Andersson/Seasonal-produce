import React from 'react';
import ReactBootstrap, {Navbar, Button, Nav, Form, FormControl} from 'react-bootstrap'



function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#food">Food</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    )
}

export default NavigationBar;
