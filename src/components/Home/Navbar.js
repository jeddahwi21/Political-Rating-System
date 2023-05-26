import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Images/logo.png'

const Navbar1 = () => {
  return (
    <div className='mb-5'>
        <Navbar expand="lg" style={{backgroundColor: 'lightblue', color: 'white' }}>
          <Container fluid>
            <Navbar.Brand><img className='navimg' src={logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Container className=" d-flex justify-content-end">
                <Nav>
                  <Link className='link1 mx-2' to="/" >Home</Link>
                  <Link className='link1 mx-2' to="/about">About</Link>
                  <Link className='link1 mx-2' to="/party">Parties</Link>
                  <Link className='link1 mx-2' to="/politicians">Politicians</Link>

                </Nav>
              </Container>

              

            </Navbar.Collapse>
          </Container>
        </Navbar>

        </div>
  );
}

export default Navbar1;
