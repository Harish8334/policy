import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import policyLogo from '../assets/policy-logo.jpg';
import './header.css'
import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Header(props){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
      
        <header>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <div className='logo-div'>
        <Navbar.Brand href="#home"><img src={policyLogo} alt="" className='logoImg'/></Navbar.Brand>
        <Navbar.Text>
           <a href="" className='phoneNumber'>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
             </svg>
            044-12345678</a>
          </Navbar.Text>
          </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
          
          <div className="container-fluid">
        <ul className="navbar-nav">
        <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Personal Insurance   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Health Insurance
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Term Life Insurance
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Car Insurance
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2 Wheeler Insurance
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Employee Insurance<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
                 Group  Health Insurance
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Group Term Life Insurance
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Group Car Insurance
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                 Group  2 Wheeler Insurance
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Become a POSP
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
             Claim/Services
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sign-in<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
                 Customer Sign-IN
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                 Employee Sign-In
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                Posp
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
               PN Employee
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      </Nav>
     
      </Navbar.Collapse>
      </Container>
    </Navbar>
  

      <Modal show={show} onHide={handleClose} onClick={handleShow}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </header>
    );
}
export default Header