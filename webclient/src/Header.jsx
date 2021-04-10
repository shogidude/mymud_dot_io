import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" style={{fontFamily:'Courier New Bold'}}>
      <LinkContainer to="/" style={{fontSize: '130%'}}><Navbar.Brand>Mymud</Navbar.Brand></LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto mr-5">
            <LinkContainer to="/play" style={{fontSize: '110%', fontFamily:'Courier New'}}><Nav.Link className="mr-2 text-light" href="/">Play</Nav.Link></LinkContainer>
            <LinkContainer to="/" style={{fontSize: '110%', fontFamily:'Courier New'}}><Nav.Link className="mr-2 text-light">Features</Nav.Link></LinkContainer>
            <LinkContainer to="/levels" style={{fontSize: '110%', fontFamily:'Courier New'}}><Nav.Link className="mr-2 text-light" href="/">Levels</Nav.Link></LinkContainer>
            <LinkContainer to="/about" style={{fontSize: '110%', fontFamily:'Courier New'}}><Nav.Link className="mr-2 text-light" href="/">About</Nav.Link></LinkContainer>
          </Nav>
          <LinkContainer to="/login"><Button className="px-3" variant="outline-light">Login</Button></LinkContainer>
        </Navbar.Collapse>
      </Navbar>
    </>
    );
  }
}
 
export default Header;